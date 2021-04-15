/*/////////////////////////////////////////////////////////////////////
////////////////////////LOADER/////////////////////////////////////////
/////////////////////////////////////////////////////////////////////*/

let body = document.body;
body.onload=function(){
	body.className += ' loaded';
}


/*/////////////////////////////////////////////////////////////////////
////////////////////////NAVIGATION BAR/////////////////////////////////
/////////////////////////////////////////////////////////////////////*/




let navE = document.getElementById("nav-bar");
let divHeight = window.innerHeight*0.99;
let aLink = document.getElementsByClassName("nav-link");

window.onscroll = function() {scrollFunction()};
scrollFunction();

function resetColor() {
	
	for (i = 0; i < aLink.length; i++) {
	  aLink[i].className = aLink[i].className.replace(" active-link", "");
	}
}

function scrollFunction() {
  
  if (document.body.scrollTop > (divHeight*6) || document.documentElement.scrollTop > (divHeight*6)){
	  resetColor();
	  aLink[6].className += " active-link";
  }
  else if (document.body.scrollTop > (divHeight*5) || document.documentElement.scrollTop > (divHeight*5)){
	  resetColor();
	  aLink[5].className += " active-link";
  }
  else if (document.body.scrollTop > (divHeight*4) || document.documentElement.scrollTop > (divHeight*4)){
	  resetColor();
	  aLink[4].className += " active-link";
  }
  else if (document.body.scrollTop > (divHeight*3) || document.documentElement.scrollTop > (divHeight*3)) {
	  resetColor();
	  aLink[3].className += " active-link";
  }
  else if (document.body.scrollTop > (divHeight*2) || document.documentElement.scrollTop > (divHeight*2)) {
	  resetColor();
	  aLink[2].className += " active-link";
  }
  else if (document.body.scrollTop > (divHeight*0.95) || document.documentElement.scrollTop > (divHeight*0.95)) {
	  resetColor();
	  aLink[1].className += " active-link";
  }
  else {
	  resetColor();
	  aLink[0].className += " active-link";
  }
	  
  
   if (document.body.scrollTop > 8 || document.documentElement.scrollTop > 8){
	  navE.classList.add("nav-change");
  }
  else
  {
	   navE.classList.remove("nav-change");
	  
  }
}



/*/////////////////////////////////////////////////////////////////////
////////////////////////PORTFOLIO PAGES////////////////////////////////
/////////////////////////////////////////////////////////////////////*/

let num = document.getElementsByClassName('page-number');


function togglePagePics(n)
{
	let nums = document.getElementsByClassName("page-number");
	let pics = document.getElementsByClassName("portfolio-pictures");

	for(i=0; i<nums.length; ++i)
	{
		nums[i].classList.remove("active-number");
		pics[i].classList.remove("active-pics");
	}
	nums[n].classList.add("active-number");
	pics[n].classList.add("active-pics");
}
togglePagePics(0);
num[0].onclick = function() {togglePagePics(0);}
num[1].onclick = function() {togglePagePics(1);}
num[2].onclick = function() {togglePagePics(2);}
num[3].onclick = function() {togglePagePics(3);}


/*/////////////////////////////////////////////////////////////////////
////////////////////////PICTURE DISPLAY////////////////////////////////
/////////////////////////////////////////////////////////////////////*/

let picContainer = document.getElementById('pic-container');
let imgs = document.getElementsByClassName('port-pics');
let pic = document.getElementById("pic");
let caption = document.getElementById("caption");

function picDisplay(n)
{
  picContainer.style.display = "block";
  pic.src = imgs[n].src;
  caption.innerHTML = imgs[n].alt;
}


imgs[0].onclick = function() {picDisplay(0);}
imgs[1].onclick = function() {picDisplay(1);}
imgs[2].onclick = function() {picDisplay(2);}
imgs[3].onclick = function() {picDisplay(3);}
imgs[4].onclick = function() {picDisplay(4);}
imgs[5].onclick = function() {picDisplay(5);}
imgs[6].onclick = function() {picDisplay(6);}
imgs[7].onclick = function() {picDisplay(7);}
imgs[8].onclick = function() {picDisplay(8);}
imgs[9].onclick = function() {picDisplay(9);}
imgs[10].onclick = function() {picDisplay(10);}
imgs[11].onclick = function() {picDisplay(11);}
imgs[12].onclick = function() {picDisplay(12);}
imgs[13].onclick = function() {picDisplay(13);}
imgs[14].onclick = function() {picDisplay(14);}
imgs[15].onclick = function() {picDisplay(15);}
imgs[16].onclick = function() {picDisplay(16);}
imgs[17].onclick = function() {picDisplay(17);}
imgs[18].onclick = function() {picDisplay(18);}
imgs[19].onclick = function() {picDisplay(19);}
imgs[20].onclick = function() {picDisplay(20);}
imgs[21].onclick = function() {picDisplay(21);}
imgs[22].onclick = function() {picDisplay(22);}
imgs[23].onclick = function() {picDisplay(23);}


picContainer.onclick = function() { 
	picContainer.style.display = "none";
}
/*
var close = document.getElementById("close");

close.onclick = function() { 
  picContainer.style.display = "none";
}
*/
/*/////////////////////////////////////////////////////////////////////
////////////////////////SEND BUTTON////////////////////////////////////
/////////////////////////////////////////////////////////////////////*/

var send = document.getElementById('send');

send.onclick = function() {
	window.alert("Thank you for your feedback!");
}






