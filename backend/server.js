import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import session from 'express-session';
import path from "path";
import config from './config';
import AuthRouter from "./routers/AuthRouter";
import UserRouter from "./routers/UserRouter";

const app = express();

app.use(cors({origin: ['http://127.0.0.1:4200'], credentials: true}));
app.use(json());
app.use(session(config.SESSION_OPTIONS))

mongoose.connect(
    config.MONGODB_URL,
    config.MONGODB_CONFIG
)
.then(() => console.log('MongoDB Connected'))
.catch(error => console.log(error));

app.use('/api/auth', AuthRouter);
app.use('/api/user', UserRouter);


app.use(
    (err, req, res, next) =>
    {
        console.log(err);
        return res.status(500).send(err.message)
    }
);

app.use(express.static(path.join(__dirname, 'public')));
app.get(
    '*', 
    (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

app.listen(
    config.PORT, 
    () => console.log(`Server running on port ${config.PORT}`)
); 