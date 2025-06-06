
let amount = document.getElementsByClassName('amount-of-ingredient');
const portions = document.getElementById('portions');
let portionsLastValue = 2;

console.log(portions.value);

let multiplyAmount = () => {
    resetAmounts();
    
    for (let i = 0; i < amount.length; i++) {
        amount[i].innerHTML = parseFloat(amount[i].innerHTML) * portions.value;
        console.log(amount[i].innerHTML);
        console.log(portions.value);
    }
    portionsLastValue = portions.value;
    return portionsLastValue;
}

let resetAmounts = () => {
    for (let i = 0; i < amount.length; i++) {
        amount[i].innerHTML = parseFloat(amount[i].innerHTML) / portionsLastValue;
        console.log(amount[i].innerHTML);
    }
}