const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://mingyang:ym199537@cluster0.isg8v.mongodb.net/101287844_assignment2?retryWrites=true&w=majority'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connect success");    
}).catch(err => {
    console.log('Connect fail', err);
    process.exit();
});


const router = require('./router');

app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
