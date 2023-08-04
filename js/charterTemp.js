// Utilities
const dates = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'11',
	'12',
	'13',
	'14',
	'15',
	'16',
	'17',
	'18',
	'19',
	'20',
	'21',
	'22',
	'23',
	'24',
	'25',
	'26',
	'27',
	'28',
	'29',
	'30',
	'31',
];
const factorOfChange = ['<=1', '>1 & <2', '>2 & <3', '>3'];

const output = JSON.parse(localStorage.getItem('finalTempData'));

console.log(output);

// For line
!(function () {
	const ctx = document.getElementById('chart-line');

	new Chart(ctx, {
		type: 'line',
		data: {
			labels: dates, // Chart x axis label
			datasets: [
				{
					label: '1 Day',
					data: output.day1AbsoluteErrors, // Data as array HERE
					borderWidth: 1,
				},
				{
					label: '2 Day',
					data: output.day2AbsoluteErrors, // Data as array HERE
					borderWidth: 1,
				},
				{
					label: '3 Day',
					data: output.day3AbsoluteErrors, // Data as array HERE
					borderWidth: 1,
				},
				{
					label: '4 Day',
					data: output.day4AbsoluteErrors, // Data as array HERE
					borderWidth: 1,
				},
				{
					label: '5 Day',
					data: output.day5AbsoluteErrors, // Data as array HERE
					borderWidth: 1,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
			animation: {
				duration: 600,
			},
			plugins: {
				title: {
					display: true,
					text: 'Absolute Error',
					padding: {
						top: 0,
						bottom: 10,
					},
				},
			},
		},
	});
})();

// For Bar
!(function () {
	const ctx = document.getElementById('chart-bar');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: factorOfChange,
			datasets: [
				{
					label: '1 Day',
					data: output.day1FrequencyErrors,
					borderWidth: 1,
				},
				{
					// Add more Datasets like this
					label: '2 Day', // Your Label goes here
					data: output.day2FrequencyErrors, // Your Data goes here
					borderWidth: 2,
				},
				{
					// Add more Datasets like this
					label: '3 Day', // Your Label goes here
					data: output.day3FrequencyErrors, // Your Data goes here
					borderWidth: 2,
				},
				{
					// Add more Datasets like this
					label: '4 Day', // Your Label goes here
					data: output.day4FrequencyErrors, // Your Data goes here
					borderWidth: 2,
				},
				{
					// Add more Datasets like this
					label: '5 Day', // Your Label goes here
					data: output.day5FrequencyErrors, // Your Data goes here
					borderWidth: 2,
				},
			],
		},

		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
			animation: {
				duration: 600,
			},
			plugins: {
				title: {
					display: true,
					text: 'Error Frequency in Range',
					padding: {
						top: 0,
						bottom: 10,
					},
				},
			},
		},
	});
})();

// Line Graph for RMSE

!(function () {
	const ctx = document.getElementById('chart-pie');

	new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
			datasets: [
				{
					label: '1 Day',
					data: output.rmse,
					borderWidth: 1,
				},
			],
		},

		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
			animation: {
				duration: 600,
			},
			plugins: {
				title: {
					display: true,
					text: 'Root Mean Square Errors',
					padding: {
						top: 0,
						bottom: 10,
					},
				},
			},
		},
	});
})();
