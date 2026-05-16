function bodyfat(
  gender,
  height,
  neck,
  waist
) {

  let result;

  if (gender === 'male') {

    result =
      86.010 *
      Math.log10(waist - neck)
      -
      70.041 *
      Math.log10(height)
      +
      36.76;

  } else {

    result =
      163.205 *
      Math.log10(waist - neck)
      -
      97.684 *
      Math.log10(height)
      -
      78.387;

  }

  return result;

}

function bodyfatStatus(value) {

  if (value < 10) {
    return 'Athlete';
  }

  if (value < 18) {
    return 'Fit';
  }

  if (value < 25) {
    return 'Average';
  }

  return 'High';

}