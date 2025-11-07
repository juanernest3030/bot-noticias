const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`🌐 Servidor web activo en puerto ${port}`);
});

try {
  require('./index');
  console.log('✅ Bot iniciado desde server.js');
} catch (err) {
  console.error('❌ Error al iniciar el bot:', err);
}
