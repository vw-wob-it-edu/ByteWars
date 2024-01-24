//showing Line count inside the textfield
function updateLineNumbers() {
    const textarea = document.getElementById('codeInput');
    const lineNumbers = document.getElementById('lineNumbers');
    const lines = textarea.value.split('\n').length;
    let numberString = '';

    for (let i = 1; i <= lines; i++) {
        numberString += i + '\n';
    }

    lineNumbers.textContent = numberString;
}
//Tab now makes an indentation instead of tabing out of the Textfield
function Indentation(event) {
    if (event.key === 'Tab') {
        event.preventDefault();
        const start = event.target.selectionStart;
        const end = event.target.selectionEnd;
        event.target.value = event.target.value.substring(0, start) + '\t' + event.target.value.substring(end);
        event.target.selectionStart = event.target.selectionEnd = start + 1;
    }
}
document.getElementById('codeInput').addEventListener('keydown', Indentation);
updateLineNumbers();
