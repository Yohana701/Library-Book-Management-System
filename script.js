// Book constructor function
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// Method to display book information
Book.prototype.displayInfo = function() {
    return `${this.title} by ${this.author} (ISBN: ${this.isbn})`;
};

// Library class with private and public methods using closures
const Library = (function() {
    let books = []; // Private array to store books

    function addBook(book) {
        books.push(book);
    }

    function getBooks() {
        return books;
    }

    return {
        addBook: function(title, author, isbn) {
            const book = new Book(title, author, isbn);
            addBook(book);
        },
        displayBooks: function() {
            const bookList = document.getElementById('book-list');
            bookList.innerHTML = '';
            getBooks().forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.classList.add('book-item');
                bookItem.textContent = book.displayInfo();
                bookList.appendChild(bookItem);
            });
        }
    };
})();

// Event listener for form submission
document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    Library.addBook(title, author, isbn);
    Library.displayBooks();

    // Clear form fields
    this.reset();
});
