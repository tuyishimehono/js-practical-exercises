function arrayStats(arr) {
    // Initialize variables for sum, min, max, and average
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
   
    // Iterate through the array to calculate sum, min, and max
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i];
       if (arr[i] < min) {
         min = arr[i];
       }
       if (arr[i] > max) {
         max = arr[i];
       }
    }
   
    let average = (sum / arr.length).toFixed(2);
   
    // Return an object with the calculated statistics
    return {
       sum: sum,
       average: average,
       min: min,
       max: max
    };
}
   
console.log(arrayStats([1, 2, 3, 4, 5]));
   
