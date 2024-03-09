const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const { Worker } = require('worker_threads');

const THREAD_COUNTS = 4;

const PORT = process.env.PORT || 3000;

app.get('/non-blocking-parallel', (req, res) => {
  res.status(200).send('Non-blocking route in parallel🐕');
});

function createWorker(threadCount) {
  const absolutePath = path.resolve(__dirname, 'parallel-worker.js');
  const worker = new Worker(absolutePath, {
    workerData: {
      threadCount,
    },
  });

  return new Promise((resolve, rejects) => {
    worker.on('message', data => {
      console.log('running worker thread');
      resolve(data);
    });
    worker.on('error', err => {
      rejects(err);
    });
  });
}

// This code take 3 seconds to execute
// Delegating Worker thread in parallel
// Using 4 logical Cores
app.get('/blocking-parallel', async (req, res) => {
  const workers = [];

  for (let i = 0; i < THREAD_COUNTS; i++) {
    workers.push(createWorker(THREAD_COUNTS));
  }

  const parallelWorker = await Promise.all(workers);
  const total =
    parallelWorker[0] +
    parallelWorker[1] +
    parallelWorker[2] +
    parallelWorker[3];

  res.status(200).send(`finished response of ${total}`);
});

app.listen(PORT, () => {
  console.log('listening on port' + PORT);
});
