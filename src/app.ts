const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.set("port", process.env.PORT || 4201);
import * as instrumentRouter from './module/Instrument/controller/instrument.controller';

const originsWhitelist = [
    'http://localhost:4200',
];

const corsOptions = {
    origin: function (origin: any, callback: any) {
        const isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/instrument', instrumentRouter)

export default app;