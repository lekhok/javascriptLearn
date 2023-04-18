const bookObj = {
    author: "Unknown",
    title :  "doomsday slayer",
    year : 2012,
    numberOfPages : 5225,

    getInfo(){
        return this.author + "'s book " +  this.title + 
        " in the year " + this.year + " with a massive " 
        + this.numberOfPages + " number of pages"
    }
}


console.log(bookObj.getInfo());