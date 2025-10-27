// En: src/n8n-chat.d.ts

declare module 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js' {
  
  // Define la forma de las opciones que 'createChat' espera
  interface N8nChatOptions {
    webhookUrl: string;
    initialMessages: string[];
    mode: 'toggle' | 'inline';
    element: string;
    [key: string]: any; // Acepta cualquier otra propiedad
  }

  // Declara la función 'createChat' que se exporta
  export function createChat(options: N8nChatOptions): void;
}