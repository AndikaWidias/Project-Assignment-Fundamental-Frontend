function sec(number) {
    req = document.getElementById("iphoneTotal").innerHTML;
    req = req + number;
    document.getElementById("iphoneTotal").innerHTML = req;
}

function menfi() {
    req = document.getElementById("iphoneTotal").innerHTML;
    req = req * -1;
    document.getElementById("iphoneTotal").innerHTML = req;
}

function Percent() {
    req = document.getElementById("iphoneTotal").innerHTML;
    req = req * 1 / 100;
    document.getElementById("iphoneTotal").innerHTML = req;
}

function noqte() {
    req = document.getElementById("iphoneTotal").innerHTML
    req = req + "."
    document.getElementById("iphoneTotal").innerHTML = req;
}

function allclear() {
    reset = document.getElementById("iphoneTotal").innerHTML
    reset = "";
    document.getElementById("iphoneTotal").innerHTML = reset;
    document.getElementById("iphoneTotalprevious").innerHTML = reset;
}

function del() {
    req = document.getElementById("iphoneTotal").innerHTML
    document.getElementById("iphoneTotal").innerHTML = req.substring(0, req.length - 1);
    document.getElementById("iphoneTotalprevious").innerHTML = "";
}

function multiple() {
    req = document.getElementById("iphoneTotal").innerHTML
    req = req + "*"
    document.getElementById("iphoneTotal").innerHTML = req;
}

function bolme() {
    req = document.getElementById("iphoneTotal").innerHTML
    req = req + "/"
    document.getElementById("iphoneTotal").innerHTML = req;
}
function minus() {
    req = document.getElementById("iphoneTotal").innerHTML
    req = req + "-"
    document.getElementById("iphoneTotal").innerHTML = req;

}
function plus() {
    req = document.getElementById("iphoneTotal").innerHTML
    req = req + "+"
    document.getElementById("iphoneTotal").innerHTML = req;

}


function inspect() {
    if (isNaN(eval(result)) !== false) {
        alert("Something wrong")
    }
}

function neticeIphone() {
    result = document.getElementById("iphoneTotal").innerHTML
    inspect();
    document.getElementById("iphoneTotalprevious").innerHTML = eval(result)

}
