"use strict";
//1
function bigNumReturn(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}
//2
function bigNumPrint(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    }
    console.log(num2);
}
//3
function numOddOrEven(num) {
    if (num % 2 === 0) {
        return "is Even";
    }
    return "is odd";
}
//4
function stringLenght(senten) {
    return senten.length;
}
//5
function numArray(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(i);
    }
    return arr;
}
//6
function higeFromArr(arr) {
    let num = arr[0];
    for (let i = 0; i < num; i++) {
        if (arr[i] > num) {
            num = arr[i];
        }
    }
    return num;
}
const person = {
    name: 'john',
    age: 20,
    isStudent: true
};
//8
function printPerson(person) {
    return `${person.name} ${person.age} ${person.isStudent}`;
}
//9
function isMinor(person) {
    if (person.age < 18) {
        return true;
    }
    return false;
}
const book = {
    title: "world",
    author: "david",
    year: 2000
};
const reader1 = {
    name: 'Alice',
    age: 25,
    isStudent: false,
    favoriteBook: book
};
const reader2 = {
    name: 'Bob',
    age: 30,
    isStudent: false,
    favoriteBook: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951
    }
};
const reader3 = {
    name: 'Eve',
    age: 22,
    isStudent: true,
    favoriteBook: {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    }
};
const readersArr = [reader1, reader2, reader3];
//12
function returnOldestReader(arr) {
    let oldMen = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > oldMen.age) {
            oldMen = arr[i];
        }
    }
    return oldMen;
}
//13
function returnOldestBook(arr) {
    let oldMen = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].favoriteBook.year < oldMen.favoriteBook.year) {
            oldMen = arr[i];
        }
    }
    return oldMen;
}
//exercise B
//1
function returnSumNumbersEvens(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
function squerRectangle(squer) {
    return squer.high * squer.with;
}
//3
function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}
//4
function firstCharToUpper(arr) {
    arr.forEach((word, index) => {
        arr[index] = word.charAt(0).toUpperCase() + word.slice(1);
    });
    return arr;
}
//5
function returnUniqeValues(arr) {
    const uniqeArr = [];
    arr.forEach((number) => {
        if (!uniqeArr.includes(number)) {
            uniqeArr.push(number);
        }
    });
    return uniqeArr;
}
const family = {
    firstName: "John",
    lastName: "Doe"
};
function objectFamily(names) {
    const newName = {
        firstInitial: names.firstName[0],
        lastInitial: names.lastName[0]
    };
    return newName;
}
//7
let arr = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 40 },
];
function avgAges(arr) {
    let sum = 0;
    arr.forEach((ageNum) => {
        sum += ageNum.age;
    });
    return sum / arr.length;
}
function minAndMaxNumbers(arr) {
    let result = {
        minNumber: Math.min(...arr),
        maxNumber: Math.max(...arr)
    };
    return result;
}
//9
function reverseArray(arr) {
    if (Array.isArray(arr)) {
        return arr.reverse();
    }
    return arr;
}
console.log(reverseArray([42, 'hello', true, null, undefined, { key: 'value' }, [1, 2, 3], function () { }]));
