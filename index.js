const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const helmet = require('helmet');

//set up routes here
//const usersRouter = require('./users/usersRouter');
// app.use('/api/users', usersRouter);

//after everything is imported/required, set it up to use here
app.use(express.json());
app.use(cors());
app.use(helmet());

const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Homepage up and running...');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});