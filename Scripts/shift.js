addLoadEvent(start);
function start() {
    Tabs(".listItem", ".smallcontent", "listItemStyle", "showall");
    Tabs(".jiegouItem", ".jiegoucontent", "jiegouStyle", "jiegoushow");
    Tabs2(".toplist", ".secondlist", "toplistshow", "secondlistshow");
}
function Tabs(tabs_name, contents_name, tabs_onclick_style, contents_onclick_style) {
    var tabs = document.querySelectorAll(tabs_name),
        contents = document.querySelectorAll(contents_name),
        mark = 0;
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].num = i;
        tabs[i].onclick = function () {
            tabs[mark].classList.toggle(tabs_onclick_style);
            tabs[this.num].classList.toggle(tabs_onclick_style);
            contents[mark].classList.toggle(contents_onclick_style);
            contents[this.num].classList.toggle(contents_onclick_style);
            mark = this.num;
            return false;
        };
    }
}//点击切换DIV的JS；

function Tabs2(tabs_name, contents_name, tabs_onclick_style, contents_onclick_style) {
    var tabs = document.querySelectorAll(tabs_name),
        contents = document.querySelectorAll(contents_name);
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].num = i;
        tabs[i].onclick = function () {
            tabs[this.num].classList.toggle(tabs_onclick_style);
            contents[this.num].classList.toggle(contents_onclick_style);
            return false;
        };
    }
}//下拉菜单的JS；

