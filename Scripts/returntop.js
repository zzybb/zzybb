addLoadEvent(scroll);
function scroll() {
    var otop = document.getElementsByClassName("returntop");
    var otopa = otop[0].getElementsByTagName("a");
    var screenw = document.documentElement.clientWidth || document.body.clientWidth;
    var screenh = document.documentElement.clientHeight || document.body.clientHeight;
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    otopa[0].onclick = function () {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
        return false;
    }
}