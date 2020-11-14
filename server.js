const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoute = require('./api/routes/product');
// const categoryRoute = require('./api/routes/category');
const cartRoute = require('./api/routes/carts');
const url = require('url');

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
// mongoose.connect('mongodb://localhost/myappDB');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const PORT = process.env.PORT || "https://school-store-app.herokuapp.com/" || 8080;

app.use('/api/product', productRoute);
app.use('/api/cart', cartRoute);
// app.use('/api/category', categoryRoute);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://heroku_pgrhkdk1:vfgJgiSAjF5IGMrM@cluster-pgrhkdk1.f971h.mongodb.net/cluster-pgrhkdk1?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(console.log(error));


const path = require('path');


app.use(express.static(__dirname + '/dist/myStoreApp'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/myStoreApp/index.html'));
});

app.listen(process.env.PORT || 8080);
