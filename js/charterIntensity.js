// Utilities
const types = ['Hits', 'False Alarm', 'Misses', 'Correct Negative'];
const days = ['1 Day', '2 Day', '3 Day', '4 Day', '5 Day'];
const factorOfChange = ['<=1', '>1 & <2', '>2 & <3', '>3'];

const output = JSON.parse(localStorage.getItem('intensityData'));

console.log(output);

// For all stats
!(function () {
	const ctx = document.getElementById('chart-all-stats');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: types, // Chart x axis label
			datasets: [
				{
					label: '1 Day',
					data: output.day1Data, // Data as array HERE
					borderWidth: 1,
				},
				{
					label: '2 Day',
					data: output.day2Data, // Data as array HERE
					borderWidth: 1,
				},
				{
					label: '3 Day',
					data: output.day3Data, // Data as array HERE
					borderWidth: 1,
				},
				{
					label: '4 Day',
					data: output.day4Data, // Data as array HERE
					borderWidth: 1,
				},
				{
					label: '5 Day',
					data: output.day5Data, // Data as array HERE
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
					text: 'All Stats',
					padding: {
						top: 0,
						bottom: 10,
					},
				},
			},
		},
	});
})();

// For PC
!(function () {
	const ctx = document.getElementById('chart-pc');

	new Chart(ctx, {
		type: 'line',
		data: {
			labels: days, // Chart x axis label
			datasets: [
				{
					label: 'PC',
					data: output.pc, // Data as array HERE
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
					text: 'Percent Correct',
					padding: {
						top: 0,
						bottom: 10,
					},
				},
			},
		},
	});
})();

// CSI very light
!(function () {
	const ctx = document.getElementById('chart-csi-vlite');

	new Chart(ctx, {
		type: 'line',
		data: {
			labels: days, // Chart x axis label
			datasets: [
				{
					label: 'PC',
					data: [
						output.csi[0][0],
						output.csi[1][0],
						output.csi[2][0],
						output.csi[3][0],
						output.csi[4][0],
					],
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
					text: 'CSI Very Light',
					padding: {
						top: 0,
						bottom: 10,
					},
				},
			},
		},
	});
})();

// CSI Lite
!(function () {
	const ctx = document.getElementById('chart-csi-lite');

	new Chart(ctx, {
		type: 'line',
		data: {
			labels: days, // Chart x axis label
			datasets: [
				{
					label: 'PC',
					data: [
						output.csi[0][1],
						output.csi[1][1],
						output.csi[2][1],
						output.csi[3][1],
						output.csi[4][1],
					],
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
					text: 'CSI Light',
					padding: {
						top: 0,
						bottom: 10,
					},
				},
			},
		},
	});
})();

//CSI Mod
!(function () {
	const ctx = document.getElementById('chart-csi-mod');

	new Chart(ctx, {
		type: 'line',
		data: {
			labels: days, // Chart x axis label
			datasets: [
				{
					label: 'PC',
					data: [
						output.csi[0][2],
						output.csi[1][2],
						output.csi[2][2],
						output.csi[3][2],
						output.csi[4][2],
					],
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
					text: 'CSI Moderate',
					padding: {
						top: 0,
						bottom: 10,
					},
				},
			},
		},
	});
})();

// CSI Heavy
!(function () {
	const ctx = document.getElementById('chart-csi-heavy');

	new Chart(ctx, {
		type: 'line',
		data: {
			labels: days, // Chart x axis label
			datasets: [
				{
					label: 'PC',
					data: [
						output.csi[0][3],
						output.csi[1][3],
						output.csi[2][3],
						output.csi[3][3],
						output.csi[4][3],
					],
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
					text: 'CSI Heavy',
					padding: {
						top: 0,
						bottom: 10,
					},
				},
			},
		},
	});
})();

// CSI Very Heavy
!(function () {
	const ctx = document.getElementById('chart-csi-vheavy');

	new Chart(ctx, {
		type: 'line',
		data: {
			labels: days, // Chart x axis label
			datasets: [
				{
					label: 'PC',
					data: [
						output.csi[0][4],
						output.csi[1][4],
						output.csi[2][4],
						output.csi[3][4],
						output.csi[4][4],
					],
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
					text: 'CSI Very Heavy',
					padding: {
						top: 0,
						bottom: 10,
					},
				},
			},
		},
	});
})();

// CSI Extreme Heavy
!(function () {
	const ctx = document.getElementById('chart-csi-dry');

	new Chart(ctx, {
		type: 'line',
		data: {
			labels: days, // Chart x axis label
			datasets: [
				{
					label: 'PC',
					data: [
						output.csi[0][5],
						output.csi[1][5],
						output.csi[2][5],
						output.csi[3][5],
						output.csi[4][5],
					],
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
					text: 'CSI Dry',
					padding: {
						top: 0,
						bottom: 10,
					},
				},
			},
		},
	});
})();

// For HSS
!(function () {
	const ctx = document.getElementById('chart-hss');

	new Chart(ctx, {
		type: 'line',
		data: {
			labels: days, // Chart x axis label
			datasets: [
				{
					label: 'HSS',
					data: output.hss, // Data as array HERE
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
					text: 'Heidke Skill Score',
					padding: {
						top: 0,
						bottom: 10,
					},
				},
			},
		},
	});
})();
