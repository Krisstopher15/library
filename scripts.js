const btnAdd = document.querySelector(".btn-add");
const btnDelete = document.querySelector(".btn-remove");
const form = document.querySelector(".form");
const books = document.querySelector(".books");

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  readStatus() {
    this.read = !this.read;
  }
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
function display() {
  books.innerHTML = "";
  myLibrary.forEach((element, index) => {
    let bookElement = document.createElement("div");
    bookElement.classList.add("book-container");
    bookElement.innerHTML = `
        <div class="book-title">
        <p>Title: ${element.title}</p>
        </div>
        <div class="book-author">
        <p>Author: ${element.author}</p>
        </div>
        <div class="pages">
        <p>Pages: ${element.pages}</p>
        </div>
        <button onclick="changeReadStatus(${index})" class="${
      element.read ? "read" : "unread"
    } btn-read">${element.read ? "Read" : "No Readed"}</button>
        <button class="btn-remove" onclick="removeBook(${index})">Remove</button>
        `;

    books.appendChild(bookElement);
  });
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

function removeBook(index) {
  myLibrary.splice(index, 1);
  display();
}

function changeReadStatus(index) {
  myLibrary[index].readStatus();
  display();
}
