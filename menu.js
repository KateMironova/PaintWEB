var mAdd = document.getElementById("mAdd");
var mDel = document.getElementById("mDel");
var mRename = document.getElementById("mRename");
var mColor = document.getElementById("mColor");
var mWidth = document.getElementById("mWidth");
var mType = document.getElementById("mType");
var mColorTxt = document.getElementById("mColorTxt");
var mFontTxt = document.getElementById("mFontTxt");
var mAlignTxt = document.getElementById("mAlignTxt");
var mAngleTxt = document.getElementById("mAngleTxt");
//var mEmptyFigure = document.getElementById("mEmptyFigure");
//var mFigureTxt = document.getElementById("mFigureTxt");
//var mFigureImg = document.getElementById("mFigureImg");
var mLanguage = document.getElementById("mLanguage");
var mSkin = document.getElementById("mSkin");
var mHelp = document.getElementById("mHelp");
var mAbout = document.getElementById("mAbout");

setMenuActions(new xCommand());

function setMenuActions(command)
{
	mAdd.onclick = command.addTab;
	mDel.onclick = command.deleteTab;
	mRename.onclick = command.renameTab;
	mColor.onclick = command.colorF;
	mWidth.onclick = command.widthF;
	mType.onclick = command.typeF;
	mColorTxt.onclick = command.colorTxt;
	mFontTxt.onclick = command.fontTxt;
	mAlignTxt.onclick = command.alignTxt;
	mAngleTxt.onclick = command.angleTxt;
//	mEmptyFigure.onclick = command.Plugin;
//	mFigureTxt.onclick = command.Plugin;
//	mFigureImg.onclick = command.Plugin;
	mLanguage.onclick = command.language;
	mSkin.onclick = command.skin;
	mHelp.onclick = command.help;
	mAbout.onclick = command.about;
}

