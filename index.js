require('dotenv').config();
const { Client, Intents, MessageEmbed } = require('discord.js');
const axios = require('axios');
const xml2js = require('xml2js');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.once('ready', () => {
  console.log(`✅ Bot conectado como ${client.user.tag}`);

  setInterval(revisarNoticias, 5 * 60 * 1000);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.content.startsWith('$')) return;

  const args = message.content.trim().split(/ +/g);
  const command = args[0];

  if (command === '$noticias') {
    const noticias = await obtenerNoticiasRSS();
    if (noticias.length > 0) {
      noticias.slice(0, 5).forEach(n => {
        message.channel.send(n.link); // Solo el enlace, sin texto extra
      });
    } else {
      message.channel.send('⚠️ No se encontraron noticias en el RSS de BBC Mundo.');
    }
  }

  if (command === '$help') {
    message.channel.send(`📖 Comandos disponibles:
• $noticias → Muestra los titulares actuales de BBC Mundo
• $help → Muestra esta lista de comandos`);
  }
});

let ultimosEnlaces = [];

async function obtenerNoticiasRSS() {
  try {
    const res = await axios.get('https://feeds.bbci.co.uk/mundo/rss.xml');
    const xml = res.data;
    const parsed = await xml2js.parseStringPromise(xml);
    const items = parsed.rss.channel[0].item;

    return items.map(i => ({
      titulo: i.title[0],
      link: i.link[0],
      descripcion: i.description[0]
    }));
  } catch (err) {
    console.error('Error al leer RSS:', err);
    return [];
  }
}

async function revisarNoticias() {
  const noticias = await obtenerNoticiasRSS();
  const nueva = noticias.find(n => !ultimosEnlaces.includes(n.link));

  if (nueva) {
    ultimosEnlaces.unshift(nueva.link);

   try {
  const canal = await client.channels.fetch('1329577014029582397');
  canal.send(nueva.link);
} catch (err) {
  console.warn('⚠️ No se pudo acceder al canal por ID:', err);
  }
});

client.login(process.env.TOKEN);
