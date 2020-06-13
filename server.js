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

const PORT = process.env.PORT || 8080;

app.use('/api/product', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/category', categoryRoute);

// app.listen(PORT, () => {
//     console.log(`Server listen from ${PORT}.....`);
// });

mongoose.connect(process.env.MONGODB_URI || 'mongodb://admin:admin1234@ds141674.mlab.com:41674/heroku_pgrhkdk1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }

app.listen(PORT, console.log(`Server is starting at ${PORT}`));

// just a deploy test
// const express = require('express');
// const path = require('path');
// const app = express();

app.use(express.static(__dirname + '/dist/myStoreApp'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/myStoreApp/index.html'));
});

// app.listen(process.env.PORT || 8080);
