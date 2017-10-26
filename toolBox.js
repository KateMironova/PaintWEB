var pSimple = document.getElementById("pEmpty");

function setPluginActions(command) {
    pSimple.addEventListener("click", function () {
        command.setPlugin(new EmptyFigurePlugin());
    });
}