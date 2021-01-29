// array of mixed values
// return number
// nums that are string need to be changed to type numbers 
//['2',3,'5'] => 10
// [1,2,3,'a',3]
// [] 
// all positive numbers 
// reduce method +acc + +cv 

const sumAll = array => array.reduce((acc, cv) => +acc + +cv, 0)


console.log(sumAll(['2',3,'5'])) //=> 10
console.log(sumAll(['3',6,'100'])) //=> 109
console.log(sumAll(['1',10,'2'])) //=> 13