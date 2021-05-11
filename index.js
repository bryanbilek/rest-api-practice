const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

//set up routes here
//const usersRouter = require('./users/usersRouter');
// app.use('/api/users', usersRouter);

//after everything is imported/required, set it up to use here
app.use(express.json());
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
    res.send('Homepage up and running...');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});