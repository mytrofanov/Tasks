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
// let s = 'RqaEzty'
//
// function accum(s) {
//     let result = ''
//     for (let i = 0; i < s.length; i++) {
//         result += s[i].toUpperCase()
//         result += s[i].toLowerCase().repeat(i)
//         if (i<s.length-1) {
//             result +='-'
//         }
//     }
//     return result
// }
//
// console.log(accum(s))

//==================================================================================
// Don't give me five!
// In this kata you get the start number and the end number of a region
// and should return the count of all numbers except numbers with a 5 in it.
// The start and the end number are both inclusive!
//
//     Examples:
//
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!
//
//     I'm very curious for your solutions and the way you solve it.
//     Maybe someone of you will find an easy pure mathematics solution.
//
// Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// I have also created other katas. Take a look if you enjoyed this kata!
//
// function five(start, end) {
//     let result = ''
//     let count = 0
//     for(let i=start; i<=end; i++) {
//         let str = String(i)
//         if(!str.includes('5')){
//             result+=i
//             count +=1
//             if(i<=end-1){
//                 result+=','
//             }
//         }
//
//     }
//     console.log(result)
//     console.log(count)
// }
// five(1,3)

//================================================================================================
// A Narcissistic Number is a positive number which is the sum of its own digits,
//     each raised to the power of the number of digits in a given base.
//     In this Kata, we will restrict ourselves to decimal (base 10).
//
// For example, take 153 (3 digits), which is narcisstic:
//
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//
// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:
//
//     Your code must return true or false (not 'true' and 'false')
// depending upon whether the given number is a Narcissistic number in base 10.
// This may be True and False in your language, e.g. PHP.
//
//     Error checking for text strings or other invalid inputs is not required,
//     only valid positive non-zero integers will be passed into the function.
//
// function narcissistic(value) {
//     let sNum=String(value)
//     let sum = 0
//     for(let i =0; i<sNum.length; i++) {
//         let n = new Number(sNum[i])
//         sum += Math.pow(n,sNum.length)
//     }
//     return sum === value
// }
//
// console.log(narcissistic(1652))

//==============================================================================
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string,
//     and returns the same string with all even indexed characters in each word upper cased,
//     and all odd indexed characters in each word lower cased. The indexing just explained
// is zero based, so the zero-ith index is even, therefore that character should be upper cased
// and you need to start over for each word.
//
//     The passed in string will only consist of alphabetical characters and spaces(' ').
//     Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
//
//     Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

//===============================================================================================

// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string,
// and returns the same string with all even indexed characters in each word upper cased,
// and all odd indexed characters in each word lower cased. The indexing just explained is zero based,
// so the zero-ith index is even, therefore that character should be upper cased and you need
// to start over for each word.
//
//     The passed in string will only consist of alphabetical characters and spaces(' ').
//     Spaces will only be present if there are multiple words.
//     Words will be separated by a single space(' ').
//
//     Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
//
// let weird = "Weird string case"
// function toWeirdCase(string) {
//     let result = ''
//     let space = string.split(' ')
//
//     for (let a=0; a<space.length; a++) {
//
//         for (let i=0; i<space[a].length; i++) {
//             if (i % 2 === 0) {
//                 result += space[a][i].toUpperCase()
//             }
//             if (i % 2 != 0) {
//                 result += space[a][i].toLowerCase()
//             }
//         }
//         if (space[a].length) {
//             result +=' '
//         }
//     }
//
//     result = result.slice(0,result.length-1)
//     return result
// }
// console.log(toWeirdCase( "Weird string case" ))

