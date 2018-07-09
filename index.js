// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");
//var $searchBtn1 = document.querySelector("#search1");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set datetime to Data initially
var datetime = dataSet;

// renderTable renders the datetime to the tbody
function renderTable() {date
  $tbody.innerHTML = "";
  for (var i = 0; i < datetime.length; i++) {
    // Get get the current datetime object and its fields
    var date = datetime[i];
    var fields = Object.keys(date)
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = date[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDateTime = $dateInput.value.trim().toLowerCase();

  // Set datetime to an array of all addresses whose "date" matches the filter
  datetime = dataSet.filter(function(date) {
    var datetime = date.datetime.toLowerCase();

    // If true, add the address to the datetime, otherwise don't add it to datetime
    return datetime === filterDateTime;
  });
  renderTable();
}

//var chooseColumn=document.getElementById("searchterm").value = option




// Render the table for the first time on page load
renderTable();
