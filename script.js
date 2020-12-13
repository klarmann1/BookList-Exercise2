let today = new Date();
let date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

//book class
class Book {
  constructor(title, genre, author, read = false, readDate) {
    this._title = title;
    this._genre = genre;
    this._author = author;
    this._read = read;
    this._readDate = readDate;
  }
}
//booklist class
class BookList {
  constructor() {
    this._currentBook = "";
    this._lastBook = "";
    this._bookList = [];
    this._readBooks = [];
    this._unreadBooks = [];
    this._nextBook = "";
  }

  addBook(title, genre, author, read, readDate) {
    let book = new Book(title, genre, author, read, readDate);
    this._bookList.push(book);
    if (book._read) {
      this._readBooks.push(book);
    } else {
      this._unreadBooks.push(book);
    }
    this._currentBook = this._bookList.find((book) => book._read === false);
    this._lastBook = this._readBooks[this._readBooks.length - 1];
    this._nextBook = this._unreadBooks[1];
  }

  finishCurrentBook() {
    for (let i = 0; i < this._bookList.length; i++) {
      if (this._currentBook._title === this._bookList[i]._title) {
        this._bookList[i]._read = true;
        this._bookList[i]._readDate = date;
        let current = this._unreadBooks.shift();
        this._readBooks.push(current);
      }
    }
    this._currentBook = this._bookList.find((book) => book._read === false);
    this._lastBook = this._readBooks[this._readBooks.length - 1];
    this._nextBook = this._unreadBooks[1];
  }
}

//data for books

const bList = new BookList();

bList.addBook("1984", "Science-Fiction", "George Orwell");
bList.addBook("Dune", "Science-Fiction", "Frank Herbert");
bList.addBook("Great Expectations", "Bildungsroman", "Charles Dickens");
bList.addBook("To Kill A Mockingbird", "Southern Gothic Fiction", "Harper Lee");
bList.addBook("Pride and Prejudice", "Novel Of Manners", "Jane Austen");
bList.addBook("IT", "Horror", "Stephen King");
bList.finishCurrentBook();
console.log(bList);
