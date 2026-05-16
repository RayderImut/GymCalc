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
      message: 'Please fill all fields.'
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
      message: 'Input cannot be negative.'
    };

  }

  if (
    data.height > 300 ||
    data.weight > 500
  ) {

    return {
      success: false,
      message: 'Input is unrealistic.'
    };

  }

  return {
    success: true
  };

}