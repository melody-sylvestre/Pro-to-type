const textsToCopyContainer = document.querySelector('#textsToCopyContainer')
const paragraphs = []

fetch('https://flipsum-ipsum.net/api/icw/v1/generate?ipsum=recipe-ipsum-text-generator&start_with_fixed=0&paragraphs=4').then((response) => {
    return response.json()
}).then((data) => {
    data.forEach((textOutput) => {
        paragraphs.push(textOutput.split(' '))
    }) 
    
    const referenceTextArray = paragraphs[0].concat(paragraphs[1], paragraphs[2], paragraphs[3]) // for use in future stories
    let count = 0
    paragraphs.forEach((paragraph, indexParagraph) => {
        let stringToPrint = '<p id="paragraph' + indexParagraph + '">'
        
        paragraph.forEach((word) => {
            stringToPrint = stringToPrint + '<span id="' + count + '"> ' + word + ' </span>'
            count++
        })
        stringToPrint += '</p>'
        textsToCopyContainer.innerHTML += stringToPrint
    })
})




