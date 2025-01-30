const bmiText = document.getElementById('bmi');
const descText = document.getElementById('desc');
const form = document.querySelector('form'); 

form.addEventListener('submit', onFormSubmit);
form.addEventListener('reset', onFormReset);

function onFormReset() {
    bmiText.textContent = 0;
    bmiText.className = '';
    descText.textContent = "N/A";
}

function onFormSubmit(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Masukkan berat dan tinggi badan yang benar');
        return; 
    }

    const heightInMeters = height / 100;
    const bmi = weight / Math.pow(heightInMeters, 2);

    bmiText.textContent = bmi.toFixed(2);

    let desc = "";
    if (bmi < 18.5) {
        desc = "Kurang";
    } else if (bmi >= 18.5 && bmi < 25) {
        desc = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        desc = "Berlebih";
    } else {
        desc = "Obesitas";
    }

    bmiText.classList.remove("Kurang", "Normal", "Berlebih", "Obesitas");
    bmiText.classList.add(desc);

    descText.innerHTML = `Hasil BMI anda <strong>${desc}</strong>`;

}
