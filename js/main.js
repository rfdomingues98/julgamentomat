var audio = document.querySelector("#audio");

window.addEventListener("load", function () {
    if (isMobile.any()) {
        document.removeChild(document.documentElement);
        var node = document.createElement("h1");
        var textNode = document.createTextNode("Abre num computador!");
        node.appendChild(textNode);
        document.appendChild(node);
    }
});

audio.addEventListener("ended", function () {
    //rot47
    var coordinates = "40.6286, -8.6598";
    var x = prompt('"F2= 6 2 D6BF6?4:2 56 ?F>6C@Dn W4252 6=6>6?E@ D6A2C25@ A@C 6DA24@DX');
    if (binary2text(x) == coordinates) {
        alert("Success!");
    } else {
        do {
            alert("Invalid answer!");
            x = prompt('"F2= 6 2 D6BF6?4:2 56 ?F>6C@Dn W4252 6=6>6?E@ D6A2C25@ A@C 6DA24@DX');
        } while (binary2text(x) != coordinates);
        alert("Success!");
    }
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

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

document.onmousedown = disableclick;
status = "Right Click Disabled";
function disableclick(event) {
    if (event.button == 2) {
        alert(status);
        return false;
    }
}