# 📰 bot-noticias

Bot minimalista para publicar noticias en Discord usando fuentes RSS. Diseñado para funcionar 24/7 en entornos gratuitos como Replit o Render, con estructura clara y sin dependencias innecesarias.

## 🚀 Características

- Publica automáticamente titulares desde BBC Mundo cada 5 minutos.
- Comando manual `$noticias` para ver los últimos 5 enlaces.
- Solo envía el link, aprovechando la vista previa de Discord.
- Comando `$help` para mostrar los comandos disponibles.
- Servidor web activo para mantener el bot despierto en Replit.

## 📁 Estructura del proyecto

bot-noticias/ ├── index.js # Lógica principal del bot ├── server.js # Servidor Express para mantener activo el bot ├── index.html # Página simple para el servidor web ├── package.json # Dependencias y script de inicio ├── .env # Variables sensibles (no se sube al repo) ├── .gitignore # Ignora node_modules y .env └── .replit # Configuración para Replit

Código

## ⚙️ Configuración

1. Cloná el repositorio:

```bash
git clone https://github.com/tu-usuario/bot-noticias.git
cd bot-noticias
npm install
Crea un archivo .env con tus credenciales:

env
TOKEN=tu_token_de_discord
El ID del canal está embebido en el código (1329577014029582397). Podés cambiarlo directamente en index.js.

🖥️ Ejecución local
bash
node server.js
🧠 Comandos disponibles
$noticias → Muestra los últimos 5 titulares de BBC Mundo.

$help → Muestra la lista de comandos disponibles.

🔄 Replit
Este bot está optimizado para Replit:

.replit configura Node.js 20 y ejecuta server.js.

El servidor Express mantiene el bot activo.

El archivo index.html responde en la raíz con “Bot activo”.

🧼 Buenas prácticas
Solo archivos esenciales.

Sin texto extra en los mensajes: solo el enlace.

Código modular y fácil de mantener.

📄 Licencia
MIT — libre para usar, modificar y compartir.
