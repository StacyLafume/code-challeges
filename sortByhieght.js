// SORT BY HEIGHT
// Some people are standing in a row in a park. 
//There are trees between them which cannot be moved. 
//Your task is to rearrange the people by their heights 
//in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

// sort from lowest to highest hight

const sortByHeight = array => {
    // creat two empty arrays 
    // positionArray holds the position of the trees
    // valesArray the values of the other elements
    const positionArray = [];
    const valesArray = [];
    // loop through inputted array
    for(let i = 0; i< array.length; i++){
        // if the element is equal to -1
        if(array[i] === -1){
            // push the index to positionArray
            positionArray.push(i)
        }else{
            //if not equal to -1 than push element on to valesArray
            valesArray.push(array[i])
        }
    }
    // sort valesArray
    const SortedArray = valesArray.sort((a,b) => a - b);
      //  for each element in positionArray 
      //splice sortedArray at index of the tree position and add -1
    positionArray.forEach((position, i) => SortedArray.splice(positionArray[i], 0, -1));
    // return the sorted array.
    return SortedArray;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))
