import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const generateCaptcha = () => {
  const operations = ['+', '-'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  let num1: number, num2: number, answer: number;
  
  if (operation === '+') {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    answer = num1 + num2;
  } else {
    num1 = Math.floor(Math.random() * 10) + 5;
    num2 = Math.floor(Math.random() * num1);
    answer = num1 - num2;
  }
  
  return { question: `${num1} ${operation} ${num2}`, answer };
};

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '+998 ',
    message: '',
  });

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput('');
  };

  const formatPhoneNumber = (value: string) => {
    // Keep +998 prefix and only allow digits after it
    const prefix = '+998 ';
    if (!value.startsWith(prefix)) {
      return prefix;
    }
    
    const digits = value.slice(prefix.length).replace(/\D/g, '');
    
    // Format as XX XXX XX XX
    let formatted = prefix;
    if (digits.length > 0) formatted += digits.slice(0, 2);
    if (digits.length > 2) formatted += ' ' + digits.slice(2, 5);
    if (digits.length > 5) formatted += ' ' + digits.slice(5, 7);
    if (digits.length > 7) formatted += ' ' + digits.slice(7, 9);
    
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate captcha
    if (parseInt(captchaInput) !== captcha.answer) {
      toast({
        title: t('contact.captchaError'),
        description: "",
        variant: "destructive",
      });
      refreshCaptcha();
      return;
    }
    
    // Validate phone number (should have 9 digits after +998)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 12) {
      toast({
        title: "Error",
        description: t('contact.phoneError'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-telegram', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: t('contact.success'),
        description: "",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        phone: '+998 ',
        message: '',
      });
      refreshCaptcha();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: t('contact.error'),
        description: "",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="request" className="py-section bg-background">
      <div className="luxury-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            {t('contact.label')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight font-light text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground font-light max-w-xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-light text-foreground/80">
                {t('contact.firstName')}
              </label>
              <Input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="bg-card border-border/50 focus:border-primary/50 h-12 rounded-xl"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-light text-foreground/80">
                {t('contact.lastName')}
              </label>
              <Input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="bg-card border-border/50 focus:border-primary/50 h-12 rounded-xl"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-light text-foreground/80">
              {t('contact.phone')}
            </label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder={t('contact.phonePlaceholder')}
              className="bg-card border-border/50 focus:border-primary/50 h-12 rounded-xl"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-light text-foreground/80">
              {t('contact.message')}
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-card border-border/50 focus:border-primary/50 min-h-[150px] rounded-xl resize-none"
              required
            />
          </div>

          {/* Captcha */}
          <div className="space-y-2">
            <label className="text-sm font-light text-foreground/80">
              {t('contact.captcha')}: {captcha.question} = ?
            </label>
            <div className="flex gap-4">
              <Input
                type="number"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                placeholder={t('contact.captchaPlaceholder')}
                className="bg-card border-border/50 focus:border-primary/50 h-12 rounded-xl flex-1"
                required
              />
              <Button
                type="button"
                variant="outline"
                onClick={refreshCaptcha}
                className="h-12 rounded-xl px-4"
              >
                ↻
              </Button>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 rounded-xl bg-foreground text-background hover:bg-foreground/90 font-light tracking-wider text-sm disabled:opacity-50"
          >
            {isSubmitting ? t('contact.submitting') : t('contact.submit')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
