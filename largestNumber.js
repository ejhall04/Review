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