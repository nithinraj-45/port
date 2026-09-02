const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = process.cwd(); // Use process.cwd() for true workspace root

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  const cleanUrl = req.url.split('?')[0];
  console.log(`${req.method} ${cleanUrl}`);

  let relativePath = cleanUrl === '/' ? 'index.html' : cleanUrl.replace(/^\//, '');
  
  // Check root dir first, then public/ dir
  let filePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    filePath = path.join(ROOT, 'public', relativePath);
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    fs.readFile(filePath, (error, content) => {
      if (error) {
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      } else {
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(content);
      }
    });
  } else {
    if (['.png', '.jpg', '.jpeg', '.pdf', '.svg', '.js', '.css'].includes(extname)) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`404 Not Found: ${relativePath}`);
    } else {
      fs.readFile(path.join(ROOT, 'index.html'), (err, htmlContent) => {
        if (err) {
          res.writeHead(500);
          res.end('Error loading index.html');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(htmlContent, 'utf-8');
        }
      });
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/ from ROOT: ${ROOT}`);
});
