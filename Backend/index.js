const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const AuthRouter = require('./Routes/AuthRouter')
const   ProductRouter=require('./Routes/ProductRouter')
require('dotenv').config();         // Load .env variables
require('./Models/db');             // Your DB connection file

const PORT = process.env.PORT || 8080;   // Correct casing for 'PORT'

app.get('/ping', (req, res) => {
    res.send('PONG');
});


app.use(bodyParser.json());
app.use(cors())
app.use('/auth',AuthRouter)
app.use('/products',ProductRouter)

app.listen(PORT, () => {
    console.log(`🚀 Server is running on ${PORT}`);
});