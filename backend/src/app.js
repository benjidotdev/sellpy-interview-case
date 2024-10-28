import express from 'express'
import cors from 'cors'
import routes from './routes/v1/index.js'

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());

app.use('/v1', routes);

export default app