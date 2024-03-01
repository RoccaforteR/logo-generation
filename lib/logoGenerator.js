const { Circle, Triangle, Square } = require('./shapes');

function generateLogo(userInput) {
  const shape = userInput.shape === 'circle' ? new Circle() :
                userInput.shape === 'triangle' ? new Triangle() :
                new Square();

  shape.setColor(userInput.shapeColor);

  const svgContent = `<svg width="300" height="200">
                      ${shape.render()}
                      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${userInput.textColor}">
                      ${userInput.text}</text>
                      </svg>`;

  return svgContent;
}

module.exports = generateLogo;
