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
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(i);
    }
    return arr;
}
//6
function higeFromArr(arr) {
    var num = arr[0];
    for (var i = 0; i < num; i++) {
        if (arr[i] > num) {
            num = arr[i];
        }
    }
    return num;
}
var person = {
    name: 'john',
    age: 20,
    isStudent: true
};
//8
function printPerson(person) {
    return "".concat(person.name, " ").concat(person.age, " ").concat(person.isStudent);
}
//9
function isMinor(person) {
    if (person.age < 18) {
        return true;
    }
    return false;
}
var book = {
    title: "world",
    author: "david",
    year: 2000
};
var reader1 = {
    name: 'Alice',
    age: 25,
    isStudent: false,
    favoriteBook: book
};
var reader2 = {
    name: 'Bob',
    age: 30,
    isStudent: false,
    favoriteBook: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951
    }
};
var reader3 = {
    name: 'Eve',
    age: 22,
    isStudent: true,
    favoriteBook: {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    }
};
var readersArr = [reader1, reader2, reader3];
//12
function returnOldestReader(arr) {
    var oldMen = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].age > oldMen.age) {
            oldMen = arr[i];
        }
    }
    return oldMen.age;
}
//13
function returnOldestBook(arr) {
    var oldMen = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].favoriteBook.year < oldMen.favoriteBook.year) {
            oldMen = arr[i];
        }
    }
    return oldMen.favoriteBook.year;
}
