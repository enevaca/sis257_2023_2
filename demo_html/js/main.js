document.getElementById("myH2").innerHTML = "Hola JavaScript";
document.getElementById("myH2").style.fontSize = "35px";
document.getElementById("myH2").style.color = "red";
document.getElementById("myH2").style.backgroundColor = "yellow";

function myFunction() {
  var x = document.getElementsByClassName("city");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
