
let colorPiker = document.getElementById('colorPiker')

colorPiker.addEventListener('input', e => {
  let background = document.getElementById('body')
  background.style.background = e.target.value
})


function toastFunction() {
  var x = document.getElementById("toast");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

window.addEventListener('load', init, false);
function init() {
  let div = document.querySelector('.container');
  div.style.visibility = 'visible';
  let boton = document.querySelector('#btn');
  boton.addEventListener('click', function (e) {
    if (div.style.visibility === 'visible') {
      div.style.visibility = 'hidden';
    }
  }, false);
  
};


