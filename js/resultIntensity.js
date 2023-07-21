let inputObject = JSON.parse(localStorage.getItem("intensityData"));

!function(){

  if(inputObject != null){
    document.getElementById('title-bar-output').innerText = `Forecast Verification for ${inputObject.place}\n In the month of ${inputObject.month}, ${inputObject.year}`;
  }
  else {
    document.getElementById('title-bar-output').innerText = `You dont have any result data inputted`;
  }
}();

