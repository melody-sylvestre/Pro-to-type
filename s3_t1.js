const textsToCopyContainer = document.querySelector('#textsToTypeContainer')
const paragraphs = []

fetch('https://flipsum-ipsum.net/api/icw/v1/generate?ipsum=recipe-ipsum-text-generator&start_with_fixed=0&paragraphs=4').then((response) => {
    return response.json()
}).then((data) => {
    data.forEach((textOutput) => {
        //the line below replaces any accented character by the matching non-accented character
        //e.g. "é" becomes "e"
        textOutput = textOutput.normalize("NFD").replace(/\p{Diacritic}/gu, "")
        paragraphWordsArray =  textOutput.split(' ')
        paragraphs.push(paragraphWordsArray)
    }) 
    
    const referenceTextArray = paragraphs[0].concat(paragraphs[1], paragraphs[2], paragraphs[3]) // for use in future stories
    let count = 0
    paragraphs.forEach((paragraph, indexParagraph) => {
        let stringForHtml = '<p class="textParagraph" id="paragraph' + indexParagraph + '">'
        
        paragraph.forEach((word) => {
            stringForHtml = stringForHtml + '<span id="' + count + '"> ' + word + ' </span>'
            count++
        })
        stringForHtml += '</p>'
        textsToCopyContainer.innerHTML += stringForHtml
    })
})

let wordIndexCount = -1
let numberValidWords = 0

const textInput = document.querySelector('#textInput')

textInput.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      console.log('Space pressed')
      wordIndexCount++
      console.log("wordIndexCount: " + wordIndexCount) //debug ref
    //wordToChange = document.querySelector("#"+wordIndexCount)
      if(wordFromPlayer.value === referenceArray[wordIndexCount]) {
        numberValidWords++ // for later use
        wordFromPlayer.value = ''
        // wordToChange.ClassList.add("valid") 
      } else{
        wordFromPlayer.value = ''
        // wordToChange.ClassList.add("invalid")
      }
    }
})

// event listener for space bar { 
//      count++
//      wordFromPlayer = document.query("input")
//      if(wordFromPlayer.value === referenceArray[count]) 
//      if(wordIsValid){
 //         numberValidWords++} // for later                 
//      wordFromPlayer.value = ''
        // wordToChange = document.querySelector("#"+count)
        // wordToChange.ClassList.add("valid")    
//}