
function append(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
