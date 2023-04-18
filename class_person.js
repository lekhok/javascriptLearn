class Person {
    constructor (name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greeting() {
        if (this.gender === "male"){
            return "Hello Mr " + this.name;
        }

        else if(this.gender === "female"){
                return "Hello Ms " + this.name;
        }

        else {
            return "hello " + this.name;
        }
    }
}


const john = new Person ("John Doe" , 30 , "male");
console.log(john.greeting());