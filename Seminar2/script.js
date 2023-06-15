
let count = 0;
function changeColor(){
    let box = document.getElementsByClassName('box');
    let element = box[0];  
    element.classList.toggle('activeBox');
}

function changeText(){
    let box = document.getElementById('box1');
    box.textContent = 'До встречи!'
}

function showMessage(){
    let message = 'Привет, ' + userName;
    alert(message);
}

let btn = document.getElementById('btn');
//console.log(btn);
btn.addEventListener('click', changeColor);

let button = document.getElementById('btn2');
btn2.addEventListener('click', changeText);

let userName = prompt('Введите Ваше имя: ');
showMessage();

let age = parseInt(prompt("Введите свой возраст: 10, 18 или 30  лет?"));

switch (age){
    case 18:
    alert('Вы совершеннолетний, все можно!');
    break;
    case 10:
    alert('Вам надо учить уроки!');
    break;
    case 30:
    alert('Ложитесь спать, завтра на работу');
    break;
    default:
    alert('Мы не знаем, что Вам делать???');
}
