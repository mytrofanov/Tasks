// document.querySelector('button').onclick = palindrom;  // устаревший код
// document.querySelector('.b-1').addEventListener('click', palindrom)
// document.querySelector('.b-2').addEventListener('click', array)


// Привязка функций к кнопкам :
let but = (sel, fun) => {
    document.querySelector(sel).addEventListener('click', fun)
}
let getBut = (id, fun) => {
    document.getElementById(id).addEventListener('click', fun)
}
//получить значение
let getVal = (id) => {
    return (
        document.getElementById(id).value
    )
}
//присвоить значение
let putVal = (id, val) => {
    document.getElementById(id).innerHTML = val
}
let putValPlus = (id, val) => {
    document.getElementById(id).innerHTML += val
}

//очистить значение
let clearVal = (id) => {
    return (
        document.getElementById(id).value = ''
    )
}


but('.b-1', palindrom);
but('.b-2', arr);
but('.b-3', clean_array_numbers);
but('.b-4', arr_for);
but('.b-5', clean_arr_for);
but('.b-6', multiplication);
but('.b-7', obj);
but('.b-8', string);
but('.b-9', string_aaa);
but('.b-10', cut_string);
getBut("bt-11", dataTransform);
getBut("bt-12", unite_array);
getBut("bt-13", arrAddFunc);
getBut("bt-14", f14);
getBut("bt-15", f15);
getBut("bt-16", f16);
getBut("bt-17", f17);
getBut("bt-18", f18);
getBut("bt-19", f19);
getBut("i-22", f22);
getBut("bt-20", f24);
getBut("bt-26", f26);
getBut("bt-27", f27);
getBut("bt-28", f28);


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
    document.querySelector('.i-1').value = '';
}

// Массив от 1 до 7
function arr() {
    for (let i = 1; i < 8; i++) {
        document.querySelector('.array_numbers').innerHTML += i + '<br>'
    }
}

//Вывести массив при помощи цикла for
function arr_for() {
    let a = [1, 2, 3, 4, 5]
    for (let i = 0; i < a.length; i++) {
        document.querySelector('.arr_for').innerHTML += a[i]
    }
}

function clean_array_numbers() {
    document.querySelector('.array_numbers').innerHTML = '';
}

function clean_arr_for() {
    document.querySelector('.arr_for').innerHTML = '';
}

function multiplication() {
    let arr = [2, 3, 4, 5];
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
        document.querySelector('.multiplication').innerHTML = arr.join('*');
        document.querySelector('.multiplication_result').innerHTML = '=' + result;
    }
}

function obj() {
    let city = {
        'Минск': 'Беларусь',
        'Москва': 'Россия',
        'Киев': 'Украина'
    }
    document.querySelector('.obj1').innerHTML = JSON.stringify(city);
}

function string() {
    let countries = {
        'Минск': 'Беларусь',
        'Москва': 'Россия',
        'Киев': 'Украина'
    }
    for (let city in countries) {
        document.querySelector('.strings').innerHTML += (city + ' это ' + countries[city] + '. ');
    }
}

function string_aaa() {
    let str = 'aaa@bbb@ccc'
    document.querySelector('.string_aaa').innerHTML = str.replaceAll('@', '!')
}

function cut_string() {
    let str = 'aaa bbb ccc'
    document.querySelector('.cut_string').innerHTML = str.substr(4, 3) + '<br>'
    document.querySelector('.cut_string').innerHTML += str.substring(4, 7) + '<br>'
    document.querySelector('.cut_string').innerHTML += str.slice(4, 7) + '<br>'
}

// начиная с этой строки использую getElementById
function dataTransform() {
    let data = '2025-12-31'
    let str = data.split('-')
    document.getElementById('date_result').innerHTML = str[2] + '/' + str[1] + '/' + str[0];
}

function unite_array() {
    let a = ['a', 'b', 'c']
    let b = [1, 2, 3]
    document.getElementById('united_arr').innerHTML = a.concat(b);
}

