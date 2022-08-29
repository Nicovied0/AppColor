let colorPiker = document.getElementById('colorPiker')

colorPiker.addEventListener('input', e =>{
  let background = document.getElementById('background')
  background.style.background = e.target.value
})