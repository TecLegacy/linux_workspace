const { Worker } = require('worker_threads');

const path = require('path');

// Assuming the file is located at 'src/myFile.js'
const absolutePath = path.resolve(__dirname, 'src', 'parallel-worker.js');

console.log(absolutePath); // This will print the absolute path to 'src/myFile.js'

function createWorker(threadCount) {
  console.log('s', absolutePath);
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

module.exports = createWorker;
