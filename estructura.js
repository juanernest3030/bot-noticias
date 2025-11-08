const fs = require('fs');
const path = require('path');

function listarEstructura(dir, prefijo = '') {
  const archivos = fs.readdirSync(dir, { withFileTypes: true });

  archivos.forEach((archivo, i) => {
    const esUltimo = i === archivos.length - 1;
    const simbolo = esUltimo ? '└── ' : '├── ';
    const ruta = path.join(dir, archivo.name);

    console.log(`${prefijo}${simbolo}${archivo.name}`);

    if (archivo.isDirectory()) {
      const nuevoPrefijo = prefijo + (esUltimo ? '    ' : '│   ');
      listarEstructura(ruta, nuevoPrefijo);
    }
  });
}

console.log('bot-noticias/');
listarEstructura('.', '');
