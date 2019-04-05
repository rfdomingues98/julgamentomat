var audio = document.querySelector("#audio");

window.addEventListener("load", function () {
    if (!detectmob) {
        document.removeChild(document.documentElement);
        var node = document.createElement("h1");
        var textNode = document.createTextNode("Abre num computador!");
        node.appendChild(textNode);
        document.appendChild(node);
    }
});

audio.addEventListener("ended", function () {
    //rot47
    var coordinates = "40.7143528, -74.0059731";
    var x = prompt('"F2= 6 2 D6BF6?4:2 56 ?F>6C@Dn W4252 6=6>6?E@ D6A2C25@ A@C 6DA24@DX');
    do {
        alert("Invalid answer!");
        x = prompt('"F2= 6 2 D6BF6?4:2 56 ?F>6C@Dn W4252 6=6>6?E@ D6A2C25@ A@C 6DA24@DX');
    } while (binary2text(x) != coordinates);
    alert("Success!");
});

function binary2text(str) {
    str = str.replace(/\s+/g, '');
    str = str.match(/.{1,8}/g).join(" ");
    var newBinary = str.split(" ");
    var binaryCode = [];
    for (i = 0; i < newBinary.length; i++) {
        binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
    }
    return binaryCode.join("");
}

function detectmob() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    }
    else {
        return false;
    }
}