const express = require('express');
const cors = require('cors');

const userRouter =  require('./routes/userRoutes');
const travelRouter = require('./routes/travelRoutes');
const kuponRouter = require('./routes/kuponRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use('/api/v1/travel',travelRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/kupon',kuponRouter);

module.exports = app;
