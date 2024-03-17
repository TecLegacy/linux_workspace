const student = {
  name: 'Keshav',
  welcome(val) {
    console.log('Hi Welcome to our place ' + this.name);
  },
};
student.welcome();

const reference = student.welcome;

reference.call(student, 'cool');
reference.apply(student);

const refer2 = reference.bind(student);
refer2();

// Call , Apply , Bind
const teacher = {
  name: 'katty',
};
const welcome = student.welcome;
welcome.call(teacher);
welcome.apply(teacher);
const kattyWelcome = welcome.bind(teacher);
kattyWelcome();
