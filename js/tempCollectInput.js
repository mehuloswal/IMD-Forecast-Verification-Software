
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
      const elementValue = Number(document.getElementById(`array-${i}-${columnNumber}`).value)
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

function createAoA() {

  createArr(0);
  createArr(1);
  createArr(2);
  createArr(3);
  createArr(4);
  createArr(5);

}

function getDataFromTable(){
  inputObject.year = document.getElementById("year").value;
  inputObject.month = document.getElementById("month").value;
  inputObject.place = document.getElementById("place").value;

  // Creating arrays for day0 to day5
  createAoA();


  inputObject.input = [obsArr,day1Arr,day2Arr,day3Arr,day4Arr,day5Arr]
  
  console.log(inputObject);
  localStorage.setItem('tempArrayData', JSON.stringify(inputObject));
  gotoTempResult();
}

function gotoTempResult(){
  window.location.href = "resultTemp.html";
}

document.getElementById("sheetjsexport").addEventListener('click', function() {
  createAoA();
  let tempArr = [obsArr,day1Arr,day2Arr,day3Arr,day4Arr,day5Arr];
  let dates = [];
  for(let i = 1; i <= 31; ++i ){
    dates.push(i);
  }
  tempArr.unshift(dates);
  let transposedArr = tempArr[0].map((ele,i) => tempArr.map(element => element[i] ) );
  /* Create a workbook and worksheet */
  var wb = XLSX.utils.book_new();
  let headers = ["Day","Observed", "1D Ago", "2D Ago", "3D Ago", "4D Ago", "5D Ago"];
  transposedArr.unshift(headers);
  var ws = XLSX.utils.aoa_to_sheet(transposedArr);

  /* Add the worksheet to the workbook */
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');



  let date = new Date();

  let name = "Temperature" + date.getFullYear()+"/"+(date.getMonth()+1)+"/"+ date.getDate() + " -FOR- " + document.getElementById("year").value +" "+ document.getElementById("month").value +" "+ document.getElementById("place").value + ".xlsx";
  // let name = "Temperature-" + date.getFullYear()+"/"+(date.getMonth()+1)+"/"+ date.getDate() + " " + date.getHours() + "-" + date.getMinutes() + ".xlsx";
  /* Export to file (start a download) */
  XLSX.writeFile(wb, name);
});




document.getElementById("uploadForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const fileInput = document.getElementById("excelFile");
  const file = fileInput.files[0];
  console.log(fileInput);
  console.log(file);
  if(file){
    const fileReader = new FileReader();
    fileReader.onload = function(e){
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, {type : 'array'});
      console.log(data);
      console.log(workbook);
      const sheetName = workbook.SheetNames[0];
      console.log(sheetName)
      const worksheet = workbook.Sheets[sheetName];
      console.log(worksheet);
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      console.log(jsonData);

    for(let i = 0; i < 31; ++i){
      for(let j = 0; j < 6; ++j){
        const cell = document.getElementById(`array-${i}-${j}`)
        cell.value = jsonData[i + 1][j + 1];
      }
    }



    }
    fileReader.readAsArrayBuffer(file);
  }

})

