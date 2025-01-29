const bmiText = document.getElementById('bmi');
const descText = document.getElementById('desc');
const form = document.getElementsByName('form');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault();

    const weight = parseFloat(form.weight.value);
    const height = parseFloat(form.height.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert('Masukkan berat dan tinggi badan yang benar');
    return; 
}

}