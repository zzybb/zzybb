addLoadEvent(startout);
addLoadEvent(hideshow);
function startout(){
    clickout(".toplist", ".secondlist", "toplistshow", "secondlistshow");
}
function clickout(tabs_name,content_name,remove_tabs_style ,remove_content_style) {
    var content = document.querySelectorAll(content_name);
    var tabs = document.querySelectorAll(tabs_name);
    document.addEventListener("click", function (event) {
        var e = event || window.event;
        var aim = e.srcElement || e.target;
        var len = tabs.length;
        if (e.srcElement) {
            var aim = e.srcElement;
            for (var i = 0; i < len; i++) {
                if (aim != tabs[i]) {
                    content[i].classList.remove(remove_content_style);
                    tabs[i].classList.remove(remove_tabs_style);
                    content[i].style.left = "-9999px";
                } else {
                    content[i].style.left = "auto";
                }

            }
        } else {
            var aim = e.target;
            for (var i = 0; i < len; i++) {
                tabs[i].num = i;
                if (aim != tabs[i]) {
                    content[i].classList.toggle(contents_onclick_style);
                }
            }
        }
    }, false);
}

function hideshow() {
    var nav = document.getElementById("nav");
    var links = nav.getElementsByTagName("a");
    var nav2 = document.getElementsByClassName("nav2");
    var nav3 = document.getElementsByClassName("nav3");
    document.addEventListener("click", function (event) {
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
    }, false);
}
