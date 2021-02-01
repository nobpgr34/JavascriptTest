var span = document.getElementsByClassName('close')[0];
function filterFunction(sel) {
	let type = parseInt(document.querySelector('#typeSelect').value);
	let price = document.querySelector('#priceSelect').value;
	//  console.log( myVal);
	var array = document.querySelectorAll('.product-box__item');

	array.forEach(function (entry) {
		var priceFlag = false;
		var typeFlag = false;
		let temp = entry.querySelector('p').innerText.replace(/\D/g, '');

		if (parseInt(price) === 0 || parseInt(temp) < parseInt(price)) {
			priceFlag = true;
		}

		let atrib = parseInt(entry.getAttribute('type'));
		//console.log(  sel.value+" "+temp);
		if (type === 0 || atrib === type) {
			typeFlag = true;
		}

		if (priceFlag && typeFlag) {
			entry.style.display = 'flex';
		} else {
			entry.style.display = 'none';
		}
	});
}

function addGoods(sel) {
	console.log(sel.target);
	sel = sel.target.parentElement.parentElement;
	console.log(sel.target);
	let price = parseInt(sel.querySelector('p').innerText.replace(/\D/g, ''));
	let quantity = sel.querySelector('input').value;
	let ar = document.querySelectorAll('.red-info');
	if (ar[0].innerText == 'XXX') {
		ar[0].innerText = quantity;
	} else {
		ar[0].innerText = parseInt(ar[0].innerText) + parseInt(quantity);
	}
	if (ar[1].innerText == 'XXX') {
		ar[1].innerText = price * quantity;
	} else {
		ar[1].innerText = parseInt(ar[1].innerText) + price * quantity;
	}
	sel.querySelector('input').value = 0;
}

function openmodal() {
	var modal = document.getElementById('myModal');
	modal.style.display = 'block';
}

var span = null;


function closing() {
	var modal = document.getElementById('myModal');
	modal.style.display = 'none';
}

window.onload = function () {
	let buttonArray = document.querySelectorAll('.product-box__btn');
	buttonArray.forEach(function (button) {
		console.log(button.parentElement.parentElement);
		button.addEventListener(
			'click',
			addGoods,
			button.parentElement.parentElement
		);
	});
};

window.onclick = function (event) {
	var modal = document.getElementById('myModal');
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

function Send() {
	let email = document.querySelector('#email').value;
	let name = document.querySelector('#name').value;
	let emailValidation = ValidateEmail(email);
	let emailName = ValidateName(name);
	if (emailValidation && emailName) {
		document.querySelector('.top-cart-info__item').innerHTML =
			'Товаров в корзине - <span class="red-info">XXX</span>, на сумму <span class="red-info">XXX</span> грн</span';

		document.querySelector('#email').value = '';
		document.querySelector('#name').value = '';
		closing();
		alert('Спасибо за покупки');
	} else {
		alert('Проверьте имя и емаил');
	}
}

function ValidateName(inputText) {
	inputText = inputText.trim();
	if (inputText === '') {
		return false;
	} else {
		return true;
	}
}

function ValidateEmail(inputText) {
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (inputText.match(mailformat)) {
		return true;
	} else {
		//					alert('You have entered an invalid email address!');
		return false;
	}
}
