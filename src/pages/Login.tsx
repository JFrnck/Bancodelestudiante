import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

const Login = () => {

  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Inicio de sesión exitoso');
    // In production, integrate with Clerk or your auth provider
    navigate('/');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      toast.error('Las contraseñas no coinciden');
      return;
    }
    toast.success('Cuenta creada exitosamente');
    // In production, integrate with Clerk or your auth provider
    navigate('/');
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-20 gradient-hero flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto" data-aos="fade-up">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">B</span>
            </div>
            <h1 className="text-4xl font-bold text-gradient mb-2">
              Bienvenido a Bartselana
            </h1>
            <p className="text-muted-foreground">
              Accede a tu cuenta o crea una nueva
            </p>
          </div>

          <Card className="p-8 glass-effect shadow-card">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
                <TabsTrigger value="signup">Registrarse</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Correo Electrónico
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      required
                      className="bg-background"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Contraseña
                    </label>
                    <Input
                      type="password"
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      required
                      className="bg-background"
                      placeholder="••••••••"
                    />
                  </div>
                  <Button type="submit" className="w-full gradient-primary shadow-glow">
                    Iniciar Sesión
                  </Button>
                  <div className="text-center">
                    <a href="#" className="text-sm text-primary hover:underline">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nombre Completo
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={signupData.name}
                      onChange={handleSignupChange}
                      required
                      className="bg-background"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Correo Electrónico
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={signupData.email}
                      onChange={handleSignupChange}
                      required
                      className="bg-background"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Contraseña
                    </label>
                    <Input
                      type="password"
                      name="password"
                      value={signupData.password}
                      onChange={handleSignupChange}
                      required
                      className="bg-background"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Confirmar Contraseña
                    </label>
                    <Input
                      type="password"
                      name="confirmPassword"
                      value={signupData.confirmPassword}
                      onChange={handleSignupChange}
                      required
                      className="bg-background"
                      placeholder="••••••••"
                    />
                  </div>
                  <Button type="submit" className="w-full gradient-primary shadow-glow">
                    Crear Cuenta
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Al continuar, aceptas nuestros{' '}
            <a href="#" className="text-primary hover:underline">Términos de Servicio</a>
            {' '}y{' '}
            <a href="#" className="text-primary hover:underline">Política de Privacidad</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;