const mainInput = JSON.parse(localStorage.getItem('tempArrayData'));

let arrOfInputs = mainInput.input;

const absErrDay1 = [];
const absErrDay2 = [];
const absErrDay3 = [];
const absErrDay4 = [];
const absErrDay5 = [];

console.log(arrOfInputs);

const createArraysOfErr = (columnNumber) => {
	for (let i = 0; i < 31; ++i) {
		let num = Math.abs(
			arrOfInputs[0][i] - arrOfInputs[columnNumber][i]
		);

		switch (columnNumber) {
			case 1: {
				absErrDay1.push(num);
				break;
			}
			case 2: {
				absErrDay2.push(num);
				break;
			}
			case 3: {
				absErrDay3.push(num);
				break;
			}
			case 4: {
				absErrDay4.push(num);
				break;
			}
			case 5: {
				absErrDay5.push(num);
				break;
			}
			default: {
				console.log('invalid');
			}
		}
	}
};

createArraysOfErr(1);
createArraysOfErr(2);
createArraysOfErr(3);
createArraysOfErr(4);
createArraysOfErr(5);

const calculateRMSE = (arr) => {
	const squaredArr = arr.map((element) => {
		return element * element;
	});
	let num = 0;
	squaredArr.forEach((a) => {
		num += a;
	});

	return Math.sqrt(num / 31).toFixed(3);
};

let rmseDay1 = calculateRMSE(absErrDay1);
let rmseDay2 = calculateRMSE(absErrDay2);
let rmseDay3 = calculateRMSE(absErrDay3);
let rmseDay4 = calculateRMSE(absErrDay4);
let rmseDay5 = calculateRMSE(absErrDay5);

rmseArray = [rmseDay1, rmseDay2, rmseDay3, rmseDay4, rmseDay5];

/*

So for frequency of error within range we have 4 parameters
<=1.0
>1.0 & <=2.0
>2.0 & <= 3.0
>3.0

Assuming that these frequencies are nothing but |Observed value - Forecasted value for day x|

So i'll be creating 5 arrays each of 4 elements wherein 1 1st element for every day would give the frequenct of <=1.0 second element would give the for  >1.0 & <= 2.0 and so on

*/

const createFrequencyOfErrorArr = (arr) => {
	let num1 = 0;
	let num2 = 0;
	let num3 = 0;
	let num4 = 0;
	for (let i = 0; i < 31; ++i) {
		if (arr[i] <= 1.0) num1++;
		else if (arr[i] > 1.0 && arr[i] <= 2.0) num2++;
		else if (arr[i] > 2.0 && arr[i] <= 3.0) num3++;
		else if (arr[i] > 3.0) num4++;
	}

	let array = [num1, num2, num3, num4];

	return array;
};

const createPercentageErrorArr = (arr) => {
	let sum = 0;
	let array1 = [];
	arr.forEach((element) => {
		sum += element;
	});
	arr.forEach((element) => {
		let num = Math.round((element / sum).toFixed(2) * 100);
		array1.push(num);
	});
	return array1;
};

let day1FrequencyArr = createFrequencyOfErrorArr(absErrDay1);
let day2FrequencyArr = createFrequencyOfErrorArr(absErrDay2);
let day3FrequencyArr = createFrequencyOfErrorArr(absErrDay3);
let day4FrequencyArr = createFrequencyOfErrorArr(absErrDay4);
let day5FrequencyArr = createFrequencyOfErrorArr(absErrDay5);

let day1PercentageArr = createPercentageErrorArr(day1FrequencyArr);
let day2PercentageArr = createPercentageErrorArr(day2FrequencyArr);
let day3PercentageArr = createPercentageErrorArr(day3FrequencyArr);
let day4PercentageArr = createPercentageErrorArr(day4FrequencyArr);
let day5PercentageArr = createPercentageErrorArr(day5FrequencyArr);

let finalObject = {
	//Arrays of absolute errors
	day1AbsoluteErrors: absErrDay1,
	day2AbsoluteErrors: absErrDay2,
	day3AbsoluteErrors: absErrDay3,
	day4AbsoluteErrors: absErrDay4,
	day5AbsoluteErrors: absErrDay5,
	//Root mean squared errors values
	rmse: rmseArray,
	//Frequency of error within range
	day1FrequencyErrors: day1FrequencyArr,
	day2FrequencyErrors: day2FrequencyArr,
	day3FrequencyErrors: day3FrequencyArr,
	day4FrequencyErrors: day4FrequencyArr,
	day5FrequencyErrors: day5FrequencyArr,
	//Percentage values of the frequencies
	day1PercentageErrors: day1PercentageArr,
	day2PercentageErrors: day2PercentageArr,
	day3PercentageErrors: day3PercentageArr,
	day4PercentageErrors: day4PercentageArr,
	day5PercentageErrors: day5PercentageArr,
};
// Store in Local Storage
localStorage.removeItem('maxTempArr');
localStorage.setItem('finalTempData', JSON.stringify(finalObject));
