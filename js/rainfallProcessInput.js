/* 
arr[0] = Hits
arr[1] = False Alarms
arr[2] = Misses
arr[3] = Correct Negatives
arr[0] + arr[1] = Forecast Yes
arr[2] + arr[3] = Forecast No
arr[0] + arr[1] + arr[2] + arr[3] = n (Total)
T = Sample Size = 31
*/



//Probability of Detection
const PoD = (arr) => Number((arr[0]/(arr[0]+arr[2])).toFixed(3));
//Frequency of Index
const FBI = (arr) => Number(((arr[0]+arr[1])/(arr[0]+arr[2])).toFixed(3));
//False alarm ratio
const FaR = (arr) => Number((arr[1]/(arr[0]+arr[1])).toFixed(3));
//Miss Ra]te
const MR = (arr) => Number((arr[2]/(arr[2]+arr[0])).toFixed(3));
//Percentage Correct
const PC = (arr) => Number(((arr[0]+arr[3])/(arr[0] + arr[1] + arr[2] + arr[3])).toFixed(3));
//False alarm Rate
const F = (arr) => Number((arr[1]/(arr[1] + arr[3])).toFixed(3));
//Critical Success Index
const CSI = (arr) => Number((arr[0]/(arr[0]+arr[1]+arr[2])).toFixed(3));
//Equitable Threat Score
const ETS = (arr) => {
    let ar = (((arr[0]+arr[1]) * (arr[0]+arr[2]))/31);
    return Number(((arr[0]-ar)/(arr[0]+arr[1]+arr[2]-ar)).toFixed(3))
};
//Heidke Skill Score
const HSS = (arr) => { return Number(((2 * (arr[0]*arr[3] - arr[1]*arr[2]))/(((arr[0]+arr[2]) * (arr[2]+arr[3])) + ((arr[0] + arr[1]) * (arr[1] + arr[3])))).toFixed(3)) || 1
}

//Trust Skill Score
const TSS = (arr) => {return Number(((arr[0]/(arr[0]+arr[2])) + (arr[3]/(arr[1] + arr[3])) - 1).toFixed(3)) || 1}





const rainfallInput = JSON.parse(localStorage.getItem("rainfallArrayData"));
console.log(rainfallInput)

let arrInput = rainfallInput.input;

let day1Data; //[hits, false alarms, misses, correct negatives]
let day2Data;
let day3Data;
let day4Data;
let day5Data;

const createArrOfObservation = (columnNumber) => {
    let hits = 0;
    let falseAlarms = 0;
    let misses = 0;
    let correctNegatives = 0;
    let obsArr = arrInput[0];
    let forecastArr = arrInput[columnNumber];

    for(let i = 0; i < 31; ++i){
        if(obsArr[i] === "Yes" && forecastArr[i] === "Yes")
            hits++;
        else if(obsArr[i] === "No" && forecastArr[i] === "Yes")
            falseAlarms++;
        else if(obsArr[i] === "No" && forecastArr[i] === "No")
            correctNegatives++;
        else if(obsArr[i] === "Yes" && forecastArr[i] === "No")
            misses++;
    }
    let arr = [hits,falseAlarms,misses,correctNegatives];

    switch(columnNumber){
        case 1 : {
            day1Data = arr;
            break;
        }
        case 2 : {
            day2Data = arr;
            break;
        }
        case 3 : {
            day3Data = arr;
            break;
        }
        case 4 : {
            day4Data = arr;
            break;
        }
        case 5 : {
            day5Data = arr;
            break;
        }
    }
}
createArrOfObservation(1);
createArrOfObservation(2);
createArrOfObservation(3);
createArrOfObservation(4);
createArrOfObservation(5);


let arrOfObservationArrays = [day1Data,day2Data,day3Data,day4Data,day5Data]
console.log(arrOfObservationArrays);

const createParameter = (array, func) => {
    let scoreArr = []
    array.forEach(element => {
        let num = func(element);
        scoreArr.push(num);
    });
    return scoreArr;
}

let pod = createParameter(arrOfObservationArrays, PoD);
let fbi = createParameter(arrOfObservationArrays, FBI)
let far = createParameter(arrOfObservationArrays, FaR)
let mr = createParameter(arrOfObservationArrays, MR)
let pc = createParameter(arrOfObservationArrays, PC)
let f = createParameter(arrOfObservationArrays, F)
let csi = createParameter(arrOfObservationArrays, CSI)
let ets = createParameter(arrOfObservationArrays, ETS)
let hss = createParameter(arrOfObservationArrays, HSS)
let tss = createParameter(arrOfObservationArrays, TSS)


const rainfallObject = {
    year : rainfallInput.year,
    month : rainfallInput.month,
    place: rainfallInput.place,



    // The hit and miss of each day

    day1Data,
    day2Data,
    day3Data,
    day4Data,
    day5Data,


    //The arrays of each parameter

    pod,
    fbi,
    far,
    mr,
    pc,
    f,
    csi,
    ets,
    hss,
    tss
}

localStorage.setItem("rainData", JSON.stringify(rainfallObject));
localStorage.removeItem("rainfallArrayData");
