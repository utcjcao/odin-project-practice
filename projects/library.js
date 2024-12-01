const myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
  // the constructor...
}

function addBookToLibrary(title, author) {
  const book = new Book(title, author);
  myLibrary.push(book);
}

const hP = new Book("potter", "jk");
const SS = new Book("SS", "jk");

function drawBooks() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    const titleSpan = document.createElement("span");
    titleSpan.textContent = "title: " + book.title;
    const authorSpan = document.createElement("span");
    authorSpan.textContent = "title: " + book.author;

    bookDiv.appendChild(titleSpan);
    bookDiv.appendChild(authorSpan);

    libraryDiv.appendChild(bookDiv);
  });
}
