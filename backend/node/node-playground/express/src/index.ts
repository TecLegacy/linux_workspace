import express, { type Request, type Response } from 'express';
import a from './import-export';

const app = express();

const port = process.env.PORT || 3000;

app.get('/a/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.send('<h1>You are a loser</h1>');
  }

  res.send('<h1>Winner</h1>');
});

app.get('/apple', (req: Request, res: Response) => {
  const data = req.query;

  res.send('Server' + `${JSON.stringify(data)}`);
});

app.all('*', (req: Request, res: Response) => {
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(a);
  console.log(`Port Listening! ${port}`);
});
