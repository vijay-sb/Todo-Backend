import express from 'express';
import appRoutes from './routes/appRoutes.js';
const app = express();
const port = 3000;
app.use(express.json());
app.get('/',(req,res) => {
  res.send("Hello !!!");
});
app.use('/todo',appRoutes);

app.listen(port,() => {
  console.log(`Running on port ${port}`);
});
