var FType = {
    RECT: 0,
    LINE: 1,
    RRECT: 2,
    ELLIPSE: 3,
};

var svgNS = "http://www.w3.org/2000/svg";

function Data() {
    this.color = "#000000";
    this.width = 1;
    this.type = FType.RECT;
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function Figure(start, end, data) {
    this.data = data;
    if (data.type !== FType.LINE) {
        this.start = new Point(Math.min(start.x, end.x), Math.min(start.y, end.y));
        this.end = new Point(Math.max(start.x, end.x), Math.max(start.y, end.y));
    }
    else {
        this.start = start;
        this.end = end;
    }
    this.width;
    this.height;
    
    this.setSize();
}


Figure.prototype.getPath = function () {

    var currentPath;
    switch (this.data.type) {
        case FType.RECT:
            currentPath = document.createElementNS(svgNS,"rect");
            currentPath.setAttributeNS(null, "x", this.start.x);
            currentPath.setAttributeNS(null, "y", this.start.y);
            currentPath.setAttributeNS(null, "width", this.width);
            currentPath.setAttributeNS(null, "height", this.height);
            break;
        case FType.ELLIPSE:
            currentPath = document.createElementNS(svgNS, "ellipse");
            currentPath.setAttributeNS(null, "cx", this.start.x + this.width / 2);
            currentPath.setAttributeNS(null, "cy", this.start.y + this.height / 2);
            currentPath.setAttributeNS(null, "rx", this.width/2);
            currentPath.setAttributeNS(null, "ry", this.height / 2);
            break;
        case FType.RRECT:
            currentPath = document.createElementNS(svgNS, "rect");
            currentPath.setAttributeNS(null, "x", this.start.x);
            currentPath.setAttributeNS(null, "y", this.start.y);
            currentPath.setAttributeNS(null, "width", this.width);
            currentPath.setAttributeNS(null, "height", this.height);
            currentPath.setAttributeNS(null, "rx", 10);
            break;
        case FType.LINE:
            currentPath = document.createElementNS(svgNS, "line");
            currentPath.setAttributeNS(null, "x1", this.start.x);
            currentPath.setAttributeNS(null, "y1", this.start.y);
            currentPath.setAttributeNS(null, "x2", this.end.x);
            currentPath.setAttributeNS(null, "y2", this.end.y);
            break;
    }
    currentPath.setAttributeNS(null, 'stroke', this.data.color);
    currentPath.setAttributeNS(null, 'stroke-width', this.data.width);
    currentPath.setAttributeNS(null, 'fill', 'none');
    return currentPath;
};

Figure.prototype.setSize = function () {
    this.width = Math.abs(this.end.x - this.start.x);
    this.height = Math.abs(this.end.y - this.start.y); 

    
};

function SVGConstructor(type, start, width, height) {

    switch (type)
    {
        case FType.RECT:
            return "M" + start.x + " " + start.y +
            " h" + width +
            " v" + height +
                " h" + -1 * width + " Z";
        case FType.ELLIPSE:
            return "M" + start.x + " " + start.y +
                "rx " + (width / 2) +
                " ry " + (height / 2) +
                " cx" + (start.x + width / 2) + 
                " cy" + (start.y + height / 2) ;
        case FType.RRECT:
            return "M" + start.x + " " + start.y +
                " h" + width +
                " v" + height +
                " h" + -1 * width + " rx 10 Z";
    }
}