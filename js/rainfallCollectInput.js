let inputObject = {
  year: null,
  month: null,
  place: null,
  input: []
}

// Definitions
const obsArr = [];
const day1Arr = [];
const day2Arr = [];
const day3Arr= [];
const day4Arr= [];
const day5Arr = [];
const numRows = 31;
const numCols = 6;

const createArr = (columnNumber) => {
  for(let i = 0; i < numRows; ++i){
      const elementValue = document.getElementById(`array-${i}-${columnNumber}`).value
      switch(columnNumber){
          case 0: {
              obsArr.push(elementValue);
              break;
          }

          case 1: {
              day1Arr.push(elementValue);
              break;
          }

          case 2: {
              day2Arr.push(elementValue);
              break;
          }

          case 3: {
              day3Arr.push(elementValue);
              break;
          }

          case 4: {
              day4Arr.push(elementValue);
              break;
          }

          case 5: {
              day5Arr.push(elementValue);
              break;
          }
      }
      
  }

}


function getDataFromTable(){
  inputObject.year = document.getElementById("year").value;
  inputObject.month = document.getElementById("month").value;
  inputObject.place = document.getElementById("place").value;

  // Creating arrays for day0 to day5
  createArr(0);
  createArr(1);
  createArr(2);
  createArr(3);
  createArr(4);
  createArr(5);

  inputObject.input = [obsArr,day1Arr,day2Arr,day3Arr,day4Arr,day5Arr]
  
  console.log(inputObject);
  localStorage.setItem('rainfallArrayData', JSON.stringify(inputObject));
  gotoTempResult();
}

function gotoTempResult(){
  window.location.href = "resultRainfall.html";
}