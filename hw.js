

// Домашка:

// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

    let hamburgers = 4;
    let friesPotatos = 0;

if(hamburgers >= 4 && friesPotatos > 0){
 console.log('Ми поїли')
}else{
    console.log('Ми йдемо в інше кафе')
}

// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

let productPrice = 0;

if(productPrice >= 1000 && productPrice <= 1900){
    console.log(true)
}else{
    console.log(false)
}

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

let productPrice1 = 0;

if(productPrice1 >= 1000 && productPrice1 <= 1900){
    console.log(false)
}else{
    console.log(true)
}

let productPrice2 = 0;

if(!(productPrice2 >= 1000 && productPrice2 <= 1900)){
    console.log(true)
}else{
    console.log(false)
}

// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

let season = 2;

if(season == 0){
    console.log('Winter')
}else if(season == 1){
    console.log('Spring')
}else if(season == 2){
    console.log('Summer')
}else if(season == 3){
    console.log('Fall')
}else{
    console.log('Incorrect season value')
}

// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

//     abc: a менше б, a менше с, б менше с
    // acb: a менше с, с менше б, б більше а
    // bac: б менше а, а менше с, б менше с
    // bca: б менше с, с менше а
    // cab: с менше а, а менше б
    // cba: с менше б, б менше а
let a = 1;
let b = 2;
let c = 3;

if(a == b || b == c || a == c){
    console.log('out of scope')
}else if(a < c){
    if(a < b){
    
        if(b < c){
            console.log(b)
        }else if(b > c){
            console.log(c)
        }
    }else if(a > b){
        console.log(a)
    }
}else if(c < a){
    if(b < a){
        if(b < c){
            console.log(c)
        }else if(b > c){
            console.log(b)
        }

    }else if(b > a){
        console.log(a)
    }
}
    

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

let weekDay = 3

switch(weekDay){
    case 1:
    console.log('Monday');
    break;
    case 2:
        console.log('Tuesday');
    break;
    case 3:
        console.log('Wednesday');
    break;
    case 4:
        console.log('Thursday');
    break;
    case 5:
        console.log('Friday');
    break;
    case 6:
        console.log('Saturday');
    break;
    case 7:
        console.log('Sunday');
    break;
    // case 7 < weekDay:
    // console.log('Monday');
    // break;

}


// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

// 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    // Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