//=========================================================================================
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b))
// that checks whether the two arrays have the "same" elements, with the same multiplicities.
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
//
//     Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the
// square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on.
// It gets obvious if we write b's elements in terms of squares:
//
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp may not return true anymore:
//
//     a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.
//
//     a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.
//
//     Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, Crystal, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
//лучшее решение:
// function comp(array1, array2) {
//     if(array1 == null || array2 == null) return false;
//     array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
//     return array1.map(v => v * v).every((v, i) => v == array2[i]);
// }
//
// a =  [1, 0, 10, 1, 5, 6, 8, 8, 4, 6, 5, 1]
// b = [36, 1, 64, 25, 64, 1, 36, 25, 1, 100, 16, 1]
//
//
// function validArray(array1, array2) {
//     if (array1.length === 0 || array2.length === 0 || array1.length != array2.length || array1 == null || array2 == null ) {
//         return false
//     }
//     for (let i = 0; i < array1.length; i++) {
//         let square = array1[i] * array1[i]
//         for (let a = 0; a < array2.length; a++) {
//
//             if (array2[a] === square) {
//                  array2.splice(array2.indexOf(array2[a]),1)
// //             if (array2.length === 0 ) {return  true}
//             }
//         }
//     }
//     return false
// }
// console.log (validArray(a,b))
// function comp(a, b) {
//     return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
// }
// const comp = (array1, array2) =>
//     Array.isArray(array1) &&
//     Array.isArray(array2) &&
//     array1.every(item => {
//         const index = array2.indexOf(Math.pow(item, 2))
//         return index > -1 ? array2.splice(index, 1) : false
//     })

// Your goal in this kata is to implement a difference function, which subtracts one list from another
// and returns the result.
//
//     It should remove all values from list a, which are present in list b keeping their order.
//
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
//
//     arrayDiff([1,2,2,2,3],[2]) == [1,3]
// let a = [1, 2, 3]
// let b = [1, 2]
//
// function arrayDiff(a, b) {
//     return a.filter(e => !b.includes(e));
// }
//
// console.log(arrayDiff(a, b))
//========================================================================================
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
//
// Write a function which takes a list of strings and returns each line prepended by the correct number.
//
//     The numbering starts at 1. The format is n: string. Notice the colon and space in between.
//
//     Examples:
//
// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
// let arrT = ["a", "b", "c"]
// let number = function (array) {
//     let result = []
//     for (let i=0; i<array.length; i++) {
//         result.push(`${i+1}: ${array[i]}`)
//
//     }
//     return result
// }
// console.log(number(arrT))

// best:
//     var number = function(array) {
//         return array.map(function (line, index) {
//             return (index + 1) + ": " + line;
//         });
//     }
//================================================================================================
// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James.
// Since James doesn't know how to make this happen, he needs your help.
//
//     Task
// You need to return a string that looks like a diamond shape when printed on the screen,
// using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated
// with a newline character (\n).
//
// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print
// a diamond of even or negative size.
//
//     Examples
// A size 3 diamond:
//
//     *
// ***
// *
// ...which would appear as a string of " *\n***\n *\n"
//
// A size 5 diamond:
//
//     *
// ***
// *****
// ***
// *
// ...that is:
//
//     "  *\n ***\n*****\n ***\n  *\n"
// function diamonds(n) {
//     if (n < 1 || n % 2 === 0) {
//         return null
//     }
//     let blank = ' '
//     let diamond = '*'
//     let diam = ''
//     for (let i=1; i<n; i+=2){
//         let spacing = blank.repeat((n-i)/2)
//         diam += spacing + diamond.repeat(i)+ spacing + "\n"
//     }
//     diam += diamond.repeat(n) + diam.split('').reverse().join('') + '\n'
//     return diam
// }
//
// console.log(diamonds(3))
//

//best: - не ясно как работает модуль числа с умножением
//     function diamond (n) {
//         if (n <= 0 || n % 2 === 0) return null
//         str = ''
//         for (let i = 0; i < n; i++) {
//             let len = Math.abs((n-2*i-1)/2)
//             str += ' '.repeat(len)
//             str += '*'.repeat(n-2*len)
//             str += '/n'
//             console.log(len)
//         }
//         return str
//     }
// console.log(diamond(5))
// console.log(Math.abs((5-2)/2))

// function diamond(input) {
//     const blank = " "
//     const full = "*"
//     let output = ""
//
//     if (input%2 === 0) {return null;}
//
//     for (let i=1;i<input;i+=2) {
//         spacing = blank.repeat((input-i)/2)
//         output += spacing + full.repeat(i) + spacing + "\n"
//     }
//
//     output += full.repeat(input) + output.split("").reverse().join("")
//
//     console.log(output)
// }

