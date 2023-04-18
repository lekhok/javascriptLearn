class Person{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    bar(){
        if (this.age <18) {
            return "Hello " + this.name + "you are under 18 and you will get non alcoholic drinks" 
        }

        if (this.age >= 18 ){
            return "Hello " +this.name + " you are above 18 years of age and you can pick any drink you want"
        }
    }
}

const jim = new Person("Jim", 18);
console.log(jim.bar());

const tejas = new Person("Tejas" , 24);
console.log(tejas.bar());

