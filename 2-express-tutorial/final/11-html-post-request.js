const express = require('express');
const app = express();
let { people } = require('./data');

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people });
})

app.post('/login', (req, res) => {
    //console.log(req.body);
    const { name } = req.body;
    if(name){
        res.status(200).json({ success: true, message: `Welcome ${name}` });
    }
    else{
        res.status(404).json({ success: false, message: 'Please enter your name' });
    }
    
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})


