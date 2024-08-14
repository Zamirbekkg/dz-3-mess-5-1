let isCelsius = true;

function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const resultElement = document.getElementById('result');

    if (isCelsius) {
        const fahrenheit = (tempInput * 9/5) + 32;
        resultElement.textContent = `${tempInput} °C = ${fahrenheit.toFixed(2)} °F`;
    } else {
        const celsius = (tempInput - 32) * 5/9;
        resultElement.textContent = `${tempInput} °F = ${celsius.toFixed(2)} °C`;
    }
}

function toggleUnit() {
    isCelsius = !isCelsius;
    const button = document.querySelector('button:nth-of-type(2)');
    if (isCelsius) {
        button.textContent = 'Switch to Fahrenheit';
    } else {
        button.textContent = 'Switch to Celsius';
    }
    document.getElementById('result').textContent = '';
}