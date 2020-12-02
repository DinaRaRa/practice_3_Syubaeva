let colleague = document.querySelector('.avatar');
colleague.addEventListener('mousemove', showPopup);
function showPopup(){
var elements = document.getElementsByClassName("box-name");
for (var i = 0; i < elements.length; i++) {
	elements[i].classList.toggle("visible");
    console.log('showPopup работает');
}
}