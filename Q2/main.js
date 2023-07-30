const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/gethello' && req.method === 'GET') 
  {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello NodeJS!!');
  } 
  else if (req.url === '/' && req.method === 'GET') {
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
