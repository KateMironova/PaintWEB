var data;

function EmptyFigurePlugin() {
    this.name = "Empty Figure";
    this.data = new Data();
    data = this.data;
    this.figure;
    this.command = new Command(this.data);
}

EmptyFigurePlugin.prototype.addToolBar = function() {
    var div = document.createElement("div");
    div.appendChild(addToolColorItem("Color", true, this.command.changeColor));
    div.appendChild(addDropDownToolItem("Width", ["1", "3", "5"], false, this.command.changeWidth));
    div.appendChild(addDropDownToolItem("Type", ["Rectangle", "RoundRectangle", "Line", "Ellipse"], false, this.command.changeType));
    document.getElementById("toolBar").appendChild(div);
}

function addToolColorItem(imageName, first, func) {
    var div = document.createElement("input");
    div.type = "color";
    div.value = data.color;

    div.style.width = 35;
    div.style.height = 35;
    div.style.marginBottom = 5;
    div.style.marginTop = 5;
    if(first === true)
        div.style.marginLeft = 15;
    else
        div.style.marginLeft = 5;
    div.style.marginRight = 0;
    div.style.padding = 0;

    div.onchange = function () { func(this.value); };

    return div;
}
function addDropDownToolItem(name, list, first, func) {
    var div = document.createElement("div");
    div.classList = "glyphicon glyphicon-text-width";

    div.style.marginBottom = 5;
    div.style.marginTop = 5;
    if(first === true)
        div.style.marginLeft = 15;
    else
        div.style.marginLeft = 5;
    div.style.marginRight = 0;
    div.style.padding = 0;

    var btn = document.createElement("button");
    btn.classList = "btn navbar-btn";
    btn.textContent = name;

    div.appendChild(btn);
    div.appendChild(getDropDownList(list, func));

    return div;
}


function getDropDownList(list, func) {

    var hover = document.createElement("div");
    hover.classList = "btn navbar-btn";

    for (var i = 0; i < list.length; i++){
        var a = document.createElement("a");
        a.textContent = list[i];
        a.classList = "comboBox";

        a.onclick = function () { func(this.textContent); };

        hover.appendChild(a);
    }
    return hover;
}


function Command(data) {
    this.data = data;
}

Command.prototype.changeWidth = function (width) {
    data.width = parseInt(width);
};

Command.prototype.changeType = function (type) {
    switch (type) {
		case "RoundRectangle": data.type = FType.RRECT; break;
        case "Rectangle": data.type = FType.RECT; break;
        case "Line": data.type = FType.LINE; break;
        case "Ellipse": data.type = FType.ELLIPSE; break;

    }
    
};

Command.prototype.changeColor = function (color) {
    data.color = color;
};

