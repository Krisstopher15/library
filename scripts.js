const btnAdd = document.querySelector(".btn-add");
const form = document.querySelector(".form");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function display() {
  const library = document.querySelector(".books");
  library.innerHTML = "";
  myLibrary.forEach((element, index) => {
    let book = myLibrary[index];
    let bookElement = document.createElement("div");
    bookElement.classList.add("book-container");
    bookElement.innerHTML = `
        <div class="book-title">
          <p>${book.title}</p>
        </div>
        <div class="book-author">
          <p>${book.author}</p>
        </div>
        <div class="pages">
            <p>${book.pages}</p>
        </div>
    `;

    library.appendChild(bookElement);
  });
}

function addBookToLibrary() {
  const inputAuthor = document.querySelector("#author");
  const inputTitle = document.querySelector("#title");
  const inputPages = document.querySelector("#pages");
  const inputRead = document.querySelector("#read");

  const title = inputTitle.value;
  const author = inputAuthor.value;
  const pages = inputPages.value;
  const read = inputRead.checked;

  const bookInfo = new Book(title, author, pages, read);
  myLibrary.push(bookInfo);

  display();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  closeForm();
  addBookToLibrary();
});

btnAdd.addEventListener("click", openForm);

function openForm() {
  form.classList = "form";
}

function closeForm() {
  form.classList = "closeWindow";
}
