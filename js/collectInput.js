
let input = [];

function getDataFromTable(){
  for(let i = 0; i < 31; i++){
    let rowData = [];
    for(let j = 0; j < 6; j++){
      let columnData = document.getElementById(`array-${i}-${j}`).value || 0;
      rowData.push(columnData);
    }
    input.push(rowData);
  }
  localStorage.setItem('maxTempArrayData', JSON.stringify(input));
}

function gotoTempResult(){
  window.location.href = "resultTemp.html";
}