// =================================================================================
// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
//
//     However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
//
// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
//
//     Don't change the order of the elements that are left.
//
// Examples
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]
//
// small = [1, 2, 3, 4, 5]
//
// function removeSmallest(numbers) {
//     let result = [...numbers]
//     if (numbers.length < 1) {
//         return numbers
//     }
//     let min = numbers.indexOf(Math.min(...numbers))
//     result.splice(min, 1)
//
//     return result
// }
//
// console.log(removeSmallest(small))
//=====================================================================
// Mr. Scrooge has a sum of money 'P' that he wants to invest.
// Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank
// in order for it to amount to a desired sum of money 'D'.
//
//     The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly.
//     After paying taxes 'T' for the year the new sum is re-invested.
//
//     Note to Tax: not the invested principal is taxed, but only the year's accrued interest
//
// Example:
//
//     Let P be the Principal = 1000.00
// Let I be the Interest Rate = 0.05
// Let T be the Tax Rate = 0.18
// Let D be the Desired Sum = 1100.00
//
//
// After 1st Year -->
// P = 1041.00
// After 2nd Year -->
// P = 1083.86
// After 3rd Year -->
// P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.
//
//     Your task is to complete the method provided and return the number of years 'Y' as a whole
//     in order for Mr. Scrooge to get the desired sum.
//
//     Assumption: Assume that Desired Principal 'D' is always greater than the initial principal.
//     However it is best to take into consideration that if Desired Principal 'D' is equal to
//     Principal 'P' this should return 0 Years.

// let p = 1000
// let i = 0.05
// let t = 0.18
// let d = 1200
//
// function disiredSum(principal, interest, tax, desired) {
//     if (principal === desired) {
//         return 0
//     }
//     let y = 0
//     for (let years = 1; principal < desired; years++) {
//
//         principal += principal * interest * (1 - tax)
//         y += 1
//         console.log(principal.toFixed(2))
//     }
//     return  y
// }
//
// console.log(disiredSum(p, i, t, d))

// =========================================================================
// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
//
// let strangeArray = [false,1,0,1,2,0,1,3,"a"]
// function moveZeros(arr) {
//     let newArray = []
//     let zeroArray = []
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i]=== 0 ) {zeroArray.push(arr[i])}
//         if (arr[i]!== 0 ) {newArray.push(arr[i])}
//     }
//     return newArray.concat(zeroArray)
// }
//
// console.log(moveZeros(strangeArray))

//===============================================================================
// This time we want to write calculations using functions and get the results.
// Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//
//     There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations:
// plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));
//
// function zero (func) { return func ? func(0) : 0 }
// function one (func) { return func ? func(1) : 1 }
// function two (func) { return func ? func(2) : 2 }
// function three (func) { return func ? func(3) : 3 }
// function four (func) { return func ? func(4) : 4 }
// function five (func) { return func ? func(5) : 5 }
// function six (func) { return func ? func(6) : 6 }
// function seven (func) { return func ? func(7) : 7 }
// function eight (func) { return func ? func(8) : 8 }
// function nine (func) { return func ? func(9) : 9 }
//
// function plus(b) {return function (a) {return a + b} }
// function minus(b) {return function (a) {return a - b} }
// function times(b) {return function (a) {return a * b} }
// function dividedBy(b) {return function (a) { return Math.floor(a/b)} }
//
// console.log(eight(dividedBy(three())))

//==============================================================
// Given the string representations of two integers, return the string representation of the sum of those integers.
//
//     For example:
//
//     sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
//
// function sumStrings(a, b) {
//     let num1 = BigInt(a)
//     let num2 = BigInt(b)
//     let sum = BigInt(num1+num2)
//
//     return String(sum)
//
// }
// console.log(sumStrings("712569312664357328695151392","8100824045303269669937"))

