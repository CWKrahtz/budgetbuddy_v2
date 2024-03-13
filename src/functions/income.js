
//Determin Tax Bracket
function calculateTax(list) {
    var tempS = list.salary
    var tempTax = 0;

    console.log(tempS)

    if (tempS < 237100) {
        list.bracket = 18
        tempTax = list.salary * (list.bracket / 100)
    }
    else if (tempS < 370500) {
        list.bracket = 26
        tempTax = list.salary * (list.bracket / 100)
    } 
    else if (tempS < 370500) {
        list.bracket = 31
        tempTax = list.salary * (list.bracket / 100)
    }
    else if (tempS < 673000) {
        list.bracket = 36
        tempTax = list.salary * (list.bracket / 100)
    }
    else if (tempS < 857900) {
        list.bracket = 39
        tempTax = list.salary * (100 / list.bracket)
    }
    else if (tempS < 1817000) {
        list.bracket = 41
        tempTax = list.salary * (100 * list.bracket)
    } 
    else {
        list.bracket = 45
        tempTax = list.salary * (100 * list.bracket)
    }

    list.taxAmount = parseInt(tempTax.toFixed(2))

    return list;
}

//Add income to array
function addIncome(list, newItem) {
    return [...list, newItem]; //adding new item to list and terurning the new list
}

//Calculate income Total
function calculateIncome(list) {
    var total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i].salary;
    }
    return total;
}

export { addIncome, calculateIncome, calculateTax } //for fron-end
// module.exports = { addIncome, calculateIncome, calculateTax } // for back-end