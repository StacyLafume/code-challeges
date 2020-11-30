// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
function longestWord(sen) {
    const createHash = array => {
        const words = {};
        array.forEach(element => {
            words[element] = element.length
        });
        return words
    }
    const wordArray = sen.split(' ')
    const wordHash = createHash(wordArray)
    const largest = Math.max(...Object.values(wordHash))

    for (let word in wordHash) {
        if (wordHash[word] === largest) return word
    }
} 


console.log(longestWord('Hi there, my name is Brad'))