const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const activityRoutes = require('./routes/activity.routes');

const app = express();

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

app.use(activityRoutes);

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})


app.listen(4000);
console.log('Server on Port 4000');