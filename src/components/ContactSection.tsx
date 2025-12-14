import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '+998 ',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number (should have 9 digits after +998)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 12) {
      toast({
        title: "Error",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData);
    
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
  };

  return (
    <section className="py-section bg-background">
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

          <Button
            type="submit"
            className="w-full h-14 rounded-xl bg-foreground text-background hover:bg-foreground/90 font-light tracking-wider text-sm"
          >
            {t('contact.submit')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
