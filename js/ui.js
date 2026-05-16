function ui(result) {
  document.getElementById('bmiResult').textContent =
    result.bmi.toFixed(1);

  document.getElementById('bmiStatus').textContent =
    getTranslation(result.bmiStatus);

  document.getElementById('bodyFatResult').textContent =
    result.bodyfat.toFixed(1) + '%';

  document.getElementById('bodyFatStatus').textContent =
    getTranslation(result.bodyfatStatus);

  document.getElementById('bmrResult').textContent =
    Math.round(result.bmr);

  document.getElementById('tdeeResult').textContent =
    Math.round(result.tdee);
}
