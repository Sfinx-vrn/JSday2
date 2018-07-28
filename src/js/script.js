let chooseBtn = document.getElementById('choose'),
		receiveBtn = document.getElementById('receive'),
		heading 	= document.getElementsByTagName('h2')[0],
		nameInput = document.getElementsByClassName('contactform_name')[0],
		phoneInput = document.querySelector('.contactform_phone'),
		mailInput = document.querySelectorAll('.contactform_mail')[0],
		modalOne = document.querySelector('.modal'),
		modalOneClose = document.querySelector('.close'),
		text = document.getElementsByName('message')[0];

function hover() {
	heading.textContent = "Действительно все!";
}

function out() {
	heading.textContent = "Все включено!";
}

heading.addEventListener("mouseenter", hover);
heading.addEventListener("mouseleave", out);

receiveBtn.addEventListener('click', function () {
	modalOne.style.display = 'block';
})

modalOneClose.addEventListener('click', function() {
	modalOne.style.display = 'none';
})

nameInput.addEventListener('input', function() {
	text.value = 'меня кличут ' + nameInput.value + '. И я хочу спросить: ';

	if ( nameInput.value== '') {
		text.value = '';
	}
})
