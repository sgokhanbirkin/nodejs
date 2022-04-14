const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received');
    
    res.end(`<h1>aFa</h1>`);
})

server.listen(5000);

