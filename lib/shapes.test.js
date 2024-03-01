const { Circle, Triangle, Square } = require('./shapes');

test('Circle render', () => {
  const shape = new Circle();
  shape.setColor("red");
  expect(shape.render()).toEqual('<circle fill="red" />');
});

test('Triangle render', () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Square render', () => {
  const shape = new Square();
  shape.setColor("green");
  expect(shape.render()).toEqual('<rect fill="green" />');
});
