function init(){
  const form = document.getElementById("regisztralas")
  const uzen = document.getElementById("uzenet")

  form.addEventListener("submit", function(e){
    e.preventDefault();
    form.reset();            
    form.style.display = "none";
    uzen.style.display = "block";
  })

}


document.addEventListener("DOMContentLoaded", init)