/* 
a = Hits
b = False Alarms
c = Misses
d = Correct Negatives
a + b = Forecast Yes
c + d = Forecast No
a + b + c + d = n (Total)
T = Sample Size
*/

//Probability of Detection
let a;
let b;
let c;
let d;
let n = a + b + c + d;
let T;
let ar = (((a+b) * (a+c))/T);
//Probability of Detection
const PoD = () => (a/(a+c)).toFixed(3);
//Frequency of Index
const FBI = () => ((a+b)/(a+c)).toFixed(3);
//False Alarm ratio
const FAR = () => (b/(a+b)).toFixed(3);
//Miss Rate
const MR = () => (c/(c+a))
//Percentage Correct
const PC = () => ((a+d)/n)
//False Alarm Rate
const F = () => (b/(b+d))
//Critical Success Index
const CSI = () => (a/(a+b+c))
//Equitable Threat Score
const ETS = () => ((a-ar)/(a+b+c-ar))
//Heidke Skill Score
const HSS = () => ((2 * (a*d - b*c))/(((a+c) * (c+d)) + ((a + b) * (b + d))))
//Trust Skill Score
const TSS = () => ((a/(a+c)) + (d/(b + d)) - 1);
//