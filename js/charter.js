// Utilities
const dates = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31',];
const factorOfChange = ['No Change', 'Appreciable Change', 'Marked Rise/Fall'];




// For line
!function(){
  const ctx = document.getElementById('chart-line');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates, // Chart x axis label
      datasets: [{
        label: 'Absolute',
        data: [1, 19, 3, 5, 2, 3], // Data as array HERE
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
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
        label: '# of Votes',
        data: [13,12,6],
        borderWidth: 1
      }]
    },
    
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}();