const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');
// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json data
app.use(express.json())

// ----------------------------- ROUTES -----------------------------
app.use('/api/people', people);
app.use('/login', auth );

// ----------------------------- SERVER -----------------------------
app.listen(5000, () => {
    console.log('Server is running on port 5000');
})


