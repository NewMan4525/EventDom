'use strict';

const body = document.querySelector('body').style.backgroundColor = '#202124';
////___________________________________________________________________________

const btnColSelect = document.querySelector('#btn');
const inputText = document.querySelector('#text');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');
const btnStealth = document.querySelector('#e_btn');
const inputRange = document.querySelector('#range');
const span = document.querySelector('#range-span');

const colors = [
	'Black',
	'Navy',
	'DarkBlue',
	'MediumBlue',
	'Blue',
	'Dark Green',
	'Green',
	'Teal',
	'Dark Cyan',
	'DeepSkyBlue',
	'DarkTurquoise',
	'MediumSpringGreen',
	'Lime',
	'SpringGreen',
	'Aqua',
	'Cyan',
	'MidnightBlue',
	'DodgerBlue',
	'LightSeaGreen',
	'ForestGreen',
	'SeaGreen',
	'DarkSlateGray',
	'LimeGreen',
	'MediumSeaGreen',
	'Turquoise',
	'RoyalBlue',
	'SteelBlue',
	'DarkSlateBlue',
	'MediumTurquoise',
	'Indigo',
	'DarkOliveGreen',
	'CadetBlue',
	'CornflowerBlue',
	'MediumAquaMarine',
	'DimGray',
	'SlateBlue',
	'OliveDrab',
	'SlateGray',
	'LightSlateGray',
	'MediumSlateBlue',
	'LawnGreen',
	'Chartreuse',
	'Aquamarine',
	'Maroon',
	'Purple',
	'Olive',
	'Gray',
	'SkyBlue',
	'LightSkyBlue',
	'BlueViolet',
	'DarkRed',
	'DarkMagenta',
	'SaddleBrown',
	'DarkSeaGreen',
	'LightGreen',
	'MediumPurple',
	'DarkViolet',
	'PaleGreen',
	'DarkOrchid',
	'YellowGreen',
	'Sienna',
	'Brown',
	'DarkGray',
	'LightBlue',
	'GreenYellow',
	'PaleTurquoise',
	'LightSteelBlue',
	'PowderBlue',
	'FireBrick',
	'DarkGoldenRod',
	'MediumOrchid',
	'RosyBrown',
	'DarkKhaki',
	'Silver',
	'MediumVioletRed',
	'IndianRed',
	'Peru',
	'Chocolate',
	'Tan',
	'LightGray',
	'PaleVioletRed',
	'Thistle',
	'Orchid',
	'GoldenRod',
	'Crimson',
	'Gainsboro',
	'Plum',
	'BurlyWood',
	'LightCyan',
	'Lavender',
	'DarkSalmon',
	'Violet',
	'PaleGoldenRod',
	'LightCoral',
	'Khaki',
	'AliceBlue',
	'HoneyDew',
	'Azure',
	'SandyBrown',
	'Wheat',
	'Beige',
	'WhiteSmoke',
	'MintCream',
	'GhostWhite',
	'Salmon',
	'AntiqueWhite',
	'Linen',
	'LightGoldenRodYellow',
	'OldLace',
	'Red',
	'Fuchsia',
	'Magenta',
	'DeepPink',
	'OrangeRed',
	'Tomato',
	'HotPink',
	'Coral',
	'Darkorange',
	'LightSalmon',
	'Orange',
	'LightPink',
	'Pink',
	'Gold',
	'PeachPuff',
	'NavajoWhite',
	'Moccasin',
	'Bisque',
	'MistyRose',
	'BlanchedAlmond',
	'PapayaWhip',
	'LavenderBlush',
	'SeaShell',
	'Cornsilk',
	'LemonChiffon',
	'FloralWhite',
	'Snow',
	'Yellow',
	'LightYellow',
	'Ivory',
	'White'
];
const primaryColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];

function selectColor() {

	if (primaryColors.includes(inputText.value)) {
		square.style.backgroundColor = inputText.value;
	} else {
		inputText.value = null;
		inputText.placeholder = 'это не цвет радуги';
		setTimeout(() => {
			inputText.placeholder = 'только 7 цветов радуги.';
		}, 2000);

		console.log(primaryColors);
	}
	setTimeout(() => {
		inputText.value = null;
	}, 2000);
}

function enterKey(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		selectColor();
	}
}

function stealth() {
	btnStealth.style.cssText = "display:none";
	setTimeout(() => {
		btnStealth.style.cssText = "display:block;";
	}, 2000);
}

function funStack(event) {

	function getRadius(event) {
		span.textContent = event.target.value;
		circle.style.cssText = 'width:' +
			`${event.target.value}` + '%;height:' +
			`${event.target.value}` + '%;' +
			'max-width:100%;max-height:100%;';
	}

	function forFun(event) {
		const link = document.querySelector('a');
		link.style.color = colors[`${event.target.value}`];
	}

	getRadius(event);
	forFun(event);
}


inputRange.max = '140';
inputRange.defaultValue = '70';
inputText.placeholder = 'только 7 цветов радуги.';
btnColSelect.addEventListener('click', selectColor); //выбрать цвет через кнопку
inputText.addEventListener('keydown', enterKey); //теперь можно и по ентеру цвет выбирать, 4fun)
btnStealth.addEventListener('click', stealth);
inputRange.addEventListener('input', funStack);