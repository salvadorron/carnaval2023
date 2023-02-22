const express = require('express');
const morgan = require('morgan');

const activitiesRoutes = require('./routes/activities.routes');

const app = express();

app.use(morgan('dev'));

app.use(activitiesRoutes);


app.listen(4000);
console.log('Server on Port 4000');