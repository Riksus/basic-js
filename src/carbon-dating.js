const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 if (typeof sampleActivity !== "string") {return false};
 sampleActivity = parseFloat(sampleActivity);
 if (sampleActivity <= 0 | sampleActivity  > MODERN_ACTIVITY  || !sampleActivity || isNaN(sampleActivity) ) {
   return false;
 }

 let k = 0.693 / HALF_LIFE_PERIOD;
 let age = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k;
 return Math.ceil(age);
};