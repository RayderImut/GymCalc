function validation(data) {
  if (
    !data.age ||
    !data.height ||
    !data.weight ||
    !data.neck ||
    !data.waist
  ) {
    return {
      success: false,
      messageKey: 'validationRequired'
    };
  }

  if (
    data.age <= 0 ||
    data.height <= 0 ||
    data.weight <= 0 ||
    data.neck <= 0 ||
    data.waist <= 0
  ) {
    return {
      success: false,
      messageKey: 'validationPositive'
    };
  }

  if (
    data.height > 300 ||
    data.weight > 500
  ) {
    return {
      success: false,
      messageKey: 'validationRealistic'
    };
  }

  return {
    success: true
  };
}
