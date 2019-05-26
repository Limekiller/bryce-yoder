window.onload = function() {
    window.setTimeout(function(){ letterAnim(); }, 1000);
}

function letterAnim() {
    var title = "BRYCE YODER";
    var header = document.getElementById('name');
    window.setTimeout(function() {header.className="hidden"; }, 3000);
    for (var i=0;i<title.length;i++){
        appendLetter(header, title[i], i);
    }
}

function appendLetter(el, letter, i) {
    window.setTimeout(function() {el.innerHTML = el.innerHTML + letter;}, 75*(i*2));
}

function goToURLHome(link) {
    window.setTimeout(function(){ window.location=link;}, 500);
    document.getElementById("home_container").style.setProperty('opacity', '0', 'important');
}
