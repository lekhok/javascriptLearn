/* Create a Rectangle class with a constructor that takes in 
width and height as parameters and sets them as properties on 
the object. Add methods getArea() and getPerimeter() that calculate 
the area and perimeter of the rectangle, respectively.*/

class Rectangle {
    constructor (width,height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        let area = this.width * this.height;

        return "Area is : " + area
    }


    getPerimeter(){
        return "Perimeter is : " + ((2*this.height) + (2*this.width));
    }
}


const rect1 = new Rectangle(5, 4);
console.log(rect1.getArea());
console.log(rect1.getPerimeter());


const rect2 = new Rectangle(5, 5);
console.log(rect2.getArea())
console.log(rect2.getPerimeter())