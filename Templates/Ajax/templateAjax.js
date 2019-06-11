
let url = "https://reqres.in/api/users/2";

function loadData(){ // AJAX call that gets a Data Object from the API
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
        document.getElementById("paragraph01").innerHTML = ('Name: '+obj.data.last_name +  ' ' +obj.data.first_name);
    } else {
      // Do error handling here
    }
  };
  xhttp.open("GET", url);
  xhttp.send();
}
