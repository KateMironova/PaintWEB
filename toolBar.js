var tAdd = document.getElementById("tAdd");
var tColorF = document.getElementById("tColorF");
var tWidthF = document.getElementById("tWidthF");
var tTypeF = document.getElementById("tTypeF");
var tColorTxt = document.getElementById("tColorTxt");
var tFontTxt = document.getElementById("tFontTxt");
var tAlignTxt = document.getElementById("tAlignTxt");
var tAngleTxt = document.getElementById("tAngleTxt");
var tSave = document.getElementById("tSave");
var tLoad = document.getElementById("tLoad");
var tSaveCloud = document.getElementById("tSaveCloud");
var tLoadCloud = document.getElementById("tLoadCloud");

setToolActions(new xCommand());

function setToolActions(command)
{
	tAdd.onclick = command.addTab;
	tColorF.onclick = command.colorF;
	tWidthF.onclick = command.widthF;
	tTypeF.onclick = command.typeF;
	tColorTxt.onclick = command.colorTxt;
	tFontTxt.onclick = command.fontTxt;
	tAlignTxt.onclick = command.alignTxt;
	tAngleTxt.onclick = command.angleTxt;
	tSave.onclick = command.save;
	tLoad.onclick = command.load
	tSaveCloud.onclick = command.saveCloud;
	tLoadCloud.onclick = command.loadCloud;
}

