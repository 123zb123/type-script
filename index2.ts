
// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן

// דגשים
// שחקן  יכול לבחור בין אבן נייר ומספרים בלבד! אך שחקן יכול שלא תהיה לו בחירה
// התכנית יכולה להחזיר את המחרוזות
// 'tie', 'player1', 'player2' 
// התשובה חייבת להכיל
// ENUM
// type/interface
// union
// במידה ולשחקן אין בחירה הצג זרקו שגיאה
// ממשו את הפונקציה הוסיפו טיפוסים לפרמטרים ולערך החזרה של הפונקציה

enum choeises {
    Paper = 'paper',
    Stone = 'stone',
    Cut = 'cut'
}

type Player = {
    move : choeises
}

const player1 : Player = {move : choeises.Paper}
const player2 : Player = {move : choeises.Stone}


function playGame (player1 : Player, player2: Player):string {
    if (player1.move === 'stone' && player2.move === 'stone'|| 
    player1.move === 'paper' && player2.move === 'paper'||
    player1.move === 'cut' && player2.move === 'cut') {
        return 'tie'
    }else if (player1.move === 'stone' && player2.move === 'cut'|| 
    player1.move === 'paper' && player2.move === 'stone'||
    player1.move === 'cut' && player2.move === 'paper'){
        return 'player1'
    }else{
        return 'player2'
    }
}

const play = playGame(player1, player2);
console.log(play);
//Output: player1 or player2 or tie

