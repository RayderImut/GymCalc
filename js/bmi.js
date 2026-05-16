function bmi(weight, height) {

  const meter =
    height / 100;

  return (
    weight / (meter * meter)
  );

}

function bmiStatus(value) {

  if (value < 18.5) {
    return 'Underweight';
  }

  if (value < 25) {
    return 'Normal';
  }

  if (value < 30) {
    return 'Overweight';
  }

  return 'Obese';

}