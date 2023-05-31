//dev server running on 127.0.0.1:8080 
//in directory run `node server.js`

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': stat.size
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

server.listen(8080, 'localhost', () => {
  console.log('Server running at http://localhost:8080/');
});

// Watch index.html for changes and reload the browser tab
fs.watch(path.join(__dirname, 'index.html'), (event, filename) => {
  if (event === 'change') {
    console.log('Reloading browser tab...');
    exec('TASKKILL /IM brave.exe /FI "WINDOWTITLE eq localhost:8080/*"');
    exec('start brave http://localhost:8080/');
  }
});
