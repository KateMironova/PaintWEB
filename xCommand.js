
function xCommand()
{
	this.data = null;
	this.plugin = null;
}
xCommand.prototype.addTab = function()
{
	alert("addTab");
};

xCommand.prototype.deleteTab = function()
{
	alert("deleteTab");
};

xCommand.prototype.renameTab = function()
{
	alert("renameTab");
};

xCommand.prototype.colorF = function()
{
	alert("colorFigure");
};

xCommand.prototype.widthF = function()
{
	alert("widthFigure");
};

xCommand.prototype.typeF = function()
{
	alert("typeFigure");
};

xCommand.prototype.colorTxt = function()
{
	alert("colorText");
};

xCommand.prototype.fontTxt = function()
{
	alert("fontText");
};

xCommand.prototype.alignTxt = function()
{
	alert("alignText");
};

xCommand.prototype.angleTxt = function()
{
	alert("angleText");
};

xCommand.prototype.Plugin = function()
{
	alert("Plugin");
};

xCommand.prototype.language = function()
{
	alert("changeLanguage");
};

xCommand.prototype.skin = function()
{
	alert("changeSkin");
};

xCommand.prototype.help = function()
{
	alert("showHelp");
};

xCommand.prototype.about = function()
{
	alert("showAbout");
};

xCommand.prototype.save = function()
{
	alert("save");
};

xCommand.prototype.load = function()
{
	alert("load");
};

xCommand.prototype.saveCloud = function()
{
	alert("save in Cloud");
};

xCommand.prototype.loadCloud = function()
{
	alert("load from Cloud");
};

xCommand.prototype.setPlugin = function (plugin) {
    if (this.plugin === null || this.plugin.name !== plugin.name) {
        this.plugin = plugin;
        this.data = plugin.data;
        plugin.addToolBar();
    }
};

