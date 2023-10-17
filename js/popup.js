
let menuBstn = document.querySelector('.tru');

let menus = document.querySelector('.block_inner_social_service');

let LinkModal = document.getElementById('popup');

let ModalWindow = document.getElementById('popup_window');

let closeWindow = document.getElementById('close');


closeWindow.addEventListener('click', function(){
	
	ModalWindow.classList.remove('active');
});


LinkModal.addEventListener('click', function(){
	
	ModalWindow.classList.toggle('active');
});

menuBstn.addEventListener('click', function(){
	
	menus.classList.toggle('active');
});


