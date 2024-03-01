class Shape {
    constructor(type) {
      this.type = type;
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<${this.type} fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    constructor() {
      super("circle");
    }
  }
  
  class Triangle extends Shape {
    constructor() {
      super("polygon");
    }
  
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor() {
      super("rect");
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  