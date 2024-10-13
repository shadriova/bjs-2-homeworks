class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
        } else if (number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = 'detective';
    }
}

class Library {
    constructor(name, books = []) {
        this.books = books;
        this.name = name;
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const foundBook = this.books.find(book => book[type] === value);
        return foundBook || null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex !== -1) {
            const bookToGive = this.books.splice(bookIndex, 1)[0]; 
            return bookToGive;
        }
        return null;
    }
}