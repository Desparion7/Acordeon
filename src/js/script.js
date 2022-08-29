const options = document.querySelectorAll('.option');
const textAll = document.querySelectorAll('.text');

function openOption() {
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.remove('active');
	} else {
		closeActive();
		this.nextElementSibling.classList.toggle('active');
	}
}
const closeActive = () => {
	textAll.forEach((text) => text.classList.remove('active'));
};

const clickOutside = (e) => {
	if (
		e.target.classList.contains('title') ||
		e.target.classList.contains('text')
	)
		return;
	closeActive();
};
//////////////////////////////////////////////////
//Próba napisania funkcji do otwierania Enterem
//////////////////////////////////////////////////
function test(e) {
	const test1 = e.target.nextElementSibling;
	if (test1.classList.contains('active')) {
		test1.classList.remove('active');
	} else {
		closeActive();
		test1.classList.toggle('active');
	}
}

///////////////////////////////////
options.forEach((option) => option.addEventListener('click', openOption));
window.addEventListener('click', clickOutside);
//////////////////////////////////////////////////
//Próba napisania funkcji do otwierania Enterem
//////////////////////////////////////////////////
document.addEventListener('keyup', (e) => {
	if (e.code === 'Enter' || e.keyCode === 13) {
		test(e);
	}
});
