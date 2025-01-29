function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100;

    if (!weight || !height) {
        alert("Masukkan berat dan tinggi dengan benar!");
        return;
    }

    let bmi = weight / (height * height);
    let category = "";
    let advice = "";
    let colorClass = "";

    if (bmi < 18.5) {
        category = "Underweight (Kurus)";
        advice = "Anda perlu makan lebih banyak dan menjaga pola makan yang sehat.";
        colorClass = "underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal";
        advice = "Pertahankan pola makan yang sehat dan rutin berolahraga.";
        colorClass = "normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight (Berat Berlebih)";
        advice = "Cobalah untuk menurunkan berat badan dengan diet sehat dan olahraga.";
        colorClass = "overweight";
    } else {
        category = "Obese (Obesitas)";
        advice = "Disarankan untuk melakukan program penurunan berat badan dengan bimbingan ahli gizi dan olahraga.";
        colorClass = "obese";
    }

    // Debugging di console
    console.log(`Weight: ${weight}, Height: ${height}`); 
    console.log(`BMI: ${bmi}`);
    console.log(`Category: ${category}, Color: ${colorClass}`);

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `BMI: ${bmi.toFixed(2)} - <strong class="${colorClass}">${category}</strong><br><br>${advice}`;
    resultDiv.className = `result-box ${colorClass}`;
}

function resetFields() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
}
