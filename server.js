// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const productRoute = require('./api/routes/product');
// const categoryRoute = require('./api/routes/category');
// const cartRoute = require('./api/routes/carts');
// const url = require('url');

// mongoose.set('useFindAndModify', false);
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.connect('mongodb://localhost/myappDB');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use(cors());

// const PORT = process.env.PORT || 3000;

// app.use('/api/product', productRoute);
// app.use('/api/cart', cartRoute);
// app.use('/api/category', categoryRoute);

// app.listen(PORT, () => {
//     console.log(`Server listen from ${PORT}.....`);
// });



// just a deploy test
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/my-store-app'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/my-store-app/index.html'));
});

app.listen(process.env.PORT || 8080);
