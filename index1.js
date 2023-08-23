"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemType = void 0;
// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
var ItemType;
(function (ItemType) {
    ItemType["Book"] = "book";
    ItemType["DVD"] = "dvd";
})(ItemType || (exports.ItemType = ItemType = {}));
// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems(items, filterFn) {
    return filterFn(items);
}
// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData(items) {
    items.forEach(function (item) {
        console.log(item.type === ItemType.Book ? "title : ".concat(item.title, "\n autor : ").concat(item.author) : "title : ".concat(item.title, "\n duration : ").concat(item.duration));
    });
}
// Test data
var libraryItems = [
    { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { type: ItemType.DVD, title: 'Inception', duration: 148 },
    { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { type: ItemType.DVD, title: 'Avatar', duration: 162 },
    { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];
// Step 5:  הדפיסו את כל המידע הנתון 
function printItemsAllData(items) {
    items.forEach(function (item) {
        console.log(item.type === ItemType.Book ? "type : ".concat(item.type, ",\n title : ").concat(item.title, "\n autor : ").concat(item.author) : "type : ".concat(item.type, ",\n title : ").concat(item.title, "\n duration : ").concat(item.duration));
    });
}
// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך 
function moviesLongThan2Hours(movies) {
    var mov = [];
    movies.forEach(function (movie) {
        if (movie.type === ItemType.DVD) {
            mov.push(movie);
        }
    });
    console.log(mov);
    return mov;
}
// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של  
function booksAouthorHarper(movies) {
    var books = [];
    movies.forEach(function (book) {
        if (book.type === ItemType.Book && book.author === "Harper Lee") {
            books.push(book);
        }
    });
    console.log(books);
    return books;
}
filterItems(libraryItems, booksAouthorHarper);
