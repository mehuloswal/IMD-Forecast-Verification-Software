const intensityInput = JSON.parse(
	localStorage.getItem('intensityArrayData')
);

let arrInput = intensityInput.input;

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
	let z = 0;
	let aa = 0;
	let ab = 0;
	let ac = 0;
	let ad = 0;
	let ae = 0;
	let af = 0;
	let ag = 0;
	let ah = 0;
	let ai = 0;
	let aj = 0;

	let obsArr = arrInput[0];
	let forecastArr = arrInput[columnNumber];

	for (let i = 0; i < 31; ++i) {
		if (
			obsArr[i] === 'Very light' &&
			forecastArr[i] === 'Very light'
		)
			a++;
		else if (
			obsArr[i] === 'Very light' &&
			forecastArr[i] === 'Light'
		)
			b++;
		else if (
			obsArr[i] === 'Very light' &&
			forecastArr[i] === 'Moderate'
		)
			c++;
		else if (
			obsArr[i] === 'Very light' &&
			forecastArr[i] === 'Heavy'
		)
			d++;
		else if (
			obsArr[i] === 'Very light' &&
			forecastArr[i] === 'Very Heavy'
		)
			e++;
		else if (
			obsArr[i] === 'Very light' &&
			forecastArr[i] === 'Dry'
		)
			f++;
		else if (
			obsArr[i] === 'Light' &&
			forecastArr[i] === 'Very light'
		)
			g++;
		else if (obsArr[i] === 'Light' && forecastArr[i] === 'Light')
			h++;
		else if (
			obsArr[i] === 'Light' &&
			forecastArr[i] === 'Moderate'
		)
			i++;
		else if (obsArr[i] === 'Light' && forecastArr[i] === 'Heavy')
			j++;
		else if (
			obsArr[i] === 'Light' &&
			forecastArr[i] === 'Very Heavy'
		)
			k++;
		else if (obsArr[i] === 'Light' && forecastArr[i] === 'Dry')
			l++;
		else if (
			obsArr[i] === 'Moderate' &&
			forecastArr[i] === 'Very light'
		)
			m++;
		else if (
			obsArr[i] === 'Moderate' &&
			forecastArr[i] === 'Light'
		)
			n++;
		else if (
			obsArr[i] === 'Moderate' &&
			forecastArr[i] === 'Moderate'
		)
			o++;
		else if (
			obsArr[i] === 'Moderate' &&
			forecastArr[i] === 'Heavy'
		)
			p++;
		else if (
			obsArr[i] === 'Moderate' &&
			forecastArr[i] === 'Very Heavy'
		)
			q++;
		else if (obsArr[i] === 'Moderate' && forecastArr[i] === 'Dry')
			r++;
		else if (
			obsArr[i] === 'Heavy' &&
			forecastArr[i] === 'Very light'
		)
			s++;
		else if (obsArr[i] === 'Heavy' && forecastArr[i] === 'Light')
			t++;
		else if (
			obsArr[i] === 'Heavy' &&
			forecastArr[i] === 'Moderate'
		)
			u++;
		else if (obsArr[i] === 'Heavy' && forecastArr[i] === 'Heavy')
			v++;
		else if (
			obsArr[i] === 'Heavy' &&
			forecastArr[i] === 'Very Heavy'
		)
			w++;
		else if (obsArr[i] === 'Heavy' && forecastArr[i] === 'Dry')
			x++;
		else if (
			obsArr[i] === 'Very Heavy' &&
			forecastArr[i] === 'Very light'
		)
			y++;
		else if (
			obsArr[i] === 'Very Heavy' &&
			forecastArr[i] === 'Light'
		)
			z++;
		else if (
			obsArr[i] === 'Very Heavy' &&
			forecastArr[i] === 'Moderate'
		)
			aa++;
		else if (
			obsArr[i] === 'Very Heavy' &&
			forecastArr[i] === 'Heavy'
		)
			ab++;
		else if (
			obsArr[i] === 'Very Heavy' &&
			forecastArr[i] === 'Very Heavy'
		)
			ac++;
		else if (
			obsArr[i] === 'Very Heavy' &&
			forecastArr[i] === 'Dry'
		)
			ad++;
		else if (
			obsArr[i] === 'Dry' &&
			forecastArr[i] === 'Very light'
		)
			ae++;
		else if (obsArr[i] === 'Dry' && forecastArr[i] === 'Light')
			af++;
		else if (obsArr[i] === 'Dry' && forecastArr[i] === 'Moderate')
			ag++;
		else if (obsArr[i] === 'Dry' && forecastArr[i] === 'Heavy')
			ah++;
		else if (
			obsArr[i] === 'Dry' &&
			forecastArr[i] === 'Very Heavy'
		)
			ai++;
		else if (obsArr[i] === 'Dry' && forecastArr[i] === 'Dry')
			aj++;
	}
	let arr = [
		a,
		b,
		c,
		d,
		e,
		f,
		g,
		h,
		i,
		j,
		k,
		l,
		m,
		n,
		o,
		p,
		q,
		r,
		s,
		t,
		u,
		v,
		w,
		x,
		y,
		z,
		aa,
		ab,
		ac,
		ad,
		ae,
		af,
		ag,
		ah,
		ai,
		aj,
	];

	switch (columnNumber) {
		case 1: {
			day1Data = arr;
			break;
		}
		case 2: {
			day2Data = arr;
			break;
		}
		case 3: {
			day3Data = arr;
			break;
		}
		case 4: {
			day4Data = arr;
			break;
		}
		case 5: {
			day5Data = arr;
			break;
		}
	}
};
createArrOfObservation(1);
createArrOfObservation(2);
createArrOfObservation(3);
createArrOfObservation(4);
createArrOfObservation(5);