let arrForAdd = ['a', 'b', 'c']

function arrAddFunc() {
    arrForAdd.push(document.getElementById('arr_add').value)
    document.getElementById('arr_add_result').innerHTML = arrForAdd;
    document.getElementById('arr_add').value = '';
}

function f14() {
    let arr = document.getElementById('i-14').value
    arr = arr[0].toUpperCase() + arr.substr(1).toLowerCase()
    document.getElementById('r-14').innerHTML = arr;
    clearVal('i-14')
}

function f15() {
    let str = getVal('i-15');
    str = str.split('').reverse().join('');
    putVal('r-15', str);
    clearVal('i-15')
}

function f16() {
    let str = getVal('i-16')
    if (str.substr(0, 7) == 'http://') {
        putVal('r-16', 'Верно.Строка начинается с http://')
    } else {
        putVal('r-16', 'Не верно. Строка не начинается с http://')
    }
    clearVal('r-16')
}

function f17() {
    let str = getVal('i-17')
    if (str.substr(-5) == '.html') {
        putVal('r-17', 'Верно.Строка заканчивается на .html')
    } else {
        putVal('r-17', 'Не верно. Строка не заканчивается на .html')
    }
    clearVal('r-17')
}

function f18() {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(Math.random().toFixed(2))
    }
    putVal('r-18', arr)
}


function f19() {
    let arrF19 = [];
    document.getElementById('r-19-1').innerHTML = ''
    clearVal('r-19-2')

    for (let i = 0; i < 10; i++) {
        arrF19.push(Math.round(Math.random() * 10))
    }
    putVal('r-19', arrF19)

    for (let b = 0; b < 10; b++) {
        if (arrF19[b] > 0 && arrF19[b] < 10) {
        }
        putValPlus('r-19-1', arrF19[b] + ',')
    }

    clearVal('r-19-2')
    for (let c = 0; c < arrF19.length; c++) {
        if (arrF19[c] == 5) {
            putVal('r-19-2', 'есть такая цифра')
            break;
        } else putVal('r-19-2', 'нет таких')

    }

    let sum = 0;
    for (let d = 0; d < arrF19.length; d++) {
        sum += arrF19[d]
    }
    putVal('r-19-3', 'Сумма всех чисел массива:' + sum)

    let sqSum = 0;
    for (let f = 0; f < arrF19.length; f++) {
        sqSum += arrF19[f] * arrF19[f]
    }
    putVal('r-19-4', ' ' + sqSum)

    let average = sum / arrF19.length
    putVal('r-19-5', average)
}

function f22() {
    let input = document.getElementById('i-22')
    alert('старое значение: ' + input.value)
    input.value = 'новый текст'

}

function f24() {
    let input1 = document.getElementById('i-24')
    let input2 = document.getElementById('i-24-1')
    let input1value = input1.value
    let input2value = input2.value
    input1.value = input2value
    input2.value = input1value
}

function f25(elem) {
    elem.value === 'Нажми на меня' ? (elem.value = 'Зачем ты нажал?' ,
        elem.style.backgroundColor = 'red') : (elem.value = 'Нажми на меня',
        elem.style.backgroundColor = 'white')
}

function f26() {

    let input = document.getElementById('i-26')
    let button = document.getElementById('bt-26')

    button.innerHTML == 'Блокировать' ? (button.innerHTML = 'Разблокировать', input.disabled = true,
            button.style.backgroundColor = 'red')
        : (input.disabled = false, button.innerHTML = 'Блокировать',
            button.style.backgroundColor = 'white')
}

function f27() {
    Number.prototype.plus = function (value) {
        return this + value
    }
    Number.prototype.minus = function (value) {
        return this - value
    }

    putVal('r-27', (2).plus(3).minus(1))
}

