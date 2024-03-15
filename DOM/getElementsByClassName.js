let btn = document.getElementById('button');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('txt');
    rates.forEach((rate) => {
        if (rate.checked) {
            output.innerText = `You selected: ${rate.value}`;
        }
    });

});