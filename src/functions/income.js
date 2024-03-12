// const sumOf = (numberA, numberB) => {
//     return numberA + numberB
// }

// module.exports =  sumOf

function addIncome(list, newItem){
    return [...list, newItem]; //adding new item to list and terurning the new list
}

module.exports = { addIncome }