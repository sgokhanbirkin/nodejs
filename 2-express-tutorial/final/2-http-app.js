const http = require('http');
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');


const server = http.createServer((req, res) => {
    console.log("URL : " + req.url);
    console.log(req.url);
    // home page
    if (req.url == '/') {
        console.log('User hit the server');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(homePage)
        // res.write('<h1>Hello World</h1>');
        // res.write('<h2>This is my first Node.js server</h2>');
    }
    // about page
    else if (req.url == '/styles.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(homeStyles);
        res.end();
    }
    else if (req.url == '/logo.svg') {
        res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
        res.write(homeImage);
        res.end();
        
    }
    else if (req.url == '/browser-app.js') {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(homeLogic);
        res.end();
    }
    else if (req.url == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About Page</h1>');
        res.write('<h2>This is about page</h2>');
        res.end();
    }
    // 404 page
    else{
        console.log('Page Not Found');
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Page Not Found</h1>');

    }
    res.end();
})

server.listen(5000);

