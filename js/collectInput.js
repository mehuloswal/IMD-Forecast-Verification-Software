
let inputObject = {
  year: null,
  month: null,
  place: null,
  input: []
}

function getDataFromTable(){
  inputObject.year = document.getElementById(`year`).value;
  inputObject.month = document.getElementById(`month`).value;
  inputObject.place = document.getElementById(`place`).value;

  for(let i = 0; i < 31; i++){
    let rowData = [];
    for(let j = 0; j < 6; j++){
      let columnData = document.getElementById(`array-${i}-${j}`).value || null;
      rowData.push(columnData);
    }
    inputObject.input.push(rowData);
  }
  console.log(inputObject);
  localStorage.setItem('maxTempArrayData', JSON.stringify(inputObject));
}

function gotoTempResult(){
  window.location.href = "resultTemp.html";
}