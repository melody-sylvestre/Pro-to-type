const textsToCopyContainer = document.querySelector('#textsToCopyContainer')

function createParagraphs(name) {
    let div = document.createElement('div');
    div.innerHTML = name;
    return div;
}

fetch('https://flipsum-ipsum.net/api/icw/v1/generate?ipsum=recipe-ipsum-text-generator&start_with_fixed=0&paragraphs=4').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data) 
    let paragraphOne = data[0].split(' ')
    let paragraphTwo = data[1].split(' ')
    let paragraphThree = data[2].split(' ')
    let paragraphFour = data[3].split(' ')
    const paragraphs = [paragraphOne, paragraphTwo, paragraphThree, paragraphFour]

    console.log(paragraphOne)
    let referenceTextArray = paragraphOne.concat(paragraphTwo, paragraphThree, paragraphFour)


    console.log(referenceTextArray)

    console.log(referenceTextArray[0])

    let count = 0
    for(let indexParagraph = 0; indexParagraph< 4; indexParagraph++) {
        let stringToPrint = '<p id="' + indexParagraph + '">'
    
        for(let indexWord = 0; indexWord < paragraphs[indexParagraph].length; indexWord++) {
            stringToPrint = stringToPrint + '<span id="' + count + '"> ' + paragraphs[indexParagraph][indexWord] + ' </span>'
            count++
        }
        stringToPrint += '</p>'
        textsToCopyContainer.innerHTML += stringToPrint   
    }
})
