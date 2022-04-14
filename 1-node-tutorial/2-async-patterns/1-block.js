const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Home Page');
    }
    if(req.url === '/about'){
        // BLOCKING CODE 
        for(let i = 0; i < 1000; i++){
            for(let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`);
            }    
        }
        res.end('About Page');
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">Go back to home page</a>
    `);
})

server.listen(5000, () => {
    console.log('Server listening on port 5000....')
})