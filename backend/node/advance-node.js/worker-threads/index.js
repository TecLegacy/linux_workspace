const express = require('express');
const app = express();
require('dotenv').config();
const { Worker } = require('worker_threads');

const PORT = process.env.PORT || 3000;

app.get('/non-blocking', (req, res) => {
  res.status(200).send('Non-blocking route');
});

// This code take 17 seconds to execute
// Blocks the main thread
// Solution-> Sending to worker thread
app.get('/blocking', (req, res) => {
  // let counter = 0;
  // for (let i = 0; i < 20_000_000_000; i++) {
  //   counter++;
  // }
  // res.status(200).send('blocking route' + `result is ${counter}`);

  //* creating Working class
  const workerThread = new Worker('./worker.js');

  workerThread.on('message', data => {
    res.status(200).send(`result sent off from worker thread ${data}`);
  });

  //Handling error from worker thread
  workerThread.on('error', err => {
    res
      .status(500)
      .send(`server could'nt process request please try again later ${err}`);
  });
});

app.listen(PORT, () => {
  console.log('listening on port' + PORT);
});
