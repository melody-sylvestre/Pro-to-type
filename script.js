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

    console.log(paragraphOne)
    let referenceTextArray = paragraphOne.concat(paragraphTwo, paragraphThree, paragraphFour)

    console.log(referenceTextArray)

    console.log(referenceTextArray[0])

    for(i = 0; i < 4; i++) {
        //createlement
        let count = 0
        for(j = 0;j <= paragraphOne.length; j++) {
            
            count++
        }
    }


    for(const[indexParagraph, paragraph] of data.entries()) {
        let stringToPrint = '<p id="' + indexParagraph + '">'
        const words = paragraph.split() 
        for(const[indexWord, word] of words.entries()) {
            stringToPrint = stringToPrint + '<span id="' + indexWord + '">' + word + '</span>'
            
        } 
        stringToPrint += '</p>'
        textsToCopyContainer.innerHTML += stringToPrint
    }
    // data.forEach((paragraph) => {
    //     let splitParagraph = paragraph.split(' ')
    //     splitParagraph.forEach((word) => {

    //     })
    })


//split each string
//data[0].split

//i=0; i<4; i++ {

 // innerHTML  "<p id" + i
//
//(j =0 )
 // <span j+i; 
