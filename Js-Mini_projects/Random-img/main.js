let arrayImages = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','7.jpg','8.jpg','9.jpg',];
let bt = document.querySelector('button');
function GetRandomImage(){
  let rand = Math.floor(Math.random()*arrayImages.length);
  getimage = arrayImages[rand];
  document.getElementById('Myimage').src=`./images/${getimage}`;
}
bt.addEventListener('click',()=>{
  GetRandomImage()
})
let disable = document.getElementById('sawiR')
bt.addEventListener('click',()=>{
  disable.classList.add('kaqaad')
});