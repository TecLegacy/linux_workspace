const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello DOCKER!');
});

app.listen(7007, () => {
  console.log('Server is running on port 7007');
});
