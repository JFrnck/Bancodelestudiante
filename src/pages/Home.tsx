import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Recycle, Smartphone, TrendingUp, BookOpen, Globe, Users } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const flowSteps = [
    {
      icon: Recycle,
      title: t('flow.step1.title'),
      description: t('flow.step1.description'),
    },
    {
      icon: Smartphone,
      title: t('flow.step2.title'),
      description: t('flow.step2.description'),
    },
    {
      icon: TrendingUp,
      title: t('flow.step3.title'),
      description: t('flow.step3.description'),
    },
  ];

  const accounts = [
    {
      name: t('accounts.mobile.name'),
      shortName: t('accounts.mobile.shortName'),
      percentage: t('accounts.mobile.percentage'),
      description: t('accounts.mobile.description'),
      gradient: 'from-emerald-500 to-teal-500',
      delay: 0,
    },
    {
      name: t('accounts.plan.name'),
      shortName: t('accounts.plan.shortName'),
      percentage: t('accounts.plan.percentage'),
      description: t('accounts.plan.description'),
      gradient: 'from-teal-500 to-cyan-500',
      delay: 100,
    },
    {
      name: t('accounts.investment.name'),
      shortName: t('accounts.investment.shortName'),
      percentage: t('accounts.investment.percentage'),
      description: t('accounts.investment.description'),
      gradient: 'from-cyan-500 to-blue-500',
      delay: 200,
    },
  ];

  const benefits = [
    {
      icon: Smartphone,
      title: t('benefits.wallet.title'),
      description: t('benefits.wallet.description'),
    },
    {
      icon: BookOpen,
      title: t('benefits.education.title'),
      description: t('benefits.education.description'),
    },
    {
      icon: Globe,
      title: t('benefits.environment.title'),
      description: t('benefits.environment.description'),
    },
    {
      icon: Users,
      title: t('benefits.community.title'),
      description: t('benefits.community.description'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="text-gradient">{t('hero.title')}</span>
                  <br />
                  <span className="text-foreground">{t('hero.subtitle')}</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  {t('hero.description')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <Button size="lg" className="gradient-primary shadow-glow group">
                    {t('hero.cta')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground">
                    {t('hero.learnMore')}
                  </Button>
                </Link>
              </div>
            </div>

            <div data-aos="fade-left" className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card animate-float">
                <img 
                  src={heroImage} 
                  alt="Students recycling"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 
            data-aos="fade-up" 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
          >
            {t('flow.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {flowSteps.map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative"
              >
                <Card className="p-8 h-full glass-effect hover:shadow-glow transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-6 group-hover:animate-glow">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
                {index < flowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Accounts Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              {t('accounts.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('accounts.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {accounts.map((account, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={account.delay}
              >
                <Card className="relative overflow-hidden group hover:scale-105 transition-all duration-300 shadow-card hover:shadow-glow h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${account.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                  
                  <div className="relative p-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-bold text-gradient">
                        {account.percentage}
                      </h3>
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${account.gradient} text-white font-semibold`}>
                        {account.shortName}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold">{account.name}</h4>
                    <p className="text-muted-foreground">{account.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 
            data-aos="fade-up" 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
          >
            {t('benefits.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Card className="p-6 text-center h-full glass-effect hover:shadow-glow transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div 
            data-aos="fade-up" 
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              ¿Listo para comenzar tu futuro financiero?
            </h2>
            <p className="text-xl text-muted-foreground">
              Únete a miles de estudiantes que ya están transformando el reciclaje en oportunidades
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/about">
                <Button size="lg" className="gradient-primary shadow-glow">
                  {t('nav.about')}
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary">
                  {t('nav.contact')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;