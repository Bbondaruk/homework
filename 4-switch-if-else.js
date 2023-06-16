if(9==9){
 console.log('цей блок виконується, якщо умова істинна')
} else {
    console.log('цей блок виконується, якщо умова хибна')
}

if(9==9)
    console.log('цей блок виконується, якщо умова істинна');

if(null){
        console.log('цей блок виконується, якщо умова істинна')
       } else {
           console.log('цей блок виконується, якщо умова хибна')
       }
       

let num = 129;
       if(num < 49){
        console.log('Менше 49')
       } 
       else if(num > 100){
        console.log('Більше 100')
       } 
       else {
           console.log('ok');
       }       

  // (true) ? <цей блок виконується, якщо умова істинна> : <цей блок виконується, якщо умова хибна>

(1==1) ? console.log('цей блок виконується, якщо умова істинна') : console.log('цей блок виконується, якщо умова хибна');


let number = 400;

switch(number){ //назвається switchcase
    case 49:
        console.log('Value = 49');
        break;
    case 50:
        console.log('Value = 50');
        break;
    case 500:
            console.log('Value = 500');
            break;
     default:
                console.log('Default output');
            break
}

let number1 = 400;

switch(number1){ //назвається switchcase
    case 49:
        console.log('Value = 49');
        break;
    case 50:
        console.log('Value = 50');
        break;
     default:
                console.log('Default output');
            break
}