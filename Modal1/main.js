var modal = document.getElementById('mojModal');

var dugme = document.getElementById("dugme");

var span = document.getElementsByClassName("close")[0];

dugme.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}