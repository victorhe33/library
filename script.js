const myLibrary = [];
const container = document.querySelector('#container');
const addBook = document.querySelector('#addBook');

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
  }

  toggle() {
    this.read === 'read' ? this.read = 'not read' : this.read = 'read';

  }


}
function buttonPress() {
  let title = prompt('title');
  let author = prompt('author');
  let pages = prompt('pages');
  let read = prompt('read');
  
  if (!title || !author || !pages || !read) {
    alert('invalid entry');
    return;
  };

  addBookToLibrary(title, author, pages, read);
}

function addBookToLibrary(...input) {
  const newBook = new Book(...input);
  myLibrary.push(newBook);
  displayBook(newBook, myLibrary.length - 1);
}

//create and update DOM w/ book card element
function displayBook(book, idx) {
    //create a book
    // console.log(book);
    const bookContainer = document.createElement('div');
    bookContainer.className = 'bookContainer';
    bookContainer.setAttribute('id', `book${idx}`)
    // bookContainer.innerText = book;
    //title
    const title = document.createElement('p');
    title.innerText = `Title: ${book.title}`
    //author
    const author = document.createElement('p');
    author.innerText = `Author: ${book.author}`
    //pages
    const pages = document.createElement('p');
    pages.innerText = `Pages: ${book.pages}`
    //read status
    const read = document.createElement('p');
    read.innerText = `Read: ${book.read}`

    //BUTTONS
    //toggle
    const status = document.createElement('button');
    status.innerText = 'status';
    status.onclick = function () {
      book.toggle();
      console.log(book);
      read.innerText = `Read: ${book.read}`
    }
    //delete
    const button = document.createElement('button');
    button.innerText = 'delete';
    button.onclick = function() {
      myLibrary.splice(idx, 1);
      container.removeChild(bookContainer);
    }

    //append subitems to container
    bookContainer.append(title, author, pages, read, status, button);
    
    //Add card to the Content container
    container.appendChild(bookContainer);
}

function displayAll() {
  myLibrary.forEach((book, idx) => {
    displayBook(book, idx);
  });
}

//start with one book
addBookToLibrary('The Bible', 'God', '1000', 'read');
//{ title: 'The Bible', author: 'God', pages: 1000, read: 'read' }

// buttonPress();
// addBookToLibrary('The Bible', 'God', '1000', 'not read');
// displayAll();


//LISTENER;
addBook.addEventListener('click', buttonPress);
