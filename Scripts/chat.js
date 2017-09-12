addLoadEvent(getServerInfo);
function getServerInfo() {
    http = createXHR();
    var url = "getmsg?time=" + Math.random();
    http.onreadystatechange = getInfoback;
    http.open("GET", url, true);
    http.send(null);
}

function getInfoback() {
    if (http.readyState == 4) {
        if (http.status == 200) {
            var response = http.responseText;
            document.getElementById("chatbox").innerHTML += response + "\r\n";
            getServerInfo();
        }
    }
}

function sentok(o) {
    var myform = document.getElementById("fform");
    myform.submit();
    document.getElementById(o).value = "";
    var txt = document.getElementById("chatbox");
    txt.scrollTop = txt.scrollHeight;
}