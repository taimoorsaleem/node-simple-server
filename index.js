const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const content = fs.readFileSync('index.html', 'utf8');
    res.write(content);
    res.end();
}).listen(8001);