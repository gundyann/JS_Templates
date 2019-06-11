window.onload = function(){
  console.log("Dokument wurde geladen");

  //add Click Listener with jquery
  $('#button01').click(function() {

  //Promise Call with .then and .catch
  loadData()
  .then(result => {
    $('#paragraph01').text("Name: "+result.data.first_name+" "+result.data.last_name);
  })
  .catch(error => console.log(error));
});


  //Do what ou want here
}

//Loads a Single Data Object from the API
function loadData() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://reqres.in/api/users/2",
      type: 'GET',
      success: function(data) {
        resolve(data)
      },
      error: function(error) {
        reject(error)
      },
    })
  })
}
