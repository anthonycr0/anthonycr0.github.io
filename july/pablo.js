window.onload = function(event) {
    updateSize();
};


window.onresize = function(event) {
    updateSize();
};

function updateSize() {
    if (document.documentElement.clientWidth >= 769) {
        var square = document.getElementById('album-cover');
        var style = window.getComputedStyle(square)
        var height = style.getPropertyValue('height');
        square.style.width = height;
    }
    
}