let dailyExerciseHours = [3, 0, 2, 4.5, 0, 3, 1];
let targetAmountHours = [2];

function avgHours(dailyExerciseHours: number) {
  return (
    dailyExerciseHours.reduce((ac: number, el: number) => ac + el, 0) /
    dailyExerciseHours.length
  );
}

console.log(avgHours(dailyExerciseHours));

function trainingDays(dailyExerciseHours: any) {
  let newTrainingDays = [];
  dailyExerciseHours.map((element: number) => {
    if (element > 0) {
      newTrainingDays.push(element);
    }
  });
  return newTrainingDays;
}
console.log(trainingDays);

/*    function calculateExercises (a, b){
    let a = avgHours;   
    let b= targetAmountHours;
       if (a === 0 ) return "too bad";
       else if (a < b) return 'not too bad but could be better';
       else if (a>= b) return "Good job!"
    }
    console.log(calculateExercises(1.8, 2));

function periodLength (dailyExerciseHours){
    return (dailyExerciseHours.length)
} */

interface Result {
  periodLength: number;
  trainingDays: number;
  Target: number;
  averageTime: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
}
