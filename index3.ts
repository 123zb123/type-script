// 1.
// צור פונקציה גנרית ותנו לה שם מתאים שלוקחת שני ארגומנטים מסוגים שונים ומחזירה מערך המכיל את שני הארגומנטים.
// תפקיד הפונקציה, ליצור צמד 
// ['asd',3]
function towValues<T,F>(bool : T, str : F):[T,F]{
    return [bool, str]
}

// 2.
// צור פונקציה גנרית שמקבלת אובייקט מכל סוג ומפתח ומחזירה את ערך המפתח באובייקט
function objectAnyType<T,K extends keyof T>(obj : T, key : K): T[K]{
    return obj[key]
}

interface OBJ {
    1 : string,
    2 : number,
    3 : boolean
}

const obj: OBJ = {1 : 'zvi', 2 : 22, 3 : true}
console.log(objectAnyType(obj,3));


//מתקדם
//צור פונקציה גנרית שמקבלת מערך של אובייקטים ואובייקט כארגומנטים. הפונקציה תוסיף את האובייקט שהתקבל לכל איבר במערך 
// עליכם לקרוא על ולהשתמש ב: Record  


// כתבו פונקציה שמקבלת אובייקט ושם שדה(מפתח).  הפונקציה תחזיר אובייקט חדש בלי המפתח
// קראו על Omit


// כתוב פונקציה שמקבלת אובייקט,מפתח וערך. הפונקציה תחזיר אובייקט חדש עם המפתח והערך שהוזנו לה כשדה חדש באובייקט שהוזן לה
// השתמשו ב &

