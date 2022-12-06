// getters and setters for classes

class Book{
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer(){
        return this._author;
    }
    // setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }

}

// note how we don't need parenthesis!
const newBook = new Book("JRR Tolkien");
console.log(newBook.writer);

newBook.writer = "JK Rowling";
console.log(newBook.writer)