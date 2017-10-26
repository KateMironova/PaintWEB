var tablet;
var currentPath;
var pointX;
var pointY;
var svgNS = "http://www.w3.org/2000/svg";
var svg = document.getElementById("tablet");
var activeLineWidthBtn;
var lineWidthBtns;
var activeLineColorBtn;
var lineColorBtns;

var pDrawLeft;
var pDrawTop;

var isDrawingStarted = false;
    
function draw() 
{
    tablet = document.getElementById('tablet');
    tablet.addEventListener("mousedown", Down);
    tablet.addEventListener("mousemove", Move);
    tablet.addEventListener("mouseup", Up);
	
	pDrawLeft = document.getElementById('tablet').getBoundingClientRect().left;
	pDrawTop = document.getElementById('tablet').getBoundingClientRect().top;
	
}
function Down(e)
{
    //pointX = e.pageX - pDrawLeft;
    //pointY = e.pageY - pDrawTop;
	pointX = e.offsetX;;
	pointY = e.offsetY;
}
function Move(e)
{
	 if (e.buttons === 1 && xcommand.plugin !== null) {
        xcommand.plugin.figure = new Figure(new Point(pointX, pointY), new Point(e.offsetX, e.offsetY), xcommand.data);
        if (svg.childElementCount > 0 && isDrawingStarted === true) {
            svg.removeChild(svg.lastChild);
        }
        isDrawingStarted = true;
        svg.appendChild(xcommand.plugin.figure.getPath());
    }
}
function Up(e)
{
	 if (xcommand.plugin !== null) {
        xcommand.plugin.figure = new Figure(new Point(pointX, pointY), new Point(e.offsetX, e.offsetY), xcommand.data);
        svg.appendChild(xcommand.plugin.figure.getPath());
        isDrawingStarted = false;
    }
}


