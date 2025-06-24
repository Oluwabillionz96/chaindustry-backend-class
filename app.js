const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: "config/env.env"});

const cors = require('cors');
const { rateLimit } = require('express-rate-limit');
const helmet = require('helmet');

const app = express();

app.use(cors())
app.use(helmet());

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	limit: 100,
    message: "Too many request, please try again in the next 6 hours"
})
app.use(limiter);

app.use(express.json());

app.get('/', (req, res, next) => {
    console.log(req.body);
    console.log(req.query);
    console.log(req.params);
    console.log(req.headers);
    res.status(200).json({
        message: "Welcome to express App"
    });
});

app.use((req, res, next) => {
    res.status(404).json({
        message: "Route not found"
    })
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Internal server error"
    })
});

const PORT = process.env.PORT || 5001;
const HOST = process.env.IP || '127.0.0.1';
app.listen(PORT, HOST, () => {
    console.log(`Express app is running`);
});