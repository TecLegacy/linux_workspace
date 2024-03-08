function countDown(callback) {
  setTimeout(() => {
    callback('This will run after 2 second');
  }, 2000);
}
countDown(val => console.log(val));
