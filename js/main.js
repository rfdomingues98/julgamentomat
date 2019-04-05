var audio = document.querySelector("#audio");

audio.addEventListener("ended", function () {
    //rot47
    var x = prompt('"F2= � 2 D6BF�?4:2 56 ?�>6C@Dn W4252 6=6>6?E@ D6A2C25@ A@C 6DA2�@DX');
    var coordinates = "40.7143528, -74.0059731";
    if (binary2text(x) == coordinates) {
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