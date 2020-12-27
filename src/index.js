// 模块装配

var createHeader = require('./module/header');
var createContent = require('./module/content');
var createFooter = require('./module/footer');

function installMod () {
	createHeader();
	createContent();
	createFooter();
}

installMod();