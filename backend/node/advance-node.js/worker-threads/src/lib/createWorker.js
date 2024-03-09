const path = require('path');
const { Worker } = require('worker_threads');

function createWorker(threadCount) {
  const absolutePath = path.resolve(__dirname, '../', 'parallel-worker.js');
  const worker = new Worker(absolutePath, {
    workerData: {
      threadCount,
    },
  });

  return new Promise((resolve, reject) => {
    worker.on('message', data => {
      console.log('running worker thread');
      resolve(data);
    });
    worker.on('error', err => {
      reject(err);
    });
  });
}

module.exports = createWorker;