function f28() {
    let str = ['*', '1', 'b', '1c']

    function getStr(str) {
        return [].slice.call(str, 1).join(str[0])
    }

    putVal('r-28', getStr(str))
}

// Замена первой буквы каждого слова на заглавную в предложении
str = 'Каждый охотник желает знать'

function capitalize(str) {
    let str2 = ''
    for (let v of str.split(' ')) {
        str2 = str2 + String(v.replace(v[0], v[0].toUpperCase())) + " "
    }
    return str2;
}

// Замена первой буквы каждого слова на заглавную в предложении - метод, пробелы пропускаются
String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)\S/g, function (a) {
        return a.toUpperCase()
    })
};
// console.log(str.toJadenCase())

//маскировка всех символов кроме 4 последних
let word = '1111kkkksss!888'
String.prototype.mask = function () {
    return this.replace(/(\w| )(?=(\w| ){4})/g, 'X')
};

// console.log(word.mask())

//проверка на квадратный корень

function square(int) {
    let num = (Math.sqrt(int))
    console.log(Number.isInteger(num))
}

// square(4)

function TheBiggest() {
    let string = "1 -2 3 4 5"
    let array = string.split(' ').map(Number)
    let minimum = Math.min.apply(null, array)
    let maximum = Math.max.apply(null, array)
    let newArray = [maximum, minimum]
    let newString = newArray.join(' ')
    console.log(newString)
}

// TheBiggest()

//Поменять регистр только у букв после тире или подчеркивания:
//обязательно проверка на пустую строку
// let string1 = "the-stealth-warrior"
// let string2 = "the_stealth_warrior"
// let string3=''
//
// function CamelCase (str) {
//
//     if (!str) {
//         let str = ''
//         return str
//     }
//
//     if (str.includes('-')) {
//         return str.replace( /-([a-z])/ig, function( all, letter ) {
//             return letter.toUpperCase();
//         });
//
//     }  if (str.includes('_')) {
//         return str.replace( /_([a-z])/ig, function( all, letter ) {
//             return letter.toUpperCase();
//         });
//
//     }
//
// }
//
// console.log(CamelCase(string3))

// remove vowels =================================================
// let sting = "This website is for losers LOL!"
//
// function RemoveVowels(string) {
//     return string.replace(/[aeiouAEIOU]/g, "")
// }
// console.log (RemoveVowels (sting))

// ===================== binary numbers ==========================
// function binary(num1 ,num2) {
//     let res = num1+num2
//     let result = (res >>> 0).toString(2);
//     let explanation =`\'${result} (${num1} + ${num2} = ${res} in decimal or ${result} in binary)\'`
//     return explanation
//
// }
//
// console.log (binary(1, 2))
// выбрать друзей с 4мя именами
// let array =["Ryan", "Kieran", "Mark"]
// function friends(array) {
//     let friends= []
//     for (let i=0; i<array.length; i++) {
//         if (array[i].length ===4) {
//             friends.push(array[i])
//         }
//     }
//     return friends
// }
// console.log(friends(array))
// вернуть true если можно построить треугольник,
//  т.е. сумма двух цифр должна быть меньше третьей цифры
// function triangle(a, b, c) {
//     let array = [a, b, c]
//     if (array.every(elem=>elem > 0)) {
//      if (array[0]<array[1]+array[2]){
//          if (array[1]<array[0]+array[2]) {
//              if (array[2]<array[1]+array[0]) {  return  true } else return false
//          } else return false
//      } else return false
//        }
//     else  return false
//     }
//
// console.log( triangle(2, 3,3))
//

// ============= проверяем есть ли в предложении все буквы алфавита

// string ='The quick brown fox jumps over the lazy dog'
//
// function allLetters(string){
//     let alpha = new Set("abcdefghijklmnopqrstuvwxyz")
//     for (let c of string.toLowerCase()){
//         alpha.delete(c)
//         }
//
//     if (alpha.size == 0) {return true}
//     else return false
// }
// console.log(allLetters (string))