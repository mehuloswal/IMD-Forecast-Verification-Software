// Remove old data
localStorage.removeItem("maxTempArrayData");

const years = ['2023', '2022', '2021', '2020'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const places = ['Pune', 'Mumbai', 'Satara'];

// Initial Year Rendering in Select Button
!function(){
  let yearSelectors = '';

  for (const key in years) {
    yearSelectors += `<option value="${years[key]}">${years[key]}</option>`
  }

  document.querySelector('#year').innerHTML = yearSelectors;
}();

// Initial Month Rendering in Select Button
!function(){
  let monthSelectors = '';

  for (const key in months) {
    monthSelectors += `<option value="${months[key]}">${months[key]}</option>`
  }

  document.querySelector('#month').innerHTML = monthSelectors;
  
}();

// Initial Place Rendering in Select Button
!function(){
  let placeSelectors = '';

  for (const key in places) {
    placeSelectors += `<option value="${places[key]}">${places[key]}</option>`
  }

  document.querySelector('#place').innerHTML = placeSelectors;
  
}();

// Add active
function addActive(ele){
  
}