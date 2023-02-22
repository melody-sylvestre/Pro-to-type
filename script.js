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




