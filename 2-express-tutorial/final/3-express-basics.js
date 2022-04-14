const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('User hit the server');
    res.status(200).send('Home Page');
})

app.get('/about',(req, res) => {
    console.log('User hit the server for about page');
    res.status(200).send('About Page');
})

app.all('*', (req, res) => {
    console.log('Page Not Found');
    res.status(404).send('<h1>Page Not Found</h1>');
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

