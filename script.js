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
//
// var countBits = function(n) {
//     // make an array with the bit result
//     const base = (n).toString(2).split('');
//
//     // make a sum with the array and make the index a Number
//     const result = base.reduce((sum, num) => sum + Number(num), 0);
//     console.log(base)
//     return result;
// };
//
// console.log(countBits(1234))

//Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.
//Разложить многозначное число на однозначные и получить суммы
//
// function digits(n) {
//     let sum = 0
//
//      String(n).split('').map(number =>
//         sum += Number(number)
//     )
//     return sum > 10 ? digits(sum) : sum
// }
//
// console.log(digits(123))
//собрать сумму вершин с дерева (листья)
// const tree = [
//     {
//         v: 5,
//         c: [
//             {
//                 v:10,
//                 c: [
//                     {
//                         v:11,
//                     }
//                 ]
//             },
//             {
//                 v:7,
//                 c: [
//                     {
//                         v:5,
//                         c: [
//                             {
//                                 v:1
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         v: 5,
//         c: [
//             {
//                 v:10
//             },
//             {
//                 v:15
//             }
//         ]
//     }
// ]
//
// function treeSum(tree) {
//     if (!tree.length) {
//         return 0
//     }
//     let sum = 0
//     let stack = []
//     tree.forEach(node => stack.push(node))
//     while (stack.length) {
//         let node = stack.pop()
//         sum += node.v
//         if (node.c) {
//             node.c.forEach(n => stack.push(n))
//
//         }
//     }
//     return  sum
// }
//
// console.log(treeSum(tree))

// Задача с собеседования:
//узнать количество всех вариантов отрезков из массива
// let array = [2,4,1]
// let result = []

// 2
// 2, 4
// 2, 4, 1
// 4
// 4, 1
// 1

// 2,4,1
//2-4, 2-1, 4-1,
// for (let i=0; i<array.length; i++) {
//
//     let temp = []
//
//     for (let a=i; a<array.length; a++) {
//         temp.push(array[a])
//
//         result.push([...temp])
//         console.log(temp)
//     }
//
//
// }
//
// console.log(result)
//Your task is to make a function that can take any non-negative integer as an argument
// and return it with its digits in descending order. Essentially,
// rearrange the digits to create the highest possible number.
//Examples:
//   Input: 42145 Output: 54421
//Input: 145263 Output: 654321
//Input: 123456789 Output: 987654321
//
// function descendingOrder(n) {
//     const arrayOfDigits = Array.from(String(n), Number);
//     arrayOfDigits.sort(function (a,b) {return b - a
//     })
//     let result = +arrayOfDigits.join('')
//     return result
// }
// console.log(descendingOrder(145263))
//
// a1 = ["strong", "arp", "live" ]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// function substrings (array1,array2) {
//     let result = []
//     for (let i=0; i<array1.length; i++) {
//         for (let a=0; a<array2.length; a++) {
//                if (array2[a].includes(array1[i])) {
//                    if(!result.includes(array1[i])) {
//                        result.push(array1[i])
//                    }
//                }
//         }
//     }
//     result.sort(function (a,b) {
//         if (a>b){return 1}
//         if (a<b) {return -1}
//     })
//     return result
// }
//
// console.log(substrings(a1,a2))
//================================================================================================================
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
//
// For example:
//
//     Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
//
// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.
//
// Last one:
//     You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.
//
//     Note: Please remember that in most programming/scripting languages the index of an array starts at 0.
//
// Input:
//     An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.
//
//     Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N.
// If you do not find an index that fits these rules, then you will return -1.
//
// Note:
//     If you are given an array with multiple answers, return the lowest correct index.
//
// arr = [20,10,30,10,10,15,35]
//
// function findEvenIndex(arr) {
//     if (!arr.length||arr.length>1000) {
//         return null
//     }
//     let left = 0
//     for (let i = 0; i < arr.length; i++) {
//         let right = 0
//         if (i>0) {
//             left += arr[i-1]
//         }
//             right = arr.slice(i+1,arr.length)
//         let res
//             if (right.length>0) {
//                 res = right.reduce(function (sum,elem) {
//                     return sum +elem
//                 })
//             }
//
//             console.log(`i=${i} left= ${left}; right= ${res}`)
//             if (left === res) {
//                 return i
//             }
//     }
//     return -1
// }
//
// console.log(findEvenIndex(arr))

