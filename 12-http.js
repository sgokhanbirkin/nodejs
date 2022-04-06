const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    if(req.url === '/') {
        res.end('Welcome to our home page');
    }
    if(req.url === '/about') {
        res.end('Here is about page')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">Go back to home page</a>
    `);

});
    
server.listen(5000);
