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

  renderHealthSummary(result);
}

function renderHealthSummary(result) {
  const summary = getHealthSummary(result);
  const summaryElement = document.getElementById('healthSummary');

  document.getElementById('summaryTitle').textContent =
    getTranslation(summary.titleKey);

  document.getElementById('summaryDescription').textContent =
    getTranslation(summary.textKey);

  summaryElement.hidden = false;
}

function getHealthSummary(result) {
  const needsAttention =
    result.bmiStatus === 'Underweight' ||
    result.bmiStatus === 'Obese' ||
    result.bodyfatStatus === 'High';

  const veryFit =
    result.bmiStatus === 'Normal' &&
    (
      result.bodyfatStatus === 'Athlete' ||
      result.bodyfatStatus === 'Fit'
    );

  if (needsAttention) {
    return {
      titleKey: 'summaryNeedsAttentionTitle',
      textKey: 'summaryNeedsAttentionText'
    };
  }

  if (veryFit) {
    return {
      titleKey: 'summaryFitTitle',
      textKey: 'summaryFitText'
    };
  }

  return {
    titleKey: 'summaryHealthyTitle',
    textKey: 'summaryHealthyText'
  };
}
