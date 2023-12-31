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
function returnOldestReader (arr : Reader[]) : Reader {
    let oldMen : Reader = arr[0]
    for (let i : number = 0; i < arr.length; i ++){
        if (arr[i].age > oldMen.age) {
            oldMen = arr[i]
        }
    }
    return oldMen
}

//13
function returnOldestBook (arr : Reader[]) : Reader {
    let oldMen : Reader = arr[0]
    for (let i : number = 0; i < arr.length; i ++){
        if (arr[i].favoriteBook.year < oldMen.favoriteBook.year) {
            oldMen = arr[i]
        }
    }
    return oldMen
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

//4
function firstCharToUpper(arr: string[]): string[] {
    arr.forEach((word, index) => {
        arr[index] = word.charAt(0).toUpperCase() + word.slice(1);
    });
    return arr;
}

//5
function returnUniqeValues(arr: number[]): number[] {
    const uniqeArr: number[] = []
    arr.forEach((number) => {
        if (!uniqeArr.includes(number)){
            uniqeArr.push(number)
        }
    })
    return uniqeArr
}

//6
type Family = {
    firstName: string,
    lastName: string
}


type FamilyInicial = {
    firstInitial: string,
    lastInitial: string
}

const family: Family = { 
    firstName: "John", 
    lastName: "Doe"
 }

function objectFamily(names: Family): FamilyInicial {
    const newName: FamilyInicial = {
        firstInitial:names.firstName[0],
        lastInitial:names.lastName[0]
    }
    return newName
}
type Per = {
    name: string,
    age: number
}

//7
let arr: Per[] = [
    { name: "John", age: 25 },
     { name: "Jane", age: 30 },
     { name: "Bob", age: 40 },
     ]

function avgAges (arr:Per[]):number {
    let sum: number = 0
    arr.forEach((ageNum) => {
        sum += ageNum.age
    })
    return sum / arr.length
}

//8
type Numbers = {
    minNumber: number,
    maxNumber: number
}

function minAndMaxNumbers(arr: number[]): Numbers{
    let result: Numbers = {
        minNumber : Math.min(...arr),
        maxNumber : Math.max(...arr)
    }
    return result
}

//9
function reverseArray(arr: unknown): unknown {
    if (Array.isArray(arr)) {
        return arr.reverse();
    }
    return arr;
}

console.log(reverseArray([42, 'hello', true, null, undefined, { key: 'value' }, [1, 2, 3], function() { }]
));






