// Getting the inputObject

let inputObject = JSON.parse(localStorage.getItem("maxTempArrayData"));

!function(){
  document.getElementById('title-bar-output').innerText = `Forecast Verification for ${inputObject.place} in ${inputObject.month}, ${inputObject.year}`;
}();