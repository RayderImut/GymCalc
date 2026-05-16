const translations = {
  id: {
    navHome: 'Beranda',
    navFeatures: 'Fitur',
    navCalculator: 'Kalkulator',
    themeButtonLight: 'Terang',
    themeButtonDark: 'Gelap',
    heroEyebrow: 'Kalkulator fitness modern',
    heroTitle: 'Pantau tubuhmu dengan lebih cerdas',
    heroText: 'Hitung BMI, Body Fat, BMR, dan TDEE dengan tampilan yang nyaman untuk latihan harianmu.',
    heroButton: 'Mulai Hitung',
    metricTitle: 'Metrik Fitness',
    featuresTitle: 'Fitur Utama',
    featuresText: 'Pahami komposisi tubuhmu lewat perhitungan yang praktis.',
    featureBmi: 'Ketahui kategori indeks massa tubuhmu secara cepat.',
    featureBodyFat: 'Estimasi persentase lemak tubuh dengan data sederhana.',
    featureBmr: 'Lihat estimasi kalori yang dibakar tubuh saat istirahat.',
    featureTdee: 'Hitung kebutuhan kalori harian berdasarkan aktivitas.',
    calculatorTitle: 'Kalkulator GymCalc',
    calculatorText: 'Isi data tubuhmu di bawah ini.',
    genderLabel: 'Jenis Kelamin',
    maleOption: 'Pria',
    femaleOption: 'Wanita',
    ageLabel: 'Usia',
    heightLabel: 'Tinggi (cm)',
    weightLabel: 'Berat (kg)',
    neckLabel: 'Leher (cm)',
    waistLabel: 'Pinggang (cm)',
    activityLabel: 'Level Aktivitas',
    activitySedentary: 'Jarang bergerak',
    activityLight: 'Olahraga ringan',
    activityModerate: 'Olahraga sedang',
    activityHeavy: 'Olahraga berat',
    activityAthlete: 'Atlet',
    agePlaceholder: 'Contoh: 19',
    heightPlaceholder: 'Contoh: 180',
    weightPlaceholder: 'Contoh: 70',
    neckPlaceholder: 'Contoh: 40',
    waistPlaceholder: 'Contoh: 80',
    calculateButton: 'Hitung',
    caloriesPerDay: 'Kalori/hari',
    footerText: '(c) 2026 GymCalc - Kalkulator Fitness',
    validationRequired: 'Mohon isi semua data terlebih dahulu.',
    validationPositive: 'Input tidak boleh bernilai nol atau negatif.',
    validationRealistic: 'Input terlalu jauh dari batas realistis.',
    Underweight: 'Berat badan kurang',
    Normal: 'Normal',
    Overweight: 'Berat badan berlebih',
    Obese: 'Obesitas',
    Athlete: 'Atlet',
    Fit: 'Fit',
    Average: 'Rata-rata',
    High: 'Tinggi'
  },
  en: {
    navHome: 'Home',
    navFeatures: 'Features',
    navCalculator: 'Calculator',
    themeButtonLight: 'Light',
    themeButtonDark: 'Dark',
    heroEyebrow: 'Modern fitness calculator',
    heroTitle: 'Track your body smarter',
    heroText: 'Calculate BMI, Body Fat, BMR, and TDEE with a comfortable interface for daily training.',
    heroButton: 'Start Calculate',
    metricTitle: 'Fitness Metrics',
    featuresTitle: 'Main Features',
    featuresText: 'Understand your body composition with practical calculations.',
    featureBmi: 'Know your body mass index category instantly.',
    featureBodyFat: 'Estimate your body fat percentage with simple data.',
    featureBmr: 'See estimated calories your body burns at rest.',
    featureTdee: 'Calculate your daily calorie needs based on activity.',
    calculatorTitle: 'GymCalc Calculator',
    calculatorText: 'Fill your body information below.',
    genderLabel: 'Gender',
    maleOption: 'Male',
    femaleOption: 'Female',
    ageLabel: 'Age',
    heightLabel: 'Height (cm)',
    weightLabel: 'Weight (kg)',
    neckLabel: 'Neck (cm)',
    waistLabel: 'Waist (cm)',
    activityLabel: 'Activity Level',
    activitySedentary: 'Sedentary',
    activityLight: 'Light Exercise',
    activityModerate: 'Moderate Exercise',
    activityHeavy: 'Heavy Exercise',
    activityAthlete: 'Athlete',
    agePlaceholder: 'Example: 19',
    heightPlaceholder: 'Example: 180',
    weightPlaceholder: 'Example: 70',
    neckPlaceholder: 'Example: 40',
    waistPlaceholder: 'Example: 80',
    calculateButton: 'Calculate',
    caloriesPerDay: 'Calories/day',
    footerText: '(c) 2026 GymCalc - Fitness Calculator',
    validationRequired: 'Please fill all fields.',
    validationPositive: 'Input cannot be zero or negative.',
    validationRealistic: 'Input is unrealistic.',
    Underweight: 'Underweight',
    Normal: 'Normal',
    Overweight: 'Overweight',
    Obese: 'Obese',
    Athlete: 'Athlete',
    Fit: 'Fit',
    Average: 'Average',
    High: 'High'
  }
};

let currentLanguage =
  localStorage.getItem('gymcalc-language') || 'id';

let lastResult = null;

function getTranslation(key) {
  return translations[currentLanguage][key] || key;
}

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem('gymcalc-language', language);
  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = getTranslation(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.placeholder = getTranslation(key);
  });

  document.getElementById('languageLabel').textContent =
    language.toUpperCase();

  updateThemeButton();

  if (lastResult) {
    ui(lastResult);
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('gymcalc-theme', theme);
  updateThemeButton();
}

function updateThemeButton() {
  const theme = document.documentElement.dataset.theme || 'light';
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.querySelector('#themeToggle [data-i18n]');

  themeIcon.textContent = theme === 'dark' ? 'MOON' : 'SUN';
  themeText.textContent =
    theme === 'dark'
      ? getTranslation('themeButtonDark')
      : getTranslation('themeButtonLight');
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme =
    localStorage.getItem('gymcalc-theme') || 'light';

  applyTheme(savedTheme);
  applyLanguage(currentLanguage);

  document.getElementById('themeToggle').addEventListener('click', () => {
    const nextTheme =
      document.documentElement.dataset.theme === 'dark'
        ? 'light'
        : 'dark';

    applyTheme(nextTheme);
  });

  document.getElementById('languageToggle').addEventListener('click', () => {
    applyLanguage(currentLanguage === 'id' ? 'en' : 'id');
  });

  document.getElementById('calculateBtn').addEventListener('click', () => {
    const data = {
      gender: document.getElementById('gender').value,
      age: Number(document.getElementById('age').value),
      height: Number(document.getElementById('height').value),
      weight: Number(document.getElementById('weight').value),
      neck: Number(document.getElementById('neck').value),
      waist: Number(document.getElementById('waist').value),
      activity: Number(document.getElementById('activity').value)
    };

    const validate = validation(data);

    if (!validate.success) {
      alert(getTranslation(validate.messageKey));
      return;
    }

    lastResult = calculator(data);
    ui(lastResult);
  });
});
