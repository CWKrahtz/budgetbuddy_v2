
//Determin Tax Bracket
function calculateTax(list) {
    var tempS = list.salary
    var tempTax = 0;

    // console.log(tempS)

    if (tempS < 237100) {
        list.bracket = 18
        tempTax = list.salary * (list.bracket / 100)
    }
    else if (tempS < 370500) {
        list.bracket = 26
        tempTax = list.salary * (list.bracket / 100)
    } 
    else if (tempS < 512800 ) {
        list.bracket = 31
        tempTax = list.salary * (list.bracket / 100)
    }
    else if (tempS < 673000) {
        list.bracket = 36
        tempTax = list.salary * (list.bracket / 100)
    }
    else if (tempS < 857900) {
        list.bracket = 39
        tempTax = list.salary * (list.bracket / 100)
    }
    else if (tempS < 1817000) {
        list.bracket = 41
        tempTax = list.salary * (list.bracket / 100)
    } 
    else {
        list.bracket = 45
        tempTax = list.salary * (list.bracket / 100)
    }

    list.taxAmount = parseInt(tempTax.toFixed(2))

    return list;
}

//Add income to array
function addIncome(list, newItem) {
    // console.log(list)
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
function calculateTotalTax(list) {
    var total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i].taxAmount;
    }
    return total;
}

function calculateIncomeAfterTax(list){
    // console.log(list)
    var totalSalary = calculateIncome(list);
    var totalTax = calculateTotalTax(list);
    var total = totalSalary - totalTax;

    return total;
}

function calculateSave(list) {
    // console.log(list)
    var total = 0
    for (let i = 0; i < list.length; i++) {
        total += list[i].saves;
    }

    return total;
}


export { addIncome, calculateIncome, calculateTax, calculateIncomeAfterTax, calculateSave, calculateTotalTax } //for fron-end
// module.exports = { addIncome, calculateIncome, calculateTax, calculateTotalTax, calculateSave, calculateIncomeAfterTax } // for back-end