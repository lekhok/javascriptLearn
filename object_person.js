const personObj = {
    firstName : "John",
    lastName : "Doe",
    age : 25,
    emailAddress : "testemail@domain.com",
    
    getInfo(){
        return this.firstName + " " + this.lastName + " age " + 
        this.age + " bearing " + this.emailAddress 
    }
}

console.log (personObj.getInfo())