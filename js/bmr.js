function bmr(
  gender,
  weight,
  height,
  age
) {

  if (gender === 'male') {

    return (
      (10 * weight) +
      (6.25 * height) -
      (5 * age) +
      5
    );

  }

  return (
    (10 * weight) +
    (6.25 * height) -
    (5 * age) -
    161
  );

}