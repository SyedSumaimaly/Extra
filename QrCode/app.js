var qrcode = new QRCode(document.getElementById("qrcode"), {
  width: 80,
  height: 80,
});

function makeCode() {
  var elText = "12345";
  if (!elText) {
    alert("Input a text");
    elText.focus();
    return;
  }
  qrcode.makeCode(elText);
}

makeCode();
