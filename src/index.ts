/* Exress to run server and routes */
import express, { Request, Response } from 'express';
// morgan logger
import morgan from 'morgan';
// Helmet to secure my express server
import helmet from 'helmet';

// instance of the express server
const app: express.Application = express();

/* Start express server */
const port = 3000;
const listenToServer = () => {
    console.log(`server is running on localhost: ${port}`);
}
app.listen(port, listenToServer);

/* MiddleWares to run automatically on recieved HTTP requests */
// HTTP request logger middleware
app.use(morgan('common'));
// HTTP secuirty middleware
app.use(helmet());
// middleware to parse incoming post requests
app.use(express.json());

/* Routes */
/* Use the static files in the client folder to appear on our API (localhost: 3000) */
app.use(express.static('client'));

export default app;