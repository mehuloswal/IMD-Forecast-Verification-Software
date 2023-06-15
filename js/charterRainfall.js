// Utilities
const types = ['Hits', 'Misses', 'False Alarm', 'Correct Negative']
const days = ['1 Day','2 Day','3 Day','4 Day','5 Day'];
const factorOfChange = ['<=1', '>1 & <2', '>2 & <3', '>3'];

const output = JSON.parse(localStorage.getItem('rainfallArrayData'));

console.log(output);


// For all stats
!function(){
  const ctx = document.getElementById('chart-all-stats');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: types, // Chart x axis label
      datasets: [
        {
          label: '1 Day',
          data: [20,30,10,3], // Data as array HERE
          borderWidth: 1
        },
        {
          label: '2 Day',
          data: [20,30,10,3], // Data as array HERE
          borderWidth: 1
        },
        {
          label: '3 Day',
          data: [20,30,10,3], // Data as array HERE
          borderWidth: 1
        },
        {
          label: '4 Day',
          data: [20,30,10,3], // Data as array HERE
          borderWidth: 1
        },
        {
          label: '5 Day',
          data: [20,30,10,3], // Data as array HERE
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
            text: 'All Stats',
            padding: {
                top: 0,
                bottom: 10
            }
        }
      }
    }
  });
}();

// For PoD
!function(){
  const ctx = document.getElementById('chart-pod');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: days,
      datasets: [{
          label: 'PoD',
          data: [3, 5,4,5,2], 
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
            text: 'Prob. of Detection',
            padding: {
                top: 0,
                bottom: 10
            }
        }
      }
    }
  });
}();

// For FBI
!function(){
  const ctx = document.getElementById('chart-fbi');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: days,
      datasets: [{
          label: 'FBI',
          data: [3, 5,4,5,2], 
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
            text: 'Frequency Bias Index',
            padding: {
                top: 0,
                bottom: 10
            }
        }
      }
    }
  });
}();

// For FAR
!function(){
  const ctx = document.getElementById('chart-far');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: days,
      datasets: [{
          label: 'FAR',
          data: [3, 5,4,5,2], 
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
            text: 'False Alarm Ratio',
            padding: {
                top: 0,
                bottom: 10
            }
        }
      }
    }
  });
}();

// For MR
!function(){
  const ctx = document.getElementById('chart-mr');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: days,
      datasets: [{
          label: 'MR',
          data: [3, 5,4,5,2], 
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
            text: 'Miss Rate',
            padding: {
                top: 0,
                bottom: 10
            }
        }
      }
    }
  });
}();

// For PC
!function(){
  const ctx = document.getElementById('chart-pc');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: days,
      datasets: [{
          label: 'PC',
          data: [3, 5,4,5,2], 
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

// For F
!function(){
  const ctx = document.getElementById('chart-f');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: days,
      datasets: [{
          label: 'Freq',
          data: [3, 5,4,5,2], 
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
            text: 'Frequency',
            padding: {
                top: 0,
                bottom: 10
            }
        }
      }
    }
  });
}();


// For CSI
!function(){
  const ctx = document.getElementById('chart-csi');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: days,
      datasets: [{
          label: 'CSI',
          data: [3, 5,4,5,2], 
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
            text: 'Critical Success Index',
            padding: {
                top: 0,
                bottom: 10
            }
        }
      }
    }
  });
}();

// For ETS
!function(){
  const ctx = document.getElementById('chart-ets');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: days,
      datasets: [{
          label: 'ETS',
          data: [3, 5,4,5,2], 
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
            text: 'Equitable Threat Score',
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
      labels: days,
      datasets: [{
          label: 'HSS',
          data: [3, 5,4,5,2], 
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