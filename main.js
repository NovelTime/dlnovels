//Prevent user from desktop mode
window.desktopcheck = function() {
    var check = false;
        
     if(window.innerWidth>768){
        check=true;
     }
     return check;
}
if(window.desktopcheck()){
    document.getElementsByTagName("body")[0].style.display = "none";
    alert("Webpage does not support wider screen more than 768 pixels!\nTo use this webpage in your desktop, drag the corner of the border of your browser and make it smaller. Thank your...");
}
//QR code
let qrCode = document.getElementById("qrcode");
qrCode.setAttribute("src","");
qrCode.src = "https://noveltime.github.io/dlnovels/icon/qrcode.png";
