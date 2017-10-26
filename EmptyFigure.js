var EmptyFigure = {
    getName()
	{
        return "EmptyFigurePlugin";
    },
	getPluginsMenuItem()
	{
        return $('<div/>', {
            "class": 'checkbox'
        }).append(
            $('<label/>').append(
                $('<input/>', {
                    "type": 'checkbox',
                    "checked": 'checked'
                })
            ).append("Empty Figure")
        )
    },
	getEditMenu() {
       
    },

    getToolBar() {

    },

    getLeftToolBox(){
        return $.parseHTML('\
                        <div class="panel-body pluginElement">\
                            <button type="button" class="btn btn-primary">Empty Figure</button>\
                        </div>\
                        ');
    },

    getRightToolBox(){
        var rightToolBox = $.parseHTML('\
			<div class="panel-body">\
				<label>Type:</label>\
				<div class="btn-group">\
					<button type="button" class="typeBtn btn btn-primary">Rectangle</button>\
					<button type="button" class="typeBtn btn btn-primary">Line</button> \
				</div>\
				<div class="btn-group"> \
					<button type="button" class="typeBtn btn btn-primary">Ellipse</button>\
					<button type="button" class="typeBtn btn btn-primary">RoundRect</button>\
			</div>\
			</div>\
			<div class="panel-body">\
				<button type="button" class="colorBtn btn btn-primary">Color</button>\
			</div>\
			<div class="panel-body\
				<label>Width:</label>\
					<select class="width">\
						<option>1</option>\
						<option>3</option>\
						<option>5</option>\
					</select>\
				</div>\
			</div>\
		');
        $(".typeBtn", rightToolBox).click(this.XCommand.setType);
		$(".colorBtn", rightToolBox).click(this.XCommand.setColor);
		$(".width", rightToolBox).click(this.XCommand.setWidth);
        return rightToolBox;
    },
	
    XCommand: {
        setColor(){
            alert("setColor");
        },
        setType(){
            alert("setType");
        },
        setWidth(){
            alert("setWidth");
        }
    }
};

