/* Exress to run server and routes */
import express, { Request, Response } from 'express';

// instance of the express server
const app: express.Application = express();

/* Start express server */
const port = 3000;
const listenToServer = () => {
    console.log(`server is running on localhost: ${port}`);
}
app.listen(port, listenToServer);

/* Routes */
/* Use the static files in the client folder to appear on our API (localhost: 3000) */
app.use(express.static('client'));

export default app;