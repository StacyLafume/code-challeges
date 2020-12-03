
// const createHash = array => {
//     const hash = {}
//     for (let element of array) {
//         hash[element] ? hash[element]++ : hash[element] = 1
//     }
//     return hash
// }

// const topThreeWords = (text) => {

//     const resultArray = [];
//     const textArray = text.split(/[^A-Z0-9']/ig).filter(s => s !== '')
//     const textHash = createHash(textArray);
//     const topValues = Object.values(textHash).sort((a, b) => b - a).slice(0, 3)
//     console.log('topValues', topValues)
//     console.log('textHash', textHash)
//     console.log('textArray', textArray)
//     for (let text in textHash) {
//         topValues.forEach((position, index)=> resultArray.splice(topValues[index], 0, text))
//     }
//     // for (let text in textHash) {
//     //     // for (let i = 0; i < topValues.length; i++) {
//     //     //     if (textHash[text] === topValues[i]) {
//     //     //         resultArray[0] =
//     //     //     }


//     //     //}
//     // }
//     return resultArray
// }


// console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"), ['e', 'd', 'a'])

// console.log(topThreeWords("a a c b b"), ['a', 'b', 'c'])

// console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"), ['e', 'ddd', 'aa'])

// console.log(topThreeWords("  //wont won't won't "), ["won't", "wont"])

// console.log(topThreeWords("  , e   .. "), ["e"])

// console.log(topThreeWords("  ...  "), [])

// console.log(topThreeWords("  '  "), [])

// console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.`), ['a', 'of', 'on'])

//<---------------------------------///-------------------------------------------------->

//  Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]


// {P - string of characters }
//{E - 
    // top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
    // # => ["e", "ddd", "aa"]
    // top_3_words("  //wont won't won't")
    // # => ["won't", "wont"]
//}
// {R - array of the top-3 most occurring words, in descending order. all the words in the result should be lower cased.top-2 or top-1 words should be returned. an empty array should be returned if a text contains no words. }
// {P - 
// remove spaces text.split(/[^A-Z0-9']/ig).filter(s => s !== '')
// lower case all of the words 
// 
//}

//Hints: helper functions includes:  charMap, for remove duplicates, largest number  
const createHash = (array) => {
    const hash = {};
    for (let element of array) {
        hash[element.toLowerCase()] ? hash[element.toLowerCase()]++ : hash[element.toLowerCase()] = 1;
    }
    return hash;
}

const removeDuplicates = (array) => {
    const set = [...new Set(array)]
    return set
}

const maxValue = hash =>{
    const max = Math.max(...Object.values(hash))
    for (let char in hash){
        if (hash[char] === max) return char
    }
}

const topThreeWords = (text) => {

    const result = []

    const textArray = text.split(/[^A-Z0-9']/ig).filter(s => s !== '');

    const textHash = createHash( textArray );

    console.log('textArray', textArray)

    if(textArray.length < 2) return textArray[0] === '\'' ? [] : textArray

    if (textArray.length === 3) return removeDuplicates(textArray).reverse()

    for (let i = 0; i < 3; i++){
        const largestChar = maxValue(textHash)
        result.push(largestChar)
        delete  textHash[largestChar]
    }

    return result
}

// console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")) // ['e', 'd', 'a']

// console.log(topThreeWords("a a c b b"), ['a', 'b', 'c'])

// console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"), ['e', 'ddd', 'aa'])

console.log(topThreeWords("  //wont won't won't "), ["won't", "wont"]) 

console.log(topThreeWords("  , e   .. "), ["e"])

console.log(topThreeWords("  ...  "), [])

console.log(topThreeWords("  '  "), [])

 //const noDuplicatesArray = removeDuplicates(textArray)
    // noDuplicatesArray.forEach((element, index) => )
    //console.log('textHash', textHash)
    // console.log('textArray', textArray)
    // console.log('noDuplicatesArray',noDuplicatesArray)