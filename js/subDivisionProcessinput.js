const subDivisionInput = JSON.parse(localStorage.getItem("subDivisionArrayData"));
console.log(subDivisionInput);


let arrInput = subDivisionInput.input;

let day1Data; //[hits, false alarms, misses, correct negatives]
let day2Data;
let day3Data;
let day4Data;
let day5Data;

const createArrOfObservation = (columnNumber) => {
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    let f = 0;
    let g = 0;
    let h = 0;
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;
    let m = 0;
    let n = 0;
    let o = 0;
    let p = 0;
    let q = 0;
    let r = 0;
    let s = 0;
    let t = 0;
    let u = 0;
    let v = 0;
    let w = 0;
    let x = 0;
    let y = 0;

    let obsArr = arrInput[0];
    let forecastArr = arrInput[columnNumber];

    for(let i = 0; i < 31; ++i){
        if(obsArr[i] === "Dry" && forecastArr[i] === "Dry")
            a++;
        else if(obsArr[i] === "Dry" && forecastArr[i] === "Isolated")
            b++;
        else if(obsArr[i] === "Dry" && forecastArr[i] === "Scattered")
            c++;
        else if(obsArr[i] === "Dry" && forecastArr[i] === "Fairly Widespread")
            d++; 
        else if(obsArr[i] === "Dry" && forecastArr[i] === "Widespread")
            e++;


        else if(obsArr[i] === "Isolated" && forecastArr[i] === "Dry")
            f++;
        else if(obsArr[i] === "Isolated" && forecastArr[i] === "Isolated")
            g++;
        else if(obsArr[i] === "Isolated" && forecastArr[i] === "Scattered")
            h++;
        else if(obsArr[i] === "Isolated" && forecastArr[i] === "Fairly Widespread")
            i++; 
        else if(obsArr[i] === "Isolated" && forecastArr[i] === "Widespread")
            j++;


        else if(obsArr[i] === "Scattered" && forecastArr[i] === "Dry")
            k++;
        else if(obsArr[i] === "Scattered" && forecastArr[i] === "Isolated")
            l++;
        else if(obsArr[i] === "Scattered" && forecastArr[i] === "Scattered")
            m++;
        else if(obsArr[i] === "Scattered" && forecastArr[i] === "Fairly Widespread")
            n++; 
        else if(obsArr[i] === "Scattered" && forecastArr[i] === "Widespread")
            o++;
        

        else if(obsArr[i] === "Fairly Widespread" && forecastArr[i] === "Dry")
            p++;
        else if(obsArr[i] === "Fairly Widespread" && forecastArr[i] === "Isolated")
            q++;
        else if(obsArr[i] === "Fairly Widespread" && forecastArr[i] === "Scattered")
            r++;
        else if(obsArr[i] === "Fairly Widespread" && forecastArr[i] === "Fairly Widespread")
            s++; 
        else if(obsArr[i] === "Fairly Widespread" && forecastArr[i] === "Widespread")
            t++;


        else if(obsArr[i] === "Widespread" && forecastArr[i] === "Dry")
            u++;
        else if(obsArr[i] === "Widespread" && forecastArr[i] === "Isolated")
            v++;
        else if(obsArr[i] === "Widespread" && forecastArr[i] === "Scattered")
            w++;
        else if(obsArr[i] === "Widespread" && forecastArr[i] === "Fairly Widespread")
            x++; 
        else if(obsArr[i] === "Widespread" && forecastArr[i] === "Widespread")
            y++;

    }
    let arr = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y];

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

const T = (array) => {
    let sum  = 0;
    for(let i = 0; i < array.length; ++i){
        sum += array[i];
    }
    return sum;
}
const PC = (array) => {

    let total = T(array);

    let number = Number(((array[0]+ array[6] + array[12] + array[18] + array[24])/total) * 100).toFixed(3);

    return number;

}

const CSI  = (array) => {
    let J = array[0] + array[1] + array[2] + array[3] + array[4];
    let K = array[5] + array[6] + array[7] + array[8] + array[9];
    let L = array[10] + array[11] + array[12] + array[13] + array[14];
    let M = array[15] + array[16] + array[17] + array[18] + array[19];
    let N = array[20] + array[21] + array[22] + array[23] + array[24];
    let O = array[0] + array[5] + array[10] + array[15] + array[20];
    let P = array[1] + array[6] + array[11] + array[16] + array[21];
    let Q = array[2] + array[7] + array[12] + array[17] + array[22];
    let R = array[3] + array[8] + array[13] + array[18] + array[23];
    let S = array[4] + array[9] + array[14] + array[19] + array[24];

    let num1 = Number((array[0]/J + O - array[0]).toFixed(3));
    let num2 = Number((array[6]/K + P - array[6]).toFixed(3));
    let num3 = Number((array[12]/L + Q - array[12]).toFixed(3));
    let num4 = Number((array[18]/M + R - array[18]).toFixed(3));
    let num5 = Number((array[24]/N + S - array[18]).toFixed(3));

    let arr = [num1,num2,num3,num4,num5];
    return arr;
}


const HSS = (array) => {
    let J = array[0] + array[1] + array[2] + array[3] + array[4];
    let K = array[5] + array[6] + array[7] + array[8] + array[9];
    let L = array[10] + array[11] + array[12] + array[13] + array[14];
    let M = array[15] + array[16] + array[17] + array[18] + array[19];
    let N = array[20] + array[21] + array[22] + array[23] + array[24];
    let O = array[0] + array[5] + array[10] + array[15] + array[20];
    let P = array[1] + array[6] + array[11] + array[16] + array[21];
    let Q = array[2] + array[7] + array[12] + array[17] + array[22];
    let R = array[3] + array[8] + array[13] + array[18] + array[23];
    let S = array[4] + array[9] + array[14] + array[19] + array[24];

    let num = Number(((array[0] + array[6] + array[12] + array[18] + array[24]) - (((J*O + K*P + L*Q + M*R + N*S)/T(array))/(T(array) - (J*O + K*P + L*Q + M*R + N*S)/T(array)))).toFixed(3))
    return num;

}




const createParameter = (array, func) => {
    let scoreArr = []
    array.forEach(element => {
        let num = func(element);
        scoreArr.push(num);
    });
    return scoreArr;
}



let hss = createParameter(arrOfObservationArrays, HSS);
let csi = createParameter(arrOfObservationArrays, CSI);
let pc = createParameter(arrOfObservationArrays, PC);




const subdivObject = {
    year : subDivisionInput.year,
    month : subDivisionInput.month,
    place: subDivisionInput.place,



    // The hit and miss of each day

    day1Data,
    day2Data,
    day3Data,
    day4Data,
    day5Data,


    //The arrays of each parameter
hss,
csi,
pc
}
console.log(subdivObject)
localStorage.setItem("subdivData", JSON.stringify(subdivObject));
localStorage.removeItem("subDivisionArrayData");
