// document.querySelector('button').onclick = palindrom;
document.querySelector('.b-1').addEventListener('click', palindrom)

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