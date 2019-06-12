function diceroll() {
	var roll = Math.floor((Math.random()*6)+1);
	var roll2 = Math.floor((Math.random()*6)+1);

	if (roll==roll2) {
		diceroll();
	} else {
		if (roll==1) {
            document.write("<div style='margin-bottom: 15px; padding-top: 51px; padding-bottom: 51px; background-color: #2B2C28; float: left; width: 50%;'><center>" + roll + "</center></div><div style='float: left; width: 50%; background-color: #2B2C28; padding-top: 10px; padding-bottom: 10px; margin-bottom: 15px; box-shadow:inset 15px 0px 0px 0px #131515;'><center><img src='images/1.png'></center></div>");
        } else if (roll==2) {
            document.write("<div style='margin-bottom: 15px; padding-top: 51px; padding-bottom: 51px; background-color: #2B2C28; float: left; width: 50%;'><center>" + roll + "</center></div><div style='float: left; width: 50%; background-color: #2B2C28; padding-top: 10px; padding-bottom: 10px; margin-bottom: 15px; box-shadow:inset 15px 0px 0px 0px #131515;'><center><img src='images/2.png'></center></div>");
        } else if (roll==3) {
            document.write("<div style='margin-bottom: 15px; padding-top: 51px; padding-bottom: 51px; background-color: #2B2C28; float: left; width: 50%;'><center>" + roll + "</center></div><div style='float: left; width: 50%; background-color: #2B2C28; padding-top: 10px; padding-bottom: 10px; margin-bottom: 15px; box-shadow:inset 15px 0px 0px 0px #131515;'><center><img src='images/3.png'></center></div>");
        } else if (roll==4) {
            document.write("<div style='margin-bottom: 15px; padding-top: 51px; padding-bottom: 51px; background-color: #2B2C28; float: left; width: 50%;'><center>" + roll + "</center></div><div style='float: left; width: 50%; background-color: #2B2C28; padding-top: 10px; padding-bottom: 10px; margin-bottom: 15px; box-shadow:inset 15px 0px 0px 0px #131515;'><center><img src='images/4.png'></center></div>");
        } else if (roll==5) {
            document.write("<div style='margin-bottom: 15px; padding-top: 51px; padding-bottom: 51px; background-color: #2B2C28; float: left; width: 50%;'><center>" + roll + "</center></div><div style='float: left; width: 50%; background-color: #2B2C28; padding-top: 10px; padding-bottom: 10px; margin-bottom: 15px; box-shadow:inset 15px 0px 0px 0px #131515;'><center><img src='images/5.png'></center></div>");
        } else if (roll==6) {
            document.write("<div style='margin-bottom: 15px; padding-top: 51px; padding-bottom: 51px; background-color: #2B2C28; float: left; width: 50%;'><center>" + roll + "</center></div><div style='float: left; width: 50%; background-color: #2B2C28; padding-top: 10px; padding-bottom: 10px; margin-bottom: 15px; box-shadow:inset 15px 0px 0px 0px #131515;'><center><img src='images/6.png'></center></div>");
        }
        
		if (roll2==1) {
            document.write("<div style='margin-bottom: 15px; padding-top: 51px; padding-bottom: 51px; background-color: #2B2C28; float: left; width: 50%;'><center>" + roll2 + "</center></div><div style='float: left; width: 50%; background-color: #2B2C28; padding-top: 10px; padding-bottom: 10px; margin-bottom: 15px; box-shadow:inset 15px 0px 0px 0px #131515;'><center><img src='images/1.png'></center></div>");
        } else if (roll2==2) {
            document.write("<div style='margin-bottom: 15px; padding-top: 51px; padding-bottom: 51px; background-color: #2B2C28; float: left; width: 50%;'><center>" + roll2 + "</center></div><div style='float: left; width: 50%; background-color: #2B2C28; padding-top: 10px; padding-bottom: 10px; margin-bottom: 15px; box-shadow:inset 15px 0px 0px 0px #131515;'><center><img src='images/2.png'></center></div>");
        } else if (roll2==3) {
            document.write("<div style='margin-bottom: 15px; padding-top: 51px; padding-bottom: 51px; background-color: #2B2C28; float: left; width: 50%;'><center>" + roll2 + "</center></div><div style='float: left; width: 50%; background-color: #2B2C28; padding-top: 10px; padding-bottom: 10px; margin-bottom: 15px; box-shadow:inset 15px 0px 0px 0px #131515;'><center><img src='images/3.png'></center></div>");
        } else if (roll2==4) {
            document.write("<div style='margin-bottom: 15px; padding-top: 51px; padding-bottom: 51px; background-color: #2B2C28; float: left; width: 50%;'><center>" + roll2 + "</center></div><div style='float: left; width: 50%; background-color: #2B2C28; padding-top: 10px; padding-bottom: 10px; margin-bottom: 15px; box-shadow:inset 15px 0px 0px 0px #131515;'><center><img src='images/4.png'></center></div>");
        } else if (roll2==5) {
            document.write("<div style='margin-bottom: 15px; padding-top: 51px; padding-bottom: 51px; background-color: #2B2C28; float: left; width: 50%;'><center>" + roll2 + "</center></div><div style='float: left; width: 50%; background-color: #2B2C28; padding-top: 10px; padding-bottom: 10px; margin-bottom: 15px; box-shadow:inset 15px 0px 0px 0px #131515;'><center><img src='images/5.png'></center></div>");
        } else if (roll2==6) {
            document.write("<div style='margin-bottom: 15px; padding-top: 51px; padding-bottom: 51px; background-color: #2B2C28; float: left; width: 50%;'><center>" + roll2 + "</center></div><div style='float: left; width: 50%; background-color: #2B2C28; padding-top: 10px; padding-bottom: 10px; margin-bottom: 15px; box-shadow:inset 15px 0px 0px 0px #131515;'><center><img src='images/6.png'></center></div>");
        }
	}
}