//==============================================================================
// There is a queue for the self-checkout tills at the supermarket. Your task is write
// a function to calculate the total time required for all the customers to check out!
//
//     input
// customers: an array of positive integers representing the queue. Each integer represents
// a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.
//     output
// The function should return an integer, the total time required.
//
//     Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)
//
// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times
//
// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.
//
// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds
// to a till as soon as it becomes free.
//     N.B. You should assume that all the test input will be valid, as specified above.
//
//     P.S. The situation in this kata can be likened to the more-computer-science-related idea
//     of a thread pool, with relation to running multiple processes
//     at the same time: https://en.wikipedia.org/wiki/Thread_pool
//
// function queueTime(customers, tillsNumber) {
//     let tills = new Array(tillsNumber).fill(0)
//     for (let t of customers) {
//         let index = tills.indexOf(Math.min(...tills))
//         tills[index] +=t
//         console.log('tills:')
//         console.log(tills)
//     }
//
//     return Math.max(...tills)
// }
// console.log(queueTime([2,3,10], 2))
//===================================================================================================================
// Write a function that takes a string of braces, and determines
// if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
//
// This Kata is similar to the Valid Parentheses Kata,
// but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
//
//     All input strings will be nonempty, and will only consist of parentheses,
//     brackets and curly braces: ()[]{}.
//
// What is considered Valid?
//     A string of braces is considered valid if all braces are matched with the correct brace.
//
//     Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False
//
// function validBraces(braces){
//     let tracer = []
//     for(let i=0;i < braces.length; i++){
//         if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
//             tracer.push(braces[i])
//             console.log(tracer)
//         } else{
//             if(tracer.length === 0) return false
//             let lastValue = tracer[tracer.length-1]
//             if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') ||
//                 (braces[i] === ')' && lastValue === '('))
//             {
//                 tracer.pop()
//                 console.log(tracer)
//             } else {
//                 break;
//             }
//         }
//
//     }
//     return tracer.length === 0
// }
//
// console.log(validBraces( "({})[({})]" )) // true
//=====================================================================================================
// Your task is to split the chocolate bar of given dimension n x m into small squares.
// Each square is of size 1x1 and unbreakable.
// Implement a function that will return minimum number of breaks needed.
//
//     For example if you are given a chocolate bar of size 2 x 1 you can
//     split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
//
//     If input data is invalid you should return 0 (as in no breaks are needed
//     if we do not have any chocolate to split). Input will always be a non-negative integer.
//
// function breakChocolate(n,m) {
//     if (n>1 && m===1 || n===1 && m>1 || n>=1 && m>= 1) {
//         return n*m -1
//     }
//     else return 0
// }
// console.log(breakChocolate(3,0))

// You are given an array (which will have a length of at least 3,
// but could be very large) containing integers. The array is either entirely
// comprised of odd integers or entirely comprised of even integers except for
// a single integer N. Write a method that takes the array as an argument
// and returns this "outlier" N.
//
//     Examples
//     [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
//
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)
//
// function oddOrEvenNumbers(integers) {
//     let array1 = []
//     let array2 = []
//     for (let i=0; i<integers.length; i++) {
//         if (integers[i] % 2 === 0) {
//             array1.push(integers[i])
//         }
//         if (integers[i] % 2 != 0) {
//             array2.push(integers[i])
//         }
//     }
//     if (array1.length < array2.length) {
//         return array1[0]
//     } else return array2[0]
//
// }
// console.log(oddOrEvenNumbers([160, 3, 1719, 19, 11, 13, -21]))

//=======================================================================================
// This time no story, no theory. The examples below show you how to write function accum:
//
//     Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
let s = 'RqaEzty'

function accum(s) {
    let result = ''
    for (let i = 0; i < s.length; i++) {
        result += s[i].toUpperCase()
        result += s[i].toLowerCase().repeat(i)
        if (i<s.length-1) {
            result +='-'
        }
    }
    return result
}

console.log(accum(s))