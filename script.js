function mostrarMensaje(){

  document.getElementById("mensaje").innerHTML =
  "martineztorres1725@gmail.com | +52 5525624519";

}

window.addEventListener("load", () => {

  setTimeout(() => {

    document.getElementById("splash").style.display = "none";

  }, 3000);

});