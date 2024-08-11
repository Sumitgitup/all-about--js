//  forEach do not "return" anything so we use "filter"
//const coding = ["js", "ruby", "java", "pyhton"]

// const result = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log(result);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnums = myNums.filter((num) => {return num > 5})

// console.log(newnums);

// now using map() 
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = num.map((item) => { return item + 10})

console.log(newNums);







