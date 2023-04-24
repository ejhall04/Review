function largestNumber() {
    let numbers = document.getElementById("userInput")
    let list = numbers.value
    const array = list.split(" ")
    let max = 0
    for (i = 0; i < array.length; i++){
        parseInt(array[i])
        if (array[i] > max){
            max = array[i]
        }
    }
    console.log(max)
}
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.weather.gov/glossary')
xhr.send()
xhr.responseType = 'json'
xhr.onload = function () {
    let res = xhr.response
    console.log(res)}
