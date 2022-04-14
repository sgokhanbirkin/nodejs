const express = require('express');
const path = require('path');

const app = express();

// Setup static and middleware
app.use(express.static('./public'));

// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
//     adding to static assets
//     SSR
// })




app.all('*', (req,res) => {
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})


