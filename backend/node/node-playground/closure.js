function a() {
  let count = 10;
  return function () {
    return {
      up() {
        return count++;
      },
      value() {
        console.log(count);
      },
      byFive() {
        count += 5;
        return count;
      },
    };
  };
}
const { byFive, up, value } = a()();

value();

byFive();

value();

up();

value();
