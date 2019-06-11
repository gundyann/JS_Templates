window.onload = function(){
  console.log("Dokument wurde geladen");
  init();
  //Do what ou want here


}

// Add your functions here

function init(){
  document.getElementById("button01").addEventListener("click", function(){
    document.getElementById("paragraph01").innerText = "Javascript Works";
  });
}
