addLoadEvent(showsel);
addLoadEvent(nav);
addLoadEvent(hideshow);
addLoadEvent(shift);
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

function shift() {
    var select = document.getElementsByClassName("select");
    var selecta = select[0].getElementsByTagName("a");
    var n = 1;
    for (var i = 0; i < selecta.length; i++) {
        selecta[i].i = i;
        selecta[i].onclick = function () {
            slowchange(100, this.i);
            showPic(this);
            return false;
        }
    }
    setInterval(function () {
        selecta[n].click();
        n++;
        if (n > selecta.length - 1) {
            n = 0;
        }
    }, 6000);
}

function showPic(whichse) {
    var select = document.getElementsByClassName("select");
    var selecta = select[0].getElementsByTagName("a");
    var showPic = document.getElementsByClassName("showpic");
    var selectall = showPic[0].getElementsByTagName("div");
    if (whichse == selecta[0]) {
        selecta[0].setAttribute("id", "selectred");
        selecta[1].setAttribute("id", "");
        selecta[2].setAttribute("id", "");
        selecta[3].setAttribute("id", "");
        selectall[0].style.display = "block";
        selectall[1].style.display = "none";
        selectall[2].style.display = "none";
        selectall[3].style.display = "none";
    }
    if (whichse == selecta[1]) {
        selecta[1].setAttribute("id", "selectred");
        selecta[0].setAttribute("id", "");
        selecta[2].setAttribute("id", "");
        selecta[3].setAttribute("id", "");
        selectall[1].style.display = "block";
        selectall[0].style.display = "none";
        selectall[2].style.display = "none";
        selectall[3].style.display = "none";
    }
    if (whichse == selecta[2]) {
        selecta[2].setAttribute("id", "selectred");
        selecta[1].setAttribute("id", "");
        selecta[0].setAttribute("id", "");
        selecta[3].setAttribute("id", "");
        selectall[2].style.display = "block";
        selectall[0].style.display = "none";
        selectall[1].style.display = "none";
        selectall[3].style.display = "none";
    }
    if (whichse == selecta[3]) {
        selecta[3].setAttribute("id", "selectred");
        selecta[1].setAttribute("id", "");
        selecta[2].setAttribute("id", "");
        selecta[0].setAttribute("id", "");
        selectall[3].style.display = "block";
        selectall[0].style.display = "none";
        selectall[1].style.display = "none";
        selectall[2].style.display = "none";
    }
}

function slowchange(target,which) {
    var timer = null;
    clearInterval(timer);
    var showPic = document.getElementsByClassName("showpic");
    var selectall = showPic[0].getElementsByTagName("div");
    var speed = 1;
    var alpha = 0;
    timer = setInterval(function () {
        if (alpha < target) {
            speed = 2;
        } else {
            speed = -2;
        }
        if (alpha == target) {
            clearInterval(timer);
        } else {
            alpha = alpha + speed;
            selectall[which].style.filter = 'alpha(opacity=' + alpha + ')';
            selectall[which].style.opacity = alpha / 100;
        }
    }, 20);
}

function showsel() {
    var sel = document.getElementsByClassName("sel");
    var links = sel[0].getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            selshift(this);
            return false;
        }
    }
}

function selshift(whic) {
    var sel = document.getElementsByClassName("sel");
    var links = sel[0].getElementsByTagName("a");
    var div = sel[0].getElementsByTagName("div");
    if (whic == links[0]) {
        div[0].style.display = "block";
        div[1].style.display = "none";
        div[2].style.display = "none";
    }
    if (whic == links[1]) {
        div[1].style.display = "block";
        div[0].style.display = "none";
        div[2].style.display = "none";
    }
    if (whic == links[2]) {
        div[2].style.display = "block";
        div[1].style.display = "none";
        div[0].style.display = "none";
    }
}