//=======================================================================
// Основная функция, внутри которой происходят все вычисления. На вход она получает число,
// для которого нужно найти все простые множители
// function PrimeNumber(InputNumber) {
//     // объявляем внутреннюю функцию — она проверяет, простое число ей передали или нет
//     function isPrime(m) {
//         // переменная для цикла
//         var i;
//         // перебираем все числа от 2 до переданного числа
//         for (i = 2; i < m; i++) {
//             // если число делится нацело на любое число из этого диапазона, значит, оно не простое
//             if (m % i === 0) {
//                 // возвращаем признак того, что это не простое число
//                 return false;
//             }
//         }
//         // если мы дошли досюда, значит, ни один делитель не подошёл, поэтому перед нами простое число
//         return true;
//     }
//
//     // переменная для цикла
//     var j;
//     // массив, где будем хранить все найденные простые множители
//     var sequence = [];
//     // точно так же проходим все числа от 2 до введённого числа
//     for (j = 2; j < InputNumber; j++) {
//         // если введённое число делится нацело и делитель — простое число,
//         if (InputNumber % j === 0 && isPrime(j)) {
//             // то добавляем это число в массив с простыми множителями
//             sequence.push(j);
//         }
//     }
//     // в конце основной функции возвращаем её значение — массив с простыми делителями
//     return sequence;
// };
//
// // запускаем программу и смотрим результат
// console.log(PrimeNumber(123456789));
//
// function simpleNumber(num) {
//     function checkNum(check) {
//         for (let i = 2; i < check; i++) {
//             if (check % i === 0) {
//                 return false
//             }
//         }
//         return true
//     }
//
//     let simpleNumbers = []
//     for (let j = 2; j < num; j++) {
//         if (num % j === 0 && checkNum(j)) {
//             simpleNumbers.push(j)
//         }
//     }
//     return simpleNumbers
// }
// console.log(simpleNumber(86240 ))
//=========================================================================
// Consider a sequence u where u is defined as follows:
//
//     The number u(0) = 1 is the first one in u.
//     For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
//     There are no other numbers in u.
//     Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
//
// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...
//
// Task:
//     Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n)
//     of the ordered (with <) sequence u (so, there are no duplicates).
//
// Example:
//     dbl_linear(10) should return 22
//
// Note:
//     Focus attention on efficiency
//
// function dblLinear(n) {
//     let u = [1]
//     let point2 = 0
//     let point3 = 0
//     for (let i=1; i<=n; i++) {
//         u[i] = Math.min(2*u[point2]+1,3*u[point3]+1)
//         if (u[i] === 2*u[point2]+1) {point2++}
//         if (u[i] === 3*u[point3]+1) {point3++}
//
//     }
//    return u[n]
// }
// console.log(dblLinear(100))
//==========================================================================
// let corrections = [1, 12, 7, 1]
// let cells = [8, 4, 6, 2, 2]
//
// function rocket(corrections, cells) {
//     let temp_corrections = [...corrections]
//     let temp_main_thruster = []
//     let temp_sec_thruster = []
//     let main_thruster = new Array(corrections.length)
//     let sec_thruster = new Array(corrections.length)
//     let fullPower = 1
//     let halfPower = 0.5
//     let velocity = 0
//     let mutatedArray = []
//
//     main_thruster.fill(0)
//     sec_thruster.fill(0)
//
//     //========== first step: creating easy population
//     temp_main_thruster.push(...cells)
//     for (let i = 0; i < cells.length; i++) {
//         temp_sec_thruster.push(cells[i] * halfPower)
//     }
//
//     //========== creating mutations
//     function mutant(array1, array2) {
//         for (let a = 0; a < array1.length; a++) {
//             let indexA = array1.indexOf(array1[a])
//             for (let b = 0; b < array2.length; b++) {
//                 let indexB = array2.indexOf(array2[b])
//                 if (indexA !== indexB) {
//                     let mutation = array1[a] + array2[b]
//                     //console.log('temp_main_thruster[a] + temp_sec_thruster[b]:     ' + temp_main_thruster[a] + ' + ' + temp_sec_thruster[b] + ' = ' + mutation)
//                     mutatedArray.push(mutation)
//                 }
//             }
//         }
//     }
//
//
//     //========== looking for match in easy population
//
//     for (let i = 0; i < temp_corrections.length; i++) {
//
//         for (let j = 0; j < temp_main_thruster.length; j++) {
//             if (temp_corrections[i] === temp_main_thruster[j]) { //looking for match for main engine
//                 main_thruster[i] = temp_main_thruster[j]
//                 let index = temp_main_thruster.indexOf(temp_main_thruster[j])
//                 temp_main_thruster.splice(index, 1)
//                 temp_sec_thruster.splice(index, 1)//decrementing cells
//                 temp_corrections[i] = 0
//             }
//             if (temp_corrections[i] === temp_sec_thruster[j]) { //looking for match for sec_engine
//                 sec_thruster[i] = temp_sec_thruster[j]
//                 let index = temp_sec_thruster.indexOf(temp_sec_thruster[j])
//                 temp_sec_thruster.splice(index, 1) //decrementing cells
//                 temp_main_thruster.splice(index, 1)
//                 temp_corrections[i] = 0
//             }
//         }
//     }
//     //========== looking for in mutations of cells
//     mutant(temp_main_thruster, temp_sec_thruster)
//     for (let i = 0; i < temp_corrections.length; i++) {
//         for (let j = 0; j < mutatedArray.length; j++) {
//             if (temp_corrections[i] === mutatedArray[j] && temp_corrections[i] !== 0) {
//                 console.log('mutatedArray has number:' + mutatedArray[j])
//
//                 function mutant2(array1, array2) {
//                     for (let a = 0; a < array1.length; a++) {
//                         let indexA = array1.indexOf(array1[a])
//                         for (let b = 0; b < array2.length; b++) {
//                             let indexB = array2.indexOf(array2[b])
//                             if (indexA !== indexB) {
//                                 let mutation = array1[a] + array2[b]
//                                 if (mutation === temp_corrections[i]) {
//                                     console.log('this number consists of ' + array1[a] + ' and ' + array2[b])
//                                     main_thruster[i] = array1[a]
//                                     sec_thruster[i] = array2[b]
//                                     temp_corrections[i] = 0
//                                     temp_main_thruster.splice(temp_main_thruster.indexOf(array1[a]), 1)
//                                     temp_main_thruster.splice(temp_main_thruster.indexOf(array2[a] * 2), 1)
//                                     temp_sec_thruster.splice(temp_sec_thruster.indexOf(array1[a]), 1)
//                                     temp_sec_thruster.splice(temp_sec_thruster.indexOf(array2[b]), 1)
//
//                                 }
//
//                             }
//                         }
//                     }
//                 }
//
//                 mutant2(temp_main_thruster, temp_sec_thruster)
//
//             }
//
//         }
//     }
//
// // ========== checking if corrections are needed
//     if (temp_corrections.reduce((a, b) => a + b) > 0) {
//         for (let i = 0; i < temp_corrections.length; i++) {
//             for (let j = 0; j < temp_main_thruster.length; j++) {
//                 if (temp_corrections[i] > 0 && temp_corrections[i] >= temp_main_thruster[j]) {
//                     main_thruster[i] = temp_main_thruster[j]
//                     temp_main_thruster.splice(temp_main_thruster.indexOf(temp_main_thruster[j]))
//                     temp_sec_thruster.splice(temp_sec_thruster.indexOf(temp_main_thruster[j]*halfPower))
//                     temp_corrections[i] = 0
//                 }
//             }
//         }
//     }
//     velocity = main_thruster.reduce((a,b) =>a+b) + sec_thruster.reduce((a,b) => a+b)
//
//     console.log('corrections:')
//     console.log(corrections)
//
//     console.log('temp_corrections:')
//     console.log(temp_corrections)
//     console.log('temp_main_thruster:')
//     console.log(temp_main_thruster)
//     console.log('temp_sec_thruster:')
//     console.log(temp_sec_thruster)
//     console.log('cells on start:')
//     console.log(cells)
//     console.log('main_thruster:')
//     console.log(main_thruster)
//     console.log('sec_thruster:')
//     console.log(sec_thruster)
//     console.log('delta velocity= ' + velocity)
//     console.log('mutatedArray=')
//     console.log(mutatedArray)
//
// }
//
// rocket(corrections, cells)
//=============================================================================
// перебор всех вариантов
// let array1 = [2,1,3]
// let array2 = [4,5,6]
// let result = []
// for (let i=0; i<array1.length; i++) {
//     for(let j = 0; j<array2.length; j++) {
//         console.log(array1[i] + ' + ' + array2[j] )
//         result.push(array1[i] + array2[j])
//     }
//
//     console.log(result)
// }


