addLoadEvent(startout);
function startout(){
    clickout(".toplist", ".secondlist", "nonelist");
}
function clickout(tabs_name,content_name, contents_onclick_style) {
    var content = document.querySelectorAll(content_name);
    var tabs = document.querySelectorAll(tabs_name);
    document.onclick = function (event) {
        var e = event || window.event;
        var aim = e.srcElement || e.target;
        var len = tabs.length;
        if (e.srcElement) {
            var aim = e.srcElement;
            for (var i = 0; i < len; i++) {
                if (aim != tabs[i]) {
                    content[i].classList.add(contents_onclick_style);
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
    }
}
