// Utilities
const types = ['Hits', 'False Alarm', 'Misses','Correct Negative']
const days = ['1 Day','2 Day','3 Day','4 Day','5 Day'];
const factorOfChange = ['<=1', '>1 & <2', '>2 & <3', '>3'];


const output = JSON.parse(localStorage.getItem('subdivData'));

console.log(output);

// For PC
!function(){
  const ctx = document.getElementById('chart-pc');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: days, // Chart x axis label
      datasets: [
        {
          label: 'PC',
          data: output.pc, // Data as array HERE
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
            text: 'Percent Correct',
            padding: {
                top: 0,
                bottom: 10
            }
        }
      }
    }
  });
}();


// For HSS
!function(){
  const ctx = document.getElementById('chart-hss');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: days, // Chart x axis label
      datasets: [
        {
          label: 'HSS',
          data: output.hss, // Data as array HERE
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
            text: 'Heidke Skill Score',
            padding: {
                top: 0,
                bottom: 10
            }
        }
      }
    }
  });
}();
