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
