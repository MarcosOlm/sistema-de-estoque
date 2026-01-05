import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import routes from './routes.js'

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
}));
app.use(routes);

export default app;