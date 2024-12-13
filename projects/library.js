class Library {
  constructor() {
    this.library = [];
  }

  add() {
    if (this.library.length === 14) {
      const errorSpan = document.getElementById("error");
      errorSpan.textContent = "too many books!";
      return;
    } else {
      const errorSpan = document.getElementById("error");
      errorSpan.textContent = "";
    }
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const book = new Book(
      titleInput.value,
      authorInput.value,
      crypto.randomUUID()
    );
    titleInput.value = "";
    authorInput.value = "";
    this.library.push(book);
    console.log(this.library.length);
    this.draw();
  }

  delete(book) {
    function bookFilter(val) {
      return !(book.id === val.id);
    }
    this.library = this.library.filter(bookFilter);
    this.draw();
  }

  draw() {
    const libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML = "";
    this.library.forEach((book) => {
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("book-container");
      const titleSpan = document.createElement("span");
      titleSpan.textContent = "title: ";
      const titleContentSpan = document.createElement("span");
      titleContentSpan.textContent = book.title;
      const authorSpan = document.createElement("span");
      authorSpan.textContent = "author: ";
      const authorContentSpan = document.createElement("span");
      authorContentSpan.textContent = book.author;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "delete book";
      deleteButton.addEventListener("click", () => this.delete(book));
      bookDiv.appendChild(titleSpan);
      bookDiv.appendChild(titleContentSpan);
      bookDiv.appendChild(authorSpan);
      bookDiv.appendChild(authorContentSpan);
      bookDiv.appendChild(deleteButton);

      libraryDiv.appendChild(bookDiv);
    });
  }
}

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

let library = new Library();

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => library.add());
