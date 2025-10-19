import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card } from '@/components/ui/card';
import { Calendar, Award, Users, TrendingUp } from 'lucide-react';
import personImage from '@/assets/joseAdolfo.png';

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const milestones = [
    {
      year: '2011',
      title: 'Fundación',
      description: 'Adolfo Quisocala funda la Cooperativa del Estudiante Bartselana',
      icon: Award,
    },
    {
      year: '2015',
      title: 'Expansión',
      description: 'Llegamos a más de 50 colegios en Perú',
      icon: Users,
    },
    {
      year: '2020',
      title: 'Transformación Digital',
      description: 'Alianza con GMoney para billetera digital Panda',
      icon: TrendingUp,
    },
    {
      year: '2024',
      title: 'Eco Banco',
      description: 'Lanzamiento oficial como fintech',
      icon: Award,
    },
  ];

  const news = [
    {
      date: '2024-03-15',
      title: 'Bartselana gana premio a la innovación educativa',
      excerpt: 'Reconocimiento internacional por nuestro modelo de educación financiera',
      image: 'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=400',
    },
    {
      date: '2024-02-20',
      title: 'Alianza estratégica con GMoney',
      excerpt: 'Nueva plataforma digital para mejorar la experiencia de nuestros usuarios',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400',
    },
    {
      date: '2024-01-10',
      title: 'Más de 10,000 estudiantes activos',
      excerpt: 'Celebramos un hito importante en nuestra comunidad',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              13 años transformando el reciclaje en educación financiera
            </p>
          </div>
        </div>
      </section>

      {/* Origins Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" className="space-y-6">
              <h2 className="text-4xl font-bold text-gradient">
                {t('about.origins')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.originsText')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center glass-effect">
                  <div className="text-3xl font-bold text-primary mb-2">13+</div>
                  <div className="text-sm text-muted-foreground">Años de experiencia</div>
                </Card>
                <Card className="p-6 text-center glass-effect">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Colegios aliados</div>
                </Card>
              </div>
            </div>

            <div data-aos="fade-left">
              <Card className="p-8 gradient-card shadow-card">
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img 
                    src={personImage}
                    alt="Adolfo Quisocala"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Adolfo Quisocala</h3>
                <p className="text-muted-foreground">
                  Fundador y Director - El niño banquero más joven del mundo
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Present Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div data-aos="fade-up" className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gradient mb-6">
                {t('about.present')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {t('about.presentText')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card className="p-6 h-full glass-effect hover:shadow-glow transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4 group-hover:animate-glow">
                      <milestone.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 
              data-aos="fade-up" 
              className="text-4xl font-bold text-center mb-12 text-gradient"
            >
              {t('about.news')}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {news.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card className="overflow-hidden h-full hover:shadow-glow transition-all duration-300 group">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(item.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.excerpt}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;