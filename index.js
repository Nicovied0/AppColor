
let colorPiker = document.getElementById('colorPiker')

colorPiker.addEventListener('input', e =>{
  let background = document.getElementById('body')
  background.style.background = e.target.value
})


function toastFunction() {
  var x = document.getElementById("toast");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}