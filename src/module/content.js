// 内容模块

function createContent () {
	var box = document.createElement('div');
	box.setAttribute('class', 'content');
	box.innerText = '这是内容';
	document.body.appendChild(box);
}

module.exports = createContent;