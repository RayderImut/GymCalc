const calculateBtn =
  document.getElementById(
    'calculateBtn'
  );

calculateBtn.addEventListener(
  'click',
  () => {

    const data = {

      gender:
        document.getElementById(
          'gender'
        ).value,

      age:
        Number(
          document.getElementById(
            'age'
          ).value
        ),

      height:
        Number(
          document.getElementById(
            'height'
          ).value
        ),

      weight:
        Number(
          document.getElementById(
            'weight'
          ).value
        ),

      neck:
        Number(
          document.getElementById(
            'neck'
          ).value
        ),

      waist:
        Number(
          document.getElementById(
            'waist'
          ).value
        ),

      activity:
        Number(
          document.getElementById(
            'activity'
          ).value
        )

    };

    const validate =
      validation(data);

    if (!validate.success) {

      alert(validate.message);

      return;
    }

    const result =
      calculator(data);

    ui(result);

  }
);