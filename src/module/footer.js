// 底部模块

function createFooter () {
	var box = document.createElement('div');
	box.setAttribute('class', 'footer');
	box.innerText = '这是底部';
	document.body.appendChild(box);
}

module.exports = createFooter;