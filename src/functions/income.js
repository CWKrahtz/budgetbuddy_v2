// const sumOf = (numberA, numberB) => {
//     return numberA + numberB
// }

// module.exports =  sumOf

function addIncome(list, newItem) {
    return [...list, newItem]; //adding new item to list and terurning the new list
}

function calculateIncome(list) {
    var total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i].salary;
    }
    return total;
}

module.exports = { addIncome, calculateIncome }