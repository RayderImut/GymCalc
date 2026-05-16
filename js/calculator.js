function calculator(data) {

  const bmiValue =
    bmi(
      data.weight,
      data.height
    );

  const bmiText =
    bmiStatus(bmiValue);

  const bmrValue =
    bmr(
      data.gender,
      data.weight,
      data.height,
      data.age
    );

  const tdeeValue =
    tdee(
      bmrValue,
      data.activity
    );

  const bodyfatValue =
    bodyfat(
      data.gender,
      data.height,
      data.neck,
      data.waist
    );

  const bodyfatText =
    bodyfatStatus(bodyfatValue);

  return {

    bmi:
      bmiValue,

    bmiStatus:
      bmiText,

    bmr:
      bmrValue,

    tdee:
      tdeeValue,

    bodyfat:
      bodyfatValue,

    bodyfatStatus:
      bodyfatText

  };

}