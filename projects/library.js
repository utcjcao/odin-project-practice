function initialize() {
  drawBooks();
}

let myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(title, author) {
  const book = new Book(title, author);
  myLibrary.push(book);
  drawBooks();
}

function deleteBook(book) {
  function bookFilter(val) {
    return !(book.title === val.title && book.author === val.author);
  }
  myLibrary = myLibrary.filter(bookFilter);
  drawBooks();
}

function drawBooks() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    const titleSpan = document.createElement("span");
    titleSpan.textContent = "title: " + book.title;
    const authorSpan = document.createElement("span");
    authorSpan.textContent = "author: " + book.author;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete book";
    deleteButton.addEventListener("click", () => deleteBook(book));
    bookDiv.appendChild(titleSpan);
    bookDiv.appendChild(authorSpan);
    bookDiv.appendChild(deleteButton);

    libraryDiv.appendChild(bookDiv);
  });
}
