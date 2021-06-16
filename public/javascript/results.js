var allStatesArray = [
    "Massachusetts",
    "New Hampshire",
    "Maine",
    "Vermont",
    "Rhode Island"
];

var inputForm = document.querySelector("#input");
var stateSelect;

function handleSearchForm(event) {
    event.preventDefault();
  
    var stateInput = document.querySelector('#input').value;
    if(!stateInput || stateInput === "Choose a state...") {
        console.error("No blank inputs allowed");
        return;
    }
}

for(var i = 0; i < allStatesArray.length; i++) {
    stateSelect = document.createElement("option");
    stateSelect.textContent = allStatesArray[i];
    inputForm.appendChild(stateSelect);
  }
  
  document.querySelector("#input-form").addEventListener('submit', handleSearchForm);