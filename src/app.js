const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//Using db
mongoose.connect('mongodb://localhost/crud-mongo',{ useNewUrlParser: true })
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));

//Import routes
const indexRoutes = require('./routes/index');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views',__dirname+'/views');
app.set('view engine','ejs');

//Middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//Routes
app.use('/', indexRoutes);

app.listen(app.get('port'), ()=> {
  console.log(`Server on port ${app.get('port')}`);
});

