// Utilities
const types = ['Hits', 'False Alarm', 'Misses', 'Correct Negative'];
const days = ['1 Day', '2 Day', '3 Day', '4 Day', '5 Day'];
const factorOfChange = ['<=1', '>1 & <2', '>2 & <3', '>3'];

const output = JSON.parse(localStorage.getItem('subdivData'));

console.log(output);

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

// CSI Dry
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

// CSI Iso
!(function () {
	const ctx = document.getElementById('chart-csi-iso');

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
					text: 'CSI Isolated',
					padding: {
						top: 0,
						bottom: 10,
					},
				},
			},
		},
	});
})();

//CSI Scat
!(function () {
	const ctx = document.getElementById('chart-csi-scat');

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
					text: 'CSI Scattered',
					padding: {
						top: 0,
						bottom: 10,
					},
				},
			},
		},
	});
})();

// CSI Fairly Widespread
!(function () {
	const ctx = document.getElementById('chart-csi-fw');

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
					text: 'CSI Fairly Widespread',
					padding: {
						top: 0,
						bottom: 10,
					},
				},
			},
		},
	});
})();

// CSI Widespread
!(function () {
	const ctx = document.getElementById('chart-csi-wide');

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
					text: 'CSI Widespread',
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
