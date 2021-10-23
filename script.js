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

// ======= сколько людей остались в автобусе ===
// получаем пары чисел = вошло, вышло
// const stops = [
//  [10, 0],
//  [5, 3],
//  [4, 4],
//  [3, 8],
//  [0, 2],
// ]
//
//
// var number = function(busStops){
//    let result = busStops.reduce((total, [enter, exit]) => total + enter - exit, 0);
//    return result
// }
// console.log(number(stops))
// string = 'bitcoin take over the world maybe who knows perhaps'
//
// function findShort(s) {
//     let words = s.split(' ')
//     let shortWord = words[0]
//     for (let i=0; i< words.length; i++) {
//         if (words[i].length < shortWord.length  ) {
//             shortWord = words[i]
//         }
//     } return shortWord.length
//
// }
// console.log(findShort(string))
//разбить строку по два символа : match
// string = 'bitcoinperhapss'
//
// function solution(str) {
//     if (str) {
//     let array = str.match(/.{1,2}/g)
//     if (array[array.length-1].length <2 ) {
//         array[array.length-1] = array[array.length-1] + '_'
//     }
//     return array}
//     else return str = []
// }
// console.log (solution(string))
// =================== удвоить каждую цифру из числа ======================
// function integer(num) {
//     if (!num) {
//         return 0
//     }
//     let str = String(num)
//     let arr = Array.from(str)
//     let mult = arr.map(num => num * num)
//     let NewStr = mult.join('')
//     let result = Number(NewStr)
//     return result
// }
//
// console.log(integer(125))
// Распределить членство в клубе по двум цифрам: возраст и handicap
// возраст старших должен быть от 55 и handicap ниже 7 (чем ниже тем лучше)
// let applicantData = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// let senior = [55,7]
// function checkMembers(data) {
//     let members = []
//     for (let i=0; i<data.length; i++) {
//         if(data[i][0] >=55 && data[i][1]>7 ) {
//             members.push('Senior')
//         } else members.push('Open')
//     } return members
// }
// console.log(checkMembers([[59, 12],[55,-1],[12, -2],[12, 12]]))

// Your task is to write a function which returns the sum of following series upto nth term(parameter).
//
//     Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
// let series = ' 1 + 1/4 + 1/7 + 1/10 + 1/13'
// // перевожу мат выражение в строку  и считаю
// function sumOfSeries(n) {
//     if ( n != NaN|| n === 0) {
//         let a= Number(n).toFixed(2)
//         return a.toString()}
//     let numArray = n.split('+')
//     let expression = []
//     let results = []
//     let resultsNum = []
//     let result
//
//     for (let i = 0; i < numArray.length; i++) {
//         expression.push(numArray[i].split('/'))
//     }
//
//     for (let i = 0; i < expression.length; i++) {
//         expression[i][0] = Number(expression[i][0])
//         if (expression[i][1]) {
//             expression[i][1] = Number(expression[i][1])
//         }
//         let num = expression[i][1] ? expression[i][0] / expression[i][1] : expression [i][0]
//         results.push(num.toFixed(2))
//     }
//     for (let i = 0; i < results.length; i++) {
//         resultsNum.push(Number(results[i]))
//     }
//     result = resultsNum.reduce((previousValue, currentValue) => previousValue + currentValue)
//     result = result.toFixed(2)
//     let stringResult = result.toString()
//     return stringResult
// }
//
//
// // console.log (sumOfSeries(1))
// // нужно сделать серию Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
// describe("Tests", () => {
//     it("test", () => {
//         Test.assertEquals(SeriesSum(1), "1.00")
//         Test.assertEquals(SeriesSum(2), "1.25")
//         Test.assertEquals(SeriesSum(3), "1.39")
//         Test.assertEquals(SeriesSum(4), "1.49")
//     });
// });
//
// function seria(n) {
//     let result = 0;
//     let reverage = 1;
//     for (let i = 0; i < n; i += 1) {
//         if (i === 0) {
//             result = 1;
//         } else {
//             reverage += 3;
//             result = result + (1 / reverage);
//         }
//     }
//     return result.toFixed(2);
// }
// console.log(seria(2))
//  сделать из массива телефонный номер:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//
// function createPhoneNumber(numbers) {
//
//     let string = ''
//     for (let i=0; i<numbers.length; i++) {
//         string +=numbers[i]
//     }
//     let result = `(${string.slice(0,3)}) ${string.slice(3,6)}-${string.slice(6,10)}`
//     return result
// }
//
// console.log (createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
//
//     Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    // make an array with the bit result
    const base = (n).toString(2).split('');

    // make a sum with the array and make the index a Number
    const result = base.reduce((sum, num) => sum + Number(num), 0);
    console.log(base)
    return result;
};

console.log(countBits(1234))