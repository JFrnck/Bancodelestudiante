import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Building2, Smartphone, DollarSign, Lock} from 'lucide-react';
// import { toast } from 'sonner';

const Donations = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });

    // Simulate auth check - in real app, check actual auth status
    const checkAuth = () => {
      // For demo purposes, set to false
      // In production, check actual authentication state
      setIsLoggedIn(false);
      setIsVerified(false);
    };

    checkAuth();
  }, []);

  const donationMethods = [
    {
      icon: Building2,
      title: t('donations.bankTransfer'),
      items: [
        { bank: 'Banco de Crédito BCP', account: '1234-5678-9012-3456', type: 'Cuenta Corriente' },
        { bank: 'Interbank', account: '9876-5432-1098-7654', type: 'Cuenta de Ahorros' },
        { bank: 'BBVA', account: '5555-4444-3333-2222', type: 'Cuenta Corriente' },
      ],
    },
    {
      icon: Smartphone,
      title: 'Yape',
      items: [
        { label: 'Número Yape', value: '+51 999 999 999' },
        { label: 'Nombre', value: 'Banco del Estudiante Bartselana' },
      ],
    },
    {
      icon: Smartphone,
      title: 'Plin',
      items: [
        { label: 'Número Plin', value: '+51 999 999 999' },
        { label: 'Nombre', value: 'Banco del Estudiante Bartselana' },
      ],
    },
    {
      icon: DollarSign,
      title: 'PayPal',
      items: [
        { label: 'Email PayPal', value: 'donations@bartselana.com' },
        { label: 'PayPal.me', value: 'paypal.me/bartselana' },
      ],
    },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-20">
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div data-aos="fade-up" className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-gradient">
                {t('donations.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('donations.subtitle')}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto p-12 text-center glass-effect">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <Lock className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{t('donations.loginRequired')}</h2>
              <p className="text-muted-foreground mb-8">
                Para acceder a la información de donaciones, necesitas iniciar sesión con una cuenta verificada.
              </p>
              <Button 
                onClick={() => navigate('/login')}
                className="gradient-primary shadow-glow"
                size="lg"
              >
                {t('nav.login')}
              </Button>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  if (!isVerified) {
    return (
      <div className="min-h-screen pt-20">
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div data-aos="fade-up" className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-gradient">
                {t('donations.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('donations.subtitle')}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto p-12 text-center glass-effect">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <Lock className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{t('donations.verificationRequired')}</h2>
              <p className="text-muted-foreground">
                Tu cuenta debe estar verificada para acceder a esta información.
              </p>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">
              {t('donations.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('donations.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 
              data-aos="fade-up" 
              className="text-4xl font-bold text-center mb-12 text-gradient"
            >
              {t('donations.methods')}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {donationMethods.map((method, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card className="p-8 h-full glass-effect hover:shadow-glow transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center group-hover:animate-glow">
                        <method.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">{method.title}</h3>
                    </div>

                    <div className="space-y-3">
                      {method.items.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="bg-background/50 rounded-lg p-4 border border-border"
                        >
                          {'bank' in item ? (
                            <>
                              <div className="text-sm text-muted-foreground">{item.bank}</div>
                              <div className="font-mono text-lg font-semibold">{item.account}</div>
                              <div className="text-xs text-muted-foreground">{item.type}</div>
                            </>
                          ) : (
                            <>
                              <div className="text-sm text-muted-foreground">{item.label}</div>
                              <div className="font-semibold">{item.value}</div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Coming Soon */}
            <div data-aos="fade-up" className="mt-12">
              <Card className="p-8 text-center glass-effect border-2 border-primary/20">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{t('donations.comingSoon')}</h3>
                <p className="text-muted-foreground">
                  Pronto podrás donar directamente desde nuestra pasarela de pagos integrada
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Tu Donación Hace la Diferencia
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Cada aporte nos ayuda a expandir nuestra misión de educación financiera y cuidado del medio ambiente a más estudiantes en todo Perú.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: '10,000+', label: 'Estudiantes beneficiados' },
                { value: '50+', label: 'Colegios aliados' },
                { value: '100T', label: 'Toneladas recicladas' },
              ].map((stat, index) => (
                <Card key={index} className="p-6 glass-effect">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donations;
