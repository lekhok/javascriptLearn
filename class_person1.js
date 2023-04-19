/* Create a Person class with a constructor that takes in name, 
age, and gender as parameters and sets them as properties on the 
object. Add a method introduce() that prints a 
message introducing the person, like "Hi, I'm [name], 
a [age]-year-old [gender]."*/


class Person {
    constructor(name,age,gender){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    introduce(){
        return "Hi I'm " + this.name + " a " + this.age + " - year old " + this.gender ;
    }
}

const person1 = new Person("Babu",27, "male" );
console.log (person1.introduce());