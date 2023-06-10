// Utilities
const dates = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31',];
const factorOfChange = ['<=1', '>1 & <2', '>2 & <3', '>3'];






// For line
!function(){
  const ctx = document.getElementById('chart-line');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates, // Chart x axis label
      datasets: [
        {
          label: '1 Day',
          data: [1, 19, 3, 5, 2, 3], // Data as array HERE
          borderWidth: 1
        },
        {
          label: '2 Day',
          data: [1, 17, 3, 5, 2, 3], // Data as array HERE
          borderWidth: 1
        },
        {
          label: '3 Day',
          data: [1, 19, 3, 8, 2, 3], // Data as array HERE
          borderWidth: 1
        },
        {
          label: '4 Day',
          data: [1, 19, 6, 5, 2, 3], // Data as array HERE
          borderWidth: 1
        },
        {
          label: '5 Day',
          data: [1, 19, 3, 5, 2, 1], // Data as array HERE
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      animation: {
        duration: 600
      },
      plugins: {
        title: {
            display: true,
            text: 'Absolute Error',
            padding: {
                top: 0,
                bottom: 10
            }
        }
      }
    }
  });
}();

// For Bar
!function(){
  const ctx = document.getElementById('chart-bar');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: factorOfChange,
      datasets: [{
          label: '1 Day',
          data: [13,12,6], 
          borderWidth: 1
        },
        { // Add more Datasets like this
          label: '2 Day', // Your Label goes here
          data: [9,11,12], // Your Data goes here
          borderWidth: 2
        },
        { // Add more Datasets like this
          label: '3 Day', // Your Label goes here
          data: [9,11,12], // Your Data goes here
          borderWidth: 2
        },
        { // Add more Datasets like this
          label: '4 Day', // Your Label goes here
          data: [9,11,12], // Your Data goes here
          borderWidth: 2
        },
        { // Add more Datasets like this
          label: '5 Day', // Your Label goes here
          data: [9,11,12], // Your Data goes here
          borderWidth: 2
        }
      ]
    },
    
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      animation: {
        duration: 600
      },
      plugins: {
        title: {
            display: true,
            text: 'Error Frequency in Range',
            padding: {
                top: 0,
                bottom: 10
            }
        }
      }
    }
  });
}();

// Pie Graph for RMSE

!function(){
  const ctx = document.getElementById('chart-pie');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: factorOfChange,
      datasets: [{
          label: '1 Day',
          data: [0.4,0.23,0.95,0.55], 
          borderWidth: 1
        }
      ]
    },
    
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      animation: {
        duration: 600
      },
      plugins: {
        title: {
            display: true,
            text: 'Root Mean Square Errors',
            padding: {
                top: 0,
                bottom: 10
            }
        }
      }
    }
  });
}();