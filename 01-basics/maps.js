// it is known for storing unique value 

const map = new Map()

map.set('IN', "India")
map.set('US', "United States of America")

// console.log(map);
//  example of "for of " loop

// for (const [element, value] of map) {
//     console.log(`${element} => ${value}`);
    
// }

const myObject = {
    'game1': 'NFS',
    'game2': 'SPiderman'
}

// for (const item of myObject) {
//     console.log(item);
    
// }


// example of "for in loop"
// const myObject2 = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby"
// }

// for (const key in myObject2) {
//     console.log(`${key} shortcut is for ${myObject2[key]}`)
    
// }

// const programming = ['js', 'rb', 'py', 'java', 'cpp']

// for (const key in programming) {
//     console.log(programming[key]);
    
// }

const map2 = new Map()

map.set('IN', "India")
map.set('US', "United States of America")

for (const key in map2) {
    console.log(key);
    
}