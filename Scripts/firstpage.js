addLoadEvent(nav);
addLoadEvent(hideshow);

function nav() {
    var nav = document.getElementById("nav");
    var links = nav.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            navseult(this);
            return false;
        }
    }
}
function navseult(whicnav) {
    var nav = document.getElementById("nav");
    var links = nav.getElementsByTagName("a");
    var nav2 = document.getElementsByClassName("nav2");
    var nav3 = document.getElementsByClassName("nav3");
    if (whicnav == links[0]) {
        nav2[0].style.left = "885px";
        nav3[0].style.left = "-9999px";
        links[0].style.backgroundColor = "white";
        links[0].style.color = "black";

    }
    if (whicnav == links[1]) {
        nav3[0].style.left = "940px";
        nav2[0].style.left = "-9999px";
        links[1].style.backgroundColor = "white";
        links[1].style.color = "black";
    }
}

function hideshow() {
    var nav = document.getElementById("nav");
    var links = nav.getElementsByTagName("a");
    var nav2 = document.getElementsByClassName("nav2");
    var nav3 = document.getElementsByClassName("nav3");
    document.onclick = function (event) {
        var e = event || window.event;
        var aim = e.srcElement || e.target;
        if (e.srcElement) {
            var aim = e.srcElement;
            if (aim != links[0]) {
                nav2[0].style.left = "-9999px";
                links[0].style.backgroundColor = "black";
                links[0].style.color = "white";
            }
            if (aim != links[1]) {
                nav3[0].style.left = "-9999px";
                links[1].style.backgroundColor = "black";
                links[1].style.color = "white";
            }
        } else {
            var aim = e.target;
            if (aim != links[0]) {
                nav3[0].style.left = "-9999px";
                nav2[0].style.left = "-9999px";
                links[0].style.backgroundColor = "black";
                links[0].style.color = "white";
        }
        }
    }
}
