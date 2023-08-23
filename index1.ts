// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
export enum ItemType {
  Book = 'book',
  DVD = 'dvd',
}

// Step 2:  ספר צריך להכיל שדות
interface Book {
type : ItemType.Book
title : string
author : string 
}

interface DVD {
  type : ItemType.DVD
  title : string
  duration : number
}





// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems<T>(items: T[], filterFn: (arr : T[]) => T[]): T[] {
  return filterFn(items)
}



// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData<T extends DVD | Book>(items : T[]) : void{
  items.forEach((item : T) => {
      console.log(item.type === ItemType.Book? `title : ${item.title}\n autor : ${item.author}`: `title : ${item.title}\n duration : ${item.duration}`)
    }
  )}


// Test data
const libraryItems: (Book | DVD)[] = [
  { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { type: ItemType.DVD, title: 'Inception', duration: 148 },
  { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { type: ItemType.DVD, title: 'Avatar', duration: 162 },
  { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];

// Step 5:  הדפיסו את כל המידע הנתון 

  function printItemsAllData<T extends DVD | Book>(items : T[]) : void{
    items.forEach((item : T) => {
        console.log(item.type === ItemType.Book? `type : ${item.type},\n title : ${item.title}\n autor : ${item.author}`: `type : ${item.type},\n title : ${item.title}\n duration : ${item.duration}`)
      }
    )}

// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך 
function moviesLongThan2Hours<T extends DVD | Book>(movies : T[]): DVD[]{
  let mov: DVD[] = []
  movies.forEach((movie : T) => {
    if (movie.type === ItemType.DVD){
      mov.push(movie)
    }
  } )
  console.log(mov)
  return mov
}

// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של  
function booksAouthorHarper<T extends DVD | Book>(movies : T[]): Book[]{
  let books: Book[] = []
  movies.forEach((book : T) => {
    if (book.type === ItemType.Book && book.author === "Harper Lee"){
      books.push(book)
    }
  } )
  console.log(books)
  return books
}

filterItems(libraryItems, booksAouthorHarper)