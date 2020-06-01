fetch("https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall").then(response => response.json()).then(response => listOfItems(response))

function listOfItems(n){
    let currentList = document.getElementById("list");
    n.forEach(items => {
    let newItem = document.createElement("div");
    newItem.innerText = items;
    newItem.classList.add("mystyle");
    currentList.appendChild(newItem);
    
    })
}

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#list *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

function inputFunction(name){
    fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall', {
  method: 'POST',
  body: JSON.stringify({message: name.value})
}).then(function (response) {
  if (response.status == 200) {
    console.log(response)
  } else {console.log("Oh no!")}
})
  return false;
}


AOS.init({
  duration : 900,
})





