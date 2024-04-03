function addExpens(list, newList){
    return [...list, newList];
}

function calculateExpenses(list){
    var total = 0
    for (let i = 0; i < list.length; i++) {
        total += list[i].amount;
    }

    return total;
}

// export { addExpens, calculateExpeses }
module.exports = { addExpens, calculateExpenses }
