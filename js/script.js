function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});;

let burgerMenu = document.querySelector('.header__burger');
let iteratingClass = document.querySelectorAll('.header__burger,.header__menu')
let body = document.body;
burgerMenu.addEventListener('click', (e) => {
	iteratingClass.forEach(item => item.classList.toggle("active"))
	body.classList.toggle('lock');
});