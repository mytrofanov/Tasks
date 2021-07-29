// document.querySelector('button').onclick = palindrom;  // устаревший код
// document.querySelector('.b-1').addEventListener('click', palindrom)
// document.querySelector('.b-2').addEventListener('click', array)


// Привязка функций к кнопкам :
let but = (sel, fun) => {
    document.querySelector(sel).addEventListener('click', fun)
}
but('.b-1', palindrom);
but('.b-2', arr);
but('.b-3', clean);
but('.b-4', arr_for);
but('.b-5', clean_arr_for);


// Палиндром
function palindrom() {
    let word = document.querySelector('.i-1').value
    document.querySelector('.out_word').innerHTML = word.toLowerCase()
    let reversed_word = word.toLowerCase().split('').reverse().join('')
    document.querySelector('.reversed_word').innerHTML = reversed_word
    if (word === reversed_word) {
        document.querySelector('.conclusion').innerHTML = 'слова идентичны'
    } else (
        document.querySelector('.conclusion').innerHTML = 'слова не равны'
    )
}
// Массив от 1 до 7
function arr() {
    for (let i=1; i<8; i++) {
        document.querySelector('.array_numbers').innerHTML += i+'<br>'
    }
}
function clean () {
    document.querySelector('.array_numbers').innerHTML = null;
}

//Вывести массив при помощи цикла for
function arr_for () {
    let a = [1,2,3,4,5]
    for (let i=0; i< a.length; i++) {
        document.querySelector('.arr_for').innerHTML += a[i] + '<span>' + ','
    }
}

function clean_arr_for (){
    document.querySelector('.arr_for').innerHTML = null;
}