//================================================================================================================
// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber.
// We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse
// is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw,
// when Robby entered it.
//
// The keypad has the following layout:
//
// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually
// be another adjacent digit (horizontally or vertically, but not diagonally). E.g.
// instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.
//
// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs,
// they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.
//
// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits
//
// Can you help us to find all those variations? It would be nice to have a function, that returns an array
// (or a list in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits.
// We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs,
// the observed one and also the results, must be strings, because of potentially leading '0's.
// We already prepared some test cases for you.
//
//
//
// let observed = 1357

// function getPins(observed) {
//     let neighbors = {
//         '0': ['8'],
//         '1': ['2', '4'],
//         '2': ['1', '3', '5'],
//         '3': ['2', '6'],
//         '4': ['1', '5', '7'],
//         '5': ['2', '4', '6', '8'],
//         '6': ['3', '5', '9'],
//         '7': ['4', '8'],
//         '8': ['5', '7', '9', '0'],
//         '9': ['6', '8']
//     }
//     let strDigits = observed.toString().split('')
//     let combos = []
//
//     //depth first - обход в глубину
//     function getCombos(digits, idx, curCombo) {
//         //get possible candidates
//         let curDigit = digits[idx]
//         let candidates = new Set(neighbors[curDigit])
//         candidates.add(curDigit)
//
//         console.log(digits, idx, curCombo, candidates, curDigit)
//
//
//         candidates.forEach(idx == digits.length - 1 ? reachedEnd : goDeeper)
//
//         function reachedEnd(candidate) {
//             combos.push(curCombo + candidate)
//         }
//
//         function goDeeper(candidate) {
//             getCombos(digits, idx + 1, curCombo + candidate)
//         }
//     }
//
//     getCombos(strDigits, 0, '')
//     return combos
// }
//
// console.log(getPins(observed))

