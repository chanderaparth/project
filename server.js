require('dotenv').config();
const express = require('express');
const server = express();   // create server;
const mongoose = require('mongoose');
const port = process.env.PORT;
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const imagepath = path.join(__dirname,'public','images');
const indexRoute = require('./routes/admin/index.routes');
const indexroute = require('./routes/user/index.routes');
// const loginRoutes = require('./routes/login.routes');
// const product = require('./public/products.json');
// const { listen } = require('express/lib/application');
// const { connect } = require('http2');
// const { contentType } = require('express/lib/response');

// DB connection
async function main() {
    await mongoose.connect(process.env.MONGO_DB_URL);
}
main().then(() => {
    console.log('DB is connected...');
}).catch((err) => {
    console.log(err);
});

// middleware
server.use(morgan('dev'))
server.use(express.json());
server.use('/public/images',express.static(imagepath));
// server.use(express.urlencoded({extended: true}));
// server.set("view engine", 'ejs');


server.use('/api/admin', indexRoute);
server.use('/api/user', indexroute);



server.listen(port, ()=>{
    console.log(`Server start at ${port}`);
});












