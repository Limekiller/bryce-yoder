window.onload = function() {
    var x = document.getElementsByClassName("exlink");
    for (var i = 0; i < x.length; i++) {
        x[i].onclick = function(element) { outAnim(); };
    }
}

function outAnim () {
    var y = document.getElementsByClassName("body_container");
    y[0].style.animation = 'slide-down 0.4s ease forwards';
}
