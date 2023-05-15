//BTN 
var btn1 = document.querySelector('#btn-mostrar-senha');
var btn2 = document.querySelector('#btn-mostrar-senha2');

//svg
var i1 = document.querySelector('#svg1');
var i2 = document.querySelector('#svg2');
var i3 = document.querySelector('#svg3');
var i4 = document.querySelector('#svg4');

//input
var ip1 = document.querySelector('#pass');
var ip2 = document.querySelector('#confPass');


btn1.addEventListener('click', ()=>{
    if(ip1.type === "password"){
      ip1.type = "text";

      i1.classList.toggle('hidden');
      i2.classList.toggle('hidden');
    }else{
      ip1.type = "password";

      i1.classList.toggle('hidden');
      i2.classList.toggle('hidden');
    }
});


btn2.addEventListener('click', ()=>{
  if(ip2.type === "password"){
    ip2.type = "text";

    i3.classList.toggle('hidden');
    i4.classList.toggle('hidden');
  }else{
    ip2.type = "password";

    i3.classList.toggle('hidden');
    i4.classList.toggle('hidden');
  }
});