function calculateBmi (altura:number, peso:number){
   let bmi = peso / ((altura/100) ** 2)

    if (bmi < 18.4) {
        return "underweight"
}
    else if (bmi >= 18.4 && bmi <=24.9){
        return "normal"
    }
    else if (bmi >= 25 && bmi <=29.9){
        return "sobrepeso"
    }
    else if (bmi >= 30){
        return "obeso"
    }

}
console.log(calculateBmi(149, 43))

/* let meters = [140, 150, 160, 170, 180, 190, 200]
let weight = [40, 50, 60, 70, 80, 90, 100, 110, 120] */