// 头部模块

function createHeader () {
	var box = document.createElement('div');
	box.setAttribute('class', 'header');
	box.innerText = '这是头部';
	document.body.appendChild(box);
}

module.exports = createHeader;