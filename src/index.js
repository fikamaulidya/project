import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/user';

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use('/', userRoute);

app.listen(port, () => {
    console.log(`App is running at ${port}`);
});

export default app;
