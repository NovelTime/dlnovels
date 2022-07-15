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

$('#qrcode').attr('src','https://noveltime.github.io/dlnovels/icon/qrcode.png');

var webnovel = $("<a>",{href:"webnovel.html", class:"w3-bar-item w3-btn"},"</a>").text('Web Novel');
$("#mySidebar").append(webnovel);