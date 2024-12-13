class Library {
  constructor() {
    this.library = [];
  }

  add() {
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const book = new Book(titleInput.value, authorInput.value);
    titleInput.value = "";
    authorInput.value = "";
    this.library.push(book);
    this.draw();
  }

  delete(book) {
    function bookFilter(val) {
      return !(book.title === val.title && book.author === val.author);
    }
    this.library = this.library.filter(bookFilter);
    this.draw();
  }

  draw() {
    const libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML = "";
    this.library.forEach((book) => {
      const bookDiv = document.createElement("div");
      const titleSpan = document.createElement("span");
      titleSpan.textContent = "title: " + book.title;
      const authorSpan = document.createElement("span");
      authorSpan.textContent = "author: " + book.author;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "delete book";
      deleteButton.addEventListener("click", () => this.delete(book));
      bookDiv.appendChild(titleSpan);
      bookDiv.appendChild(authorSpan);
      bookDiv.appendChild(deleteButton);

      libraryDiv.appendChild(bookDiv);
    });
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

let library = new Library();

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => library.add());
