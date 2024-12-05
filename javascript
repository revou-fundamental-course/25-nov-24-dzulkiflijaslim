// script.js
document.getElementById('calculate-btn').addEventListener('click', function () {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.textContent = "Masukkan nilai tinggi dan berat badan yang valid.";
        resultDiv.style.color = "red";
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let category = "";
    if (bmi < 18.5) {
        category = "Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Kelebihan Berat Badan";
    } else {
        category = "Obesitas";
    }

    resultDiv.textContent = `BMI Anda adalah ${bmi} (${category}).`;
    resultDiv.style.color = "green";
});