// =================================================================== pin test
// let pinCode = 1357
// function pin(observed) {
//     let neighbors = {
//         '0': ['8'],
//         '1': ['2', '4'],
//         '2': ['1', '3', '5'],
//         '3': ['2', '6'],
//         '4': ['1', '5', '7'],
//         '5': ['2', '4', '6', '8'],
//         '6': ['3', '5', '9'],
//         '7': ['4', '8'],
//         '8': ['5', '7', '9', '0'],
//         '9': ['6', '8']
//     }
//     let variants = []
//     let strPin = observed.toString().split('')
//
//     function getVariants(digit, index, currentCombination) {
//         let currenDigit = digit[index]
//         let candidates = new Set (neighbors[currenDigit])
//         candidates.add(currenDigit)
//         // console.log(digit,index,currenDigit,candidates)
//
//         candidates.forEach(index == strPin.length-1 ? goToEnd : goDeeper)
//
//         function goToEnd(candidate) {
//             variants.push(currentCombination+candidate)
//         }
//         function goDeeper(candidate) {
//             getVariants(strPin, index+1, currentCombination+candidate)
//         }
//     }
//     getVariants(strPin,0,'')
//     console.log(variants)
// }
// pin(pinCode)

//=========== лучшее решение ПИН кода
// function getPINs(observed) {
//     return observed.split('')
//         .map( t => ({
//             '0': [ '0', '8' ],
//             '1': [ '1', '2', '4' ],
//             '2': [ '1', '2', '3', '5' ],
//             '3': [ '2', '3', '6' ],
//             '4': [ '1', '4', '5', '7' ],
//             '5': [ '2', '4', '5', '6', '8' ],
//             '6': [ '3', '5', '6', '9' ],
//             '7': [ '4', '7', '8' ],
//             '8': [ '5', '7', '8', '9', '0' ],
//             '9': [ '6', '8', '9' ]
//         }[t]))
//         .reduce((pre, cur)=> [].concat.apply([], pre.map(t => cur.map(g => t + g))));
// }
// getPINs(1357)


// describe('example tests', function() {
//     var expectations = {
//         "8": ["5", "7", "8", "9", "0"],
//         "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
//         "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
//     };
//
//     for (var pin in expectations) {
//         Test.assertSimilar(getPINs(pin).sort(), expectations[pin].sort(), 'PIN: ' + pin);
//     }
// });
// ===========================================================================================
// Write a function that counts how many different ways you can make change for an amount of money,
// given an array of coin denominations. For example, there are 3 ways to give change for 4 if you
// have coins with denomination 1 and 2:
//
// 1+1+1+1, 1+1+2, 2+2.
// The order of coins does not matter:
//
//     1+1+2 == 2+1+1
// Also, assume that you have an infinite amount of coins.
//
//     Your function should take an amount to change and an array of unique denominations for the coins:
//
//     countChange(4, [1,2]) // => 3
// countChange(10, [5,2,3]) // => 4
// countChange(11, [5,7]) //  => 0




