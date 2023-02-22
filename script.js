const textToTypeContainer = document.querySelector('#textToTypeContainer')
let referenceTextArray = []

fetch('https://flipsum-ipsum.net/api/icw/v1/generate?ipsum=recipe-ipsum-text-generator&start_with_fixed=0&paragraphs=4').then((response) => {
    return response.json()
}).then((data) => {
    data.forEach((textOutput) => {
        //the line below replaces any accented character by the matching non-accented character
        //e.g. "é" becomes "e"
        textOutput = textOutput.normalize("NFD").replace(/\p{Diacritic}/gu, "")
        wordsArray =  textOutput.split(' ')
        referenceTextArray = referenceTextArray.concat(wordsArray)
    }) 
    
    let count = 0
    let stringForHtml = '<p class="textParagraph">'
    referenceTextArray.forEach((word) => {
        stringForHtml = stringForHtml + '<span id="' + count + '"> ' + word + ' </span>'
        count++
    })
    stringForHtml += '</p>'
    textToTypeContainer.innerHTML += stringForHtml
})

let wordIndexCount = -1
let numberValidWords = 0

let textInput = document.querySelector('#textInput')

textInput.addEventListener('keyup', event => {
    if(event.code === 'Space') {
        let textValue = textInput.value
        let textValueWithoutSpace = textValue.slice(0, textValue.length - 1);
        wordIndexCount++
        wordIsValid = (textValueWithoutSpace === referenceTextArray[wordIndexCount])

        if(wordIsValid) {
            numberValidWords++ // for later use
            textInput.value = ''
        } else{
            textInput.value = ''
        }
        
        console.log("Word index: "+ wordIndexCount)
        console.log("Number of valid words: "+ numberValidWords)
    }
})






