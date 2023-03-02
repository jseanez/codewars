function bmi(weight, height) {
    let BMI = weight/Math.pow(height,2)
    if (BMI <= 18.5){
      return "Underweight"
    }
    if (BMI <= 25){
      return "Normal"
    }
    if (BMI <= 30){
      return "Overweight"
    }
    if (BMI > 30){
      return "Obese"
    }
}