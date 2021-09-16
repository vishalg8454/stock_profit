const inputInitial = document.querySelector('#inputInitial');
const inputQuantity = document.querySelector('#inputQuantity');
const inputCurrent = document.querySelector('#inputCurrent');
const button = document.querySelector('#btn');
const outputText = document.querySelector('#para');

button.addEventListener("click", clickHandler);

function clickHandler() {
    var initialPrice = Number(inputInitial.value);
    var quantity = Number(inputQuantity.value);
    var currentPrice = Number(inputCurrent.value);
    console.log("ee")
    if (initialPrice <= 0 || quantity <= 0 || currentPrice <= 0) {
        showMessage("Enter valid value in all fields!");
    } else if (initialPrice > currentPrice) {
        showMessage("Your are at ₹" +
            calculateProfitLoss(initialPrice, currentPrice, quantity) +
            " loss 📉 and your loss percentage is " +
            calculateProfitLossPercentage(initialPrice, currentPrice, quantity));
    } else if (currentPrice > initialPrice) {
        showMessage("Your are at ₹" +
            calculateProfitLoss(initialPrice, currentPrice, quantity) +
            " profit 📈 and your profit percentage is " +
            calculateProfitLossPercentage(initialPrice, currentPrice, quantity));
    } else {
        showMessage("समय बदल गया लेकिन आपके स्टॉक नहीं|")
    }
    // 
}
function showMessage(msg) {
    outputText.innerText = msg;
}
function calculateProfitLoss(initial, final, quantity) {
    return Math.abs((initial - final) * quantity);
}
function calculateProfitLossPercentage(initial, final, quantity) {
    var profitLoss = calculateProfitLoss(initial, final, quantity);
    return (profitLoss / initial) * 100;
}