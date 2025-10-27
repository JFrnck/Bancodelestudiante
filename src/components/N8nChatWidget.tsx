import React, { useEffect } from 'react';

// --- Definiciones de Tipos ---
interface N8nChatOptions {
  webhookUrl: string;
  initialMessages: string[];
  mode: 'toggle' | 'inline';
  element: string;
}

interface N8nChatModule {
  createChat: (options: N8nChatOptions) => void;
}

// --- El Componente ---
const N8nChatWidget: React.FC = () => {
  useEffect(() => {
    // 1. Usamos import() dinámico. Esto DEVUELVE una promesa
    // que se resuelve CUANDO el script está cargado.
    import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js')
      .then((chatModule) => {
        // 2. AHORA estamos seguros de que chatModule existe
        const { createChat } = chatModule as N8nChatModule;

        // 3. Ejecutamos el código
        createChat({
          webhookUrl:
            'https://s1wz271g-5678.brs.devtunnels.ms/webhook/16824b7d-bcd4-4bea-9c67-f660cd06ddb1/chat',
          initialMessages: [
            'Hola! 👋',
            'Me llamo Bart, soy un asistente de Banco del Estudiante. Estoy aqui para ayudarte !',
          ],
          mode: 'toggle',
          element: '#n8n-chat-container', // Se anclará al div de abajo
        });
      })
      .catch((err) =>
        console.error('Error al cargar el módulo de chat de n8n:', err)
      );
  }, []); // El array vacío [] asegura que se ejecute solo una vez

  // Este 'div' sigue siendo el ancla para el chat
  return <div id="n8n-chat-container" />;
};

export default N8nChatWidget;