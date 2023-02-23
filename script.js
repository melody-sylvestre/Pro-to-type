const textToTypeContainer = document.querySelector('#textToTypeContainer')
let textInput = document.querySelector('#textInput')
let referenceTextArray = []
let wordIsValid = false
let wordIndexCount = -1
let numberOfValidWords = 0
let scrollPixels = 0
let totalLengthOfWords = 0
let upcomingWordLength = 0

fetch('https://flipsum-ipsum.net/api/icw/v1/generate?ipsum=recipe-ipsum-text-generator&start_with_fixed=0&paragraphs=4').then((response) => {
    return response.json()
}).then((data) => {
    data.forEach((textOutput) => {
        //the line below replaces any accented character by the matching non-accented character
        //e.g. "é" becomes "e"
        textOutput = textOutput.normalize("NFD").replace(/\p{Diacritic}/gu, "")
        wordsArray = textOutput.split(' ')
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
    let upcomingWord = document.getElementById(0)
    upcomingWord.style.color = ("#cc7a00")
    upcomingWordLength = upcomingWord.clientWidth
    totalLengthOfWords += upcomingWordLength
})



textInput.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        let textValue = textInput.value
        let textValueWithoutSpace = textValue.slice(0, textValue.length - 1);
        wordIndexCount++
        wordIsValid = (textValueWithoutSpace === referenceTextArray[wordIndexCount])

        let wordJustFinished = document.getElementById(wordIndexCount)
        if (wordIsValid) {
            numberOfValidWords++ // for later use
            textInput.value = ''
            wordJustFinished.style.color = ("green")
        } else {
            textInput.value = ''
            wordJustFinished.style.color = ("red")
        }

        let upcomingWord = document.getElementById(wordIndexCount + 1)
        
        upcomingWordLength = document.getElementById(wordIndexCount + 1).clientWidth 
        totalLengthOfWords += upcomingWordLength

        let textParagraphLength = document.querySelector(".textParagraph").clientWidth
        if (totalLengthOfWords >= textParagraphLength) {
            let lineHeight = upcomingWord.clientHeight
            totalLengthOfWords = 0
            totalLengthOfWords += upcomingWordLength
            textToTypeContainer.scroll({
                top: scrollPixels += lineHeight,
                behavior: 'smooth'
            })
        
        }
        upcomingWord.style.color = ("#cc7a00")

    }
})