//========== best:
//
// let result = []
// let countChange = function(money, coins) {
//     if(money < 0 || coins.length === 0)
//         return 0
//     else if(money === 0)
//         return 1
//     else
//
//         return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
// }
// countChange(4,[1,2])
// console.log(result)

// let coins = [1,2]
//     let countChange = (amount, coins) => {
//         let [coin, ...rest] = coins
//         if (!coin)       return 0
//         if (amount <  0) return 0
//         if (amount == 0) return 1
//         return countChange(amount - coin, coins) +
//             countChange(amount, rest)
//     }
//     console.log(countChange(4,coins))



   // /* Dynamic Programming javascript implementation of Coin
  //  Change problem */

//     function countWays(S , m , n)
//     {
//         //Time complexity of this function: O(mn)
//         //Space Complexity of this function: O(n)
//
//         // table[i] will be storing the number of solutions
//         // for value i. We need n+1 rows as the table is
//         // constructed in bottom up manner using the base
//         // case (n = 0)
//         // Initialize all table values as 0
//         //O(n)
//         let table = Array(n+1).fill(0);
//
//
//         // Base case (If given value is 0)
//         table[0] = 1;
//
//         // Pick all coins one by one and update the table
//         // values after the index greater than or equal to
//         // the value of the picked coin
//         for (let i=0; i<m; i++)
//             for (let j=S[i]; j<=n; j++)
//                 table[j] += table[j-S[i]];
//
//         return table[n];
//     }
//
// // Driver Function to test above function
// let coins = [1, 2];
// let m = coins.length;
// let n = 4;
// console.log(countWays(coins, m, n));
//  ============================================= для Stepic
//Файл STDIN (стандартный ввод) по умолчанию "связан" с клавиатурой - все что вы печатаете на клавиатуре,
// попадает туда. Файл STDOUT (стандартный вывод) по умолчанию "связан" с монитором - все, что вы запишите
// в него, вы увидите на экране. Файл STDERR (стандартный вывод ошибок) - это копия STDOUT.
// let stdin = process.openStdin();
// stdin.on('data', function(data){
//     var n = data.toString().split(" ");
//
//     // 3 СТРОЧКИ ВЫШЕ НУЖНО ДЛЯ ПЕРЕДАЧИ ВВОДА В ПЕРЕМЕННУЮ -> n
//     function fibo(n) {
//         let fibonacci = [0,1,1,2,3,5]
//         if (n<0) {return  0}
//         if (n>0 && n<=6) {return fibonacci[n-1]}
//         if (n>6 && n<=40) {
//             for (let i=5; i<n; i++) {
//                 fibonacci[i]=(fibonacci[i-1]+fibonacci[i-2])
//             }
//         }
//         if (n>40) {return  0}
//         return fibonacci[n-1]
//     }
//
//     console.log(fibo(n))
// });

// function fibo(n) {
//     let fibonacci = [0,1,1,2,3,5,8]
//     if (n<0) {return  0}
//     if (n>0 && n<=6) {return fibonacci[n]}
//     if (n>6 && n<=40) {
//         for (let i=6; i<=n; i++) {
//             fibonacci[i]=(fibonacci[i-1]+fibonacci[i-2])
//         }
//     }
//     if (n>Math.pow(10,7)) {return  0}
//     console.log(fibonacci)
//     return fibonacci[n]
// }
// console.log(fibo(20))
// // считаем только последние цифры фибоначчи
// function fiboLastNum(n) {
//     let fibonacci = [0,1,1,2,3,5,8,3,1]
//     if (n<0) {return  0}
//     if (n>0 && n<=8) {return fibonacci[n]}
//     if (n>8 && n<=Math.pow(10,7)) {
//         for (let i=9; i<=n; i++) {
//             fibonacci[i]=(fibonacci[i-1]+fibonacci[i-2]) %  10
//         }
//     }
//     if (n>Math.pow(10,7)) {return  0}
//
//     return fibonacci[n]
// }
// console.log(fiboLastNum(841645))

// возведение в степень
// function exponentiation(num1, num2) {
//     return num1 * Math.pow(2,num2)
// }
// console.log(exponentiation (0.000001,50))