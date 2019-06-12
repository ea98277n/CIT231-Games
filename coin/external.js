function addNumbers() {
        var repeat;
        for (repeat=0; repeat<50;repeat++) {
        var randomNumber = Math.floor((Math.random()*2)+1);
            if (randomNumber==1) {
                document.write("<div style='margin-bottom: 15px; padding-top: 51px; padding-bottom: 51px; background-color: #2B2C28; float: left; width: 50%;'><center>Tails</center></div><div style='float: left; width: 50%; background-color: #2B2C28; padding-top: 10px; padding-bottom: 10px; margin-bottom: 15px; box-shadow:inset 15px 0px 0px 0px #131515;'><center><img src='images/tails.png'></center></div>");
            } else if (randomNumber==2) {
                document.write("<div style='margin-bottom: 15px; padding-top: 51px; padding-bottom: 51px; background-color: #2B2C28; float: left; width: 50%;'><center>Heads</center></div><div style='float: left; width: 50%; background-color: #2B2C28; padding-top: 10px; padding-bottom: 10px; margin-bottom: 15px; box-shadow:inset 15px 0px 0px 0px #131515;'><center><img src='images/heads.png'></center></div>");
            }
        }
}

function stats() {
    var html = document.getElementsByTagName('html')[0];
    var text = html.innerHTML;
    document.write("<h3><center>Heads: " + (text.split("Heads").length - 1) + "<br>Tails: " + (text.split("Tails").length - 1) + "</center></h3>");
}