import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Nosotros',
        contact: 'Contacto',
        donations: 'Donaciones',
        login: 'Banca por Internet'
      },
      hero: {
        title: 'Banco del Estudiante',
        subtitle: 'Bartselana',
        description: 'Educación e inclusión financiera para niños, adolescentes y jovenes',
        cta: 'Regístrese Ahora',
        learnMore: 'WhatsApp'
      },
      flow: {
        title: 'Cómo Funciona',
        step1: {
          title: 'Recolecta Ecomonedas',
          description: 'Recicla botellas PET, papel blanco, cartón y más'
        },
        step2: {
          title: 'Intercambia',
          description: 'Convierte tus ecomonedas en dinero en tu billetera Panda'
        },
        step3: {
          title: 'Gestiona tu Dinero',
          description: 'Tu dinero se distribuye automáticamente en 3 cuentas'
        }
      },
      accounts: {
        title: 'Tus Tres Cuentas',
        subtitle: 'Tu dinero se organiza automáticamente para ayudarte a alcanzar tus metas',
        mobile: {
          name: 'Ahorro Móvil',
          shortName: 'Ahorra',
          percentage: '30%',
          description: 'Dinero de libre disponibilidad para tus gastos diarios'
        },
        plan: {
          name: 'Plan de Ahorro',
          shortName: 'Sueña',
          percentage: '50%',
          description: 'Alcanza tus sueños ahorrando a plazo fijo'
        },
        investment: {
          name: 'Ahorro Inversión',
          shortName: 'Crea',
          percentage: '20%',
          description: 'Aprende a invertir y hacer crecer tu dinero'
        }
      },
      benefits: {
        title: 'Beneficios',
        wallet: {
          title: 'Billetera Digital Panda',
          description: 'Transfiere a Yape, Plin y más'
        },
        education: {
          title: 'Educación Financiera',
          description: 'Plataforma educativa gratuita'
        },
        environment: {
          title: 'Cuida el Planeta',
          description: 'Contribuye al reciclaje mientras ahorras'
        },
        community: {
          title: 'Comunidad',
          description: 'Únete a miles de estudiantes ahorradores'
        }
      },
      about: {
        title: 'Nuestra Historia',
        origins: 'Nuestros Inicios',
        originsText: 'Hace 13 años, Adolfo Quisocala, el niño banquero más joven del mundo, fundó la Cooperativa del Estudiante Bartselana. Con un modelo de negocio innovador, trabajamos con estudiantes de secundaria en Perú, transformando productos reciclables en oportunidades financieras.',
        present: 'Actualidad',
        presentText: 'Hoy, Adolfo Quisocala, de 20 años, lidera el Eco Banco del Estudiante Bartselana como una fintech moderna. En colaboración con GMoney, ofrecemos la billetera digital Panda y una plataforma de educación financiera accesible para todos nuestros usuarios.',
        news: 'Noticias'
      },
      contact: {
        title: 'Contáctanos',
        subtitle: 'Estamos aquí para ayudarte',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        address: 'Dirección',
        social: 'Redes Sociales',
        sendMessage: 'Enviar Mensaje'
      },
      donations: {
        title: 'Donaciones',
        subtitle: 'Apoya nuestra misión de educación financiera y cuidado del medio ambiente',
        bankAccounts: 'Cuentas Bancarias',
        methods: 'Métodos de Donación',
        yape: 'Yape',
        plin: 'Plin',
        paypal: 'PayPal',
        bankTransfer: 'Transferencia Bancaria',
        comingSoon: 'Próximamente: Pasarela de Pago',
        loginRequired: 'Debes iniciar sesión para ver los detalles de donación',
        verificationRequired: 'Tu cuenta debe estar verificada'
      },
      footer: {
        description: 'Transformando el reciclaje en educación financiera para estudiantes',
        quickLinks: 'Enlaces Rápidos',
        followUs: 'Síguenos',
        rights: 'Todos los derechos reservados'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About Us',
        contact: 'Contact',
        donations: 'Donations',
        login: 'Login'
      },
      hero: {
        title: 'Student Bank',
        subtitle: 'Bartselana',
        description: 'Financial education and inclusion for children and young people',
        cta: 'Get Started',
        learnMore: 'Learn More'
      },
      flow: {
        title: 'How It Works',
        step1: {
          title: 'Collect Ecocoins',
          description: 'Recycle PET bottles, white paper, cardboard and more'
        },
        step2: {
          title: 'Exchange',
          description: 'Convert your ecocoins into money in your Panda wallet'
        },
        step3: {
          title: 'Manage Your Money',
          description: 'Your money is automatically distributed into 3 accounts'
        }
      },
      accounts: {
        title: 'Your Three Accounts',
        subtitle: 'Your money is automatically organized to help you reach your goals',
        mobile: {
          name: 'Mobile Savings',
          shortName: 'Save',
          percentage: '30%',
          description: 'Freely available money for your daily expenses'
        },
        plan: {
          name: 'Savings Plan',
          shortName: 'Dream',
          percentage: '50%',
          description: 'Achieve your dreams with fixed-term savings'
        },
        investment: {
          name: 'Investment Savings',
          shortName: 'Create',
          percentage: '20%',
          description: 'Learn to invest and grow your money'
        }
      },
      benefits: {
        title: 'Benefits',
        wallet: {
          title: 'Panda Digital Wallet',
          description: 'Transfer to Yape, Plin and more'
        },
        education: {
          title: 'Financial Education',
          description: 'Free educational platform'
        },
        environment: {
          title: 'Care for the Planet',
          description: 'Contribute to recycling while saving'
        },
        community: {
          title: 'Community',
          description: 'Join thousands of student savers'
        }
      },
      about: {
        title: 'Our Story',
        origins: 'Our Origins',
        originsText: '13 years ago, Adolfo Quisocala, the youngest child banker in the world, founded the Bartselana Student Cooperative. With an innovative business model, we work with high school students in Peru, transforming recyclable products into financial opportunities.',
        present: 'Present',
        presentText: 'Today, 20-year-old Adolfo Quisocala leads the Eco Banco del Estudiante Bartselana as a modern fintech. In collaboration with GMoney, we offer the Panda digital wallet and a financial education platform accessible to all our users.',
        news: 'News'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We are here to help',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        social: 'Social Media',
        sendMessage: 'Send Message'
      },
      donations: {
        title: 'Donations',
        subtitle: 'Support our mission of financial education and environmental care',
        bankAccounts: 'Bank Accounts',
        methods: 'Donation Methods',
        yape: 'Yape',
        plin: 'Plin',
        paypal: 'PayPal',
        bankTransfer: 'Bank Transfer',
        comingSoon: 'Coming Soon: Payment Gateway',
        loginRequired: 'You must login to view donation details',
        verificationRequired: 'Your account must be verified'
      },
      footer: {
        description: 'Transforming recycling into financial education for students',
        quickLinks: 'Quick Links',
        followUs: 'Follow Us',
        rights: 'All rights reserved'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;