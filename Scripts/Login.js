addLoadEvent(nav);
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
        nav3[0].style.left = "972px";
        nav2[0].style.left = "-9999px";
        links[1].style.backgroundColor = "white";
        links[1].style.color = "black";
    }
}