let arrOfObservationArrays = [
	day1Data,
	day2Data,
	day3Data,
	day4Data,
	day5Data,
];
console.log(arrOfObservationArrays);

const T = (array) => {
	let sum = 0;
	for (let i = 0; i < array.length; ++i) {
		sum += array[i];
	}
	return sum;
};
const PC = (array) => {
	let total = T(array);

	let number = Number(
		((array[0] +
			array[7] +
			array[14] +
			array[21] +
			array[28] +
			array[35]) /
			total) *
			100
	).toFixed(3);

	return number;
};

const CSI = (array) => {
	let A =
		array[0] +
		array[1] +
		array[2] +
		array[3] +
		array[4] +
		array[5];
	let B =
		array[6] +
		array[7] +
		array[8] +
		array[9] +
		array[10] +
		array[11];
	let C =
		array[12] +
		array[13] +
		array[14] +
		array[15] +
		array[16] +
		array[17];
	let D =
		array[18] +
		array[19] +
		array[20] +
		array[21] +
		array[22] +
		array[23];
	let E =
		array[24] +
		array[25] +
		array[26] +
		array[27] +
		array[28] +
		array[29];
	let F =
		array[30] +
		array[31] +
		array[32] +
		array[33] +
		array[34] +
		array[35];
	let G =
		array[0] +
		array[6] +
		array[12] +
		array[18] +
		array[24] +
		array[30];
	let H =
		array[1] +
		array[7] +
		array[13] +
		array[19] +
		array[25] +
		array[31];
	let I =
		array[2] +
		array[8] +
		array[14] +
		array[20] +
		array[26] +
		array[32];
	let J =
		array[3] +
		array[9] +
		array[15] +
		array[21] +
		array[27] +
		array[33];
	let K =
		array[4] +
		array[10] +
		array[16] +
		array[22] +
		array[28] +
		array[34];
	let L =
		array[5] +
		array[11] +
		array[17] +
		array[23] +
		array[29] +
		array[35];

	let num1 = Number((array[0] / A + G - array[0]).toFixed(3));
	let num2 = Number((array[7] / B + H - array[7]).toFixed(3));
	let num3 = Number((array[14] / C + I - array[14]).toFixed(3));
	let num4 = Number((array[21] / D + J - array[21]).toFixed(3));
	let num5 = Number((array[28] / E + K - array[28]).toFixed(3));
	let num6 = Number((array[35] / F + L - array[35]).toFixed(3));

	let arr = [num1, num2, num3, num4, num5, num6];
	return arr;
};

const HSS = (array) => {
	let A =
		array[0] +
		array[1] +
		array[2] +
		array[3] +
		array[4] +
		array[5];
	let B =
		array[6] +
		array[7] +
		array[8] +
		array[9] +
		array[10] +
		array[11];
	let C =
		array[12] +
		array[13] +
		array[14] +
		array[15] +
		array[16] +
		array[17];
	let D =
		array[18] +
		array[19] +
		array[20] +
		array[21] +
		array[22] +
		array[23];
	let E =
		array[24] +
		array[25] +
		array[26] +
		array[27] +
		array[28] +
		array[29];
	let F =
		array[30] +
		array[31] +
		array[32] +
		array[33] +
		array[34] +
		array[35];
	let G =
		array[0] +
		array[6] +
		array[12] +
		array[18] +
		array[24] +
		array[30];
	let H =
		array[1] +
		array[7] +
		array[13] +
		array[19] +
		array[25] +
		array[31];
	let I =
		array[2] +
		array[8] +
		array[14] +
		array[20] +
		array[26] +
		array[32];
	let J =
		array[3] +
		array[9] +
		array[15] +
		array[21] +
		array[27] +
		array[33];
	let K =
		array[4] +
		array[10] +
		array[16] +
		array[22] +
		array[28] +
		array[34];
	let L =
		array[5] +
		array[11] +
		array[17] +
		array[23] +
		array[29] +
		array[35];

	let num = Number(
		(
			array[0] +
			array[7] +
			array[14] +
			array[21] +
			array[28] +
			array[35] -
			(A * G + B * H + C * I + D * J + E * K + F * L) /
				T(array) /
				(T(array) -
					(A * G + B * H + C * I + D * J + E * K + F * L) /
						T(array))
		).toFixed(3)
	);
	return num;
};

const createParameter = (array, func) => {
	let scoreArr = [];
	array.forEach((element) => {
		let num = func(element);
		scoreArr.push(num);
	});
	return scoreArr;
};

let hss = createParameter(arrOfObservationArrays, HSS);
let csi = createParameter(arrOfObservationArrays, CSI);
let pc = createParameter(arrOfObservationArrays, PC);

const intensityObject = {
	year: intensityInput.year,
	month: intensityInput.month,
	place: intensityInput.place,

	// The hit and miss of each day

	day1Data,
	day2Data,
	day3Data,
	day4Data,
	day5Data,

	//The arrays of each parameter
	hss,
	csi,
	pc,
};
console.log(intensityObject);
localStorage.setItem(
	'intensityData',
	JSON.stringify(intensityObject)
);
localStorage.removeItem('intensityArrayData');
