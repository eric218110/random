let inputInitial = document.querySelector('#input-initial');
let inputFinish = document.querySelector('#input-finish');
let buttonCauculator = document.querySelector('#btn-submit');
let resultInitial = document.querySelector('#result-initial');
let resultFinish = document.querySelector('#result-finish');
let resultNumber = document.querySelector('#result-random');
let btnClear = document.querySelector('#btn-clear')

function onlynumber(evt) {
    const theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

buttonCauculator.addEventListener('click', () => {
    validateInputs(inputInitial, inputFinish);
});

function validateInputs(initial, finish) {
    if (initial.value == '' || finish.value == '') {
        showError(true)
        return false;
    } else {
        if (initial.value > finish.value) {
            showError(true)
            return false;
        } else {
            showError(false)
            main();
        }
    }
}

function main() {
    clearResultFileds();
    createResults(inputInitial, true);
    createResults(inputFinish, false);
    generateNum(inputInitial.value, inputFinish.value);
}

function showError(type) {
    let error = document.querySelector('#error');
    (type) ? error.classList.add('show'): error.classList.remove('show');

}

btnClear.addEventListener('click', () => {
    clearInputs();
    clearResultFileds();
})

function clearInputs() {
    inputInitial.value = '';
    inputFinish.value = '';
}

function clearResultFileds() {
    resultInitial.innerHTML = '<div id="result-initial"></div>';
    resultFinish.innerHTML = '<div id="result-finish"></div>';
    resultNumber.innerHTML = '<div id="result-random"></div>';
}

function generateNum(initial, finish) {
    initial = Math.ceil(initial);
    finish = Math.floor(finish);
    const random = Math.floor(Math.random() * (finish - initial)) + initial;
    createResultNum(random);
}

function createResultNum(random) {
    let element = document.createElement('div');
    element.innerText = random;
    resultNumber.appendChild(element);
}

function createResults(txtValue, type) {
    if (type) {
        let element = document.createElement('div')
        element.innerText = `Valor Inicial = ${txtValue.value}`;
        resultInitial.appendChild(element);
    } else {
        let element = document.createElement('div');
        element.innerText = `Valor Final = ${txtValue.value}`;
        resultFinish.appendChild(element);
    }
}