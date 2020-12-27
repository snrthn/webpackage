// 内容模块

function createContent () {
	var box = document.createElement('div');
	box.innerText = '这是内容';
	document.body.appendChild(box);
}

module.exports = createContent;