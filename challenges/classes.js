// // 1. Copy and paste your prototype in here and refactor into class syntax.
// class CuboidMaker1{

//     constructor(length, width, height){
//         this.length = length;
//         this.width = width;
//         this.height = height;
//     }

//     volume(){
//         return 'class constructor function here: ' + this.length * this.width * this.height;
//     }

//     surfaceArea(){
//         return 'class constructor function here: ' + (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
//     }

// }

// const cuboid1 = new CuboidMaker1(4, 5, 5);

// // Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid1.volume()); // 100
// console.log(cuboid1.surfaceArea()); // 130

// // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// //Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// //Test your work by logging out your volume and surface area.

// class CubeMaker extends CuboidMaker1 {
//     consructor(attr)
//         super(attr)
//         //not enough time to finish stretch
// }

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    drive() {
        return this.height * this.width;
    }
  } 

  let name = new Rectangle(30, 40)
  console.log(name.drive())


  class Square extends Rectangle {
      constructor(name) {
          super(name)
      }

      speak() {
          return `this is my name: ${this.name} ${this.width}`
      }
  }

  let info = new Square('rigo', 34)
  console.log(info.speak())