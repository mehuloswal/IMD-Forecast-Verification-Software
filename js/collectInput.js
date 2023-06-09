
let input = [];

function getDataFromTable(){
  for(let i = 0; i < 31; i++){
    let rowData = [];
    for(let j = 0; j < 6; j++){
      let columnData = document.getElementById(`array-${i}-${j}`).value || null;
      rowData.push(columnData);
    }
    input.push(rowData);
  }
  console.log(input);
  localStorage.setItem('maxTempArrayData', JSON.stringify(input));
}

function gotoTempResult(){
  window.location.href = "resultTemp.html";
}