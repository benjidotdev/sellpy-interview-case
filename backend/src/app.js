import express from 'express'
import cors from 'cors'
import routes from './routes/v1/index.js'

const app = express();

// JSON parsing for incoming requests
app.use(express.json());

// URL-encoded parsing for incoming requests
app.use(express.urlencoded({ extended: true }));

// Enable CORS // Enable CORS preflight requests
app.use(cors());
app.options('*', cors());

app.use('/api/v1', routes);

export default app;