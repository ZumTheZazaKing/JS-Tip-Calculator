function reloadPage() {

    window.location.reload();
    
}

function calculateTip(){

    let inputField = document.getElementById('userBill');

    let bill = document.getElementById("userBill").value;

    let title = document.getElementById("title");

    let desc = document.getElementById('desc');

    let question = document.getElementById('question');

    let calculateButton = document.getElementById('calculateTip');

    let results = document.getElementById('results');

    let backButton = document.getElementById('reload');

    inputField.classList.add('hide');

    title.classList.add('hide');

    desc.classList.add('hide');

    question.classList.add('hide');

    calculateButton.classList.add('hide');

    results.classList.remove('hide');

    backButton.classList.remove('hide');

    bill = bill / 10;

    bill = bill * 1.5;

    bill = bill.toFixed(2);

    if(bill == 00){

        alert('Please enter the bill');

        window.location.reload();

    } else {

        results.innerHTML = 'You should tip about ' + bill + '!';

    }


}