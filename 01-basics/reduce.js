// Using reduce function 
// const myNums = [1, 2, 3]

// const reult = myNums.reduce((acc, currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
    
//     return acc + currVal
// }, 0)

// console.log(reult)


const shoppingCart = [
    {
        item: 'js course',
        price: 3999
    },
    {
        item: 'web dev course',
        price: 3999
    },
    {
        item: 'Web 3 course',
        price: 3999
    },
    {
        item: 'Mobile Dev course',
        price: 3999
    }
]
const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)

console.log(priceToPay);

