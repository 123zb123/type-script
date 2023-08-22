//1
function bigNumReturn (num1 :number , num2 :number) :number {
    if (num1 > num2) {
        return num1
    }
    return num2
}

//2
function bigNumPrint (num1 :number , num2 :number) :void {
    if (num1 > num2) {
        console.log(num1)
    }
    console.log(num2)
}

//3
function numOddOrEven (num :number) :string {
    if (num % 2 === 0) {
        return "is Even"
    }
    return "is odd"
}

//4
function stringLenght (senten :string) :number {
   return senten.length
}

//5
function numArray (num : number) :number[] {
    let arr :number[] = [] 
    for (let i : number = 0; i < num ; i++ ){
        arr.push(i)
    }
    return arr
}

//6
function higeFromArr (arr : number[]) :number {
    let num : number = arr[0]
    for (let i : number = 0; i < num ; i++ ){
        if (arr[i] > num){
            num = arr[i]
        }
    }
    return num
}

//7
type Person = {
    name : string, 
    age : number, 
    isStudent : boolean
}

const person : Person = {
    name : 'john',
    age : 20,
    isStudent : true
}


//8
function printPerson(person : Person) : string {
    return `${person.name} ${person.age} ${person.isStudent}`
}

//9
function isMinor (person : Person) : boolean {
    if (person.age < 18){
        return true
    }
    return false
}


//10
interface Book  {
    title : string, 
    author : string, 
    year : number
}

const book : Book = {
    title : "world",
    author : "david",
    year : 2000
}

//11
type Reader = Person &{
    favoriteBook : Book
}

const reader1: Reader = {
    name: 'Alice',
    age: 25,
    isStudent: false,
    favoriteBook: book
};

const reader2: Reader = {
    name: 'Bob',
    age: 30,
    isStudent: false,
    favoriteBook: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951
    }
};

const reader3: Reader = {
    name: 'Eve',
    age: 22,
    isStudent: true,
    favoriteBook: {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    }
};

const  readersArr : Reader[] = [reader1, reader2, reader3];

//12
function returnOldestReader (arr : Reader[]) : number {
    let oldMen : Reader = arr[0]
    for (let i : number = 0; i < arr.length; i ++){
        if (arr[i].age > oldMen.age) {
            oldMen = arr[i]
        }
    }
    return oldMen.age
}

//13
function returnOldestBook (arr : Reader[]) : number {
    let oldMen : Reader = arr[0]
    for (let i : number = 0; i < arr.length; i ++){
        if (arr[i].favoriteBook.year < oldMen.favoriteBook.year) {
            oldMen = arr[i]
        }
    }
    return oldMen.favoriteBook.year
}

//exercise B

//1
function returnSumNumbersEvens(arr: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

//2
type Rectangle = {
    with: number,
    high: number
}

function squerRectangle(squer : Rectangle): number {
    return squer.high * squer.with;
}

//3
function isPalindrome(word: string): boolean {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}
console.log(isPalindrome('abe'))








