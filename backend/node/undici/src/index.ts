import { request } from 'undici';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  const data = {
    name: 'test',
  };
  res.send(JSON.stringify(data));
});

app.get('/test', async (req, res) => {
  const { body, context, headers, opaque, statusCode, trailers } =
    await request('https://jsonplaceholder.typicode.com/todos/1');
  const data = await body.json();

  // console.log(body, context, headers, opaque, statusCode, trailers);
  // for await (const data of body) {
  //   console.log('data', data.toString('utf-8'));
  // }

  res.send(data);
});

app.listen('3000', () => {
  console.log('port running at 3000');
});
