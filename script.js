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



