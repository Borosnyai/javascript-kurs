 // if statment
 /*
 var age = prompt("Trage dein Alter ein: ");

if(16 > 18){
    // wird ausgeführt wenn Bedinung wahr wird
    console.log("Eintritt zugelassen")

    
}else {
    // wird in jedem anderen Fall ausgeführt
    console.log("Nicht alt genug")
}
*/
/**************************************************************************/
/*Else-If Statements*/
/*
var color = prompt("Trage eine Farbe ein: ")
// Es wird immer klein geschrieben
var lowerColorName = color.toLocaleLowerCase();

if(lowerColorName == "grün"){
    alert("du darfst fahren");

}else if(lowerColorName == "orange"){
    alert("Du darfst anfahren oder musst bremsen");

}
else if(lowerColorName == "rot"){
    alert("Du musst halten");
}else {
    alert("Keine gültige Ampel-Farbe eingetragen");
}
*/
/*******************************************************************************/
/*Ampel-Programm um HTML-Formular erweitern*/
function main(){

    var input = document.getElementById("inputColor")

    var color = input.value;
    // Es wird immer klein geschrieben
    var lowerColorName = color.toLowerCase();

    if(lowerColorName == "grün"){
        alert("du darfst fahren");

    }else if(lowerColorName == "orange"){
        alert("Du darfst anfahren oder musst bremsen");

    }
    else if(lowerColorName == "rot"){
        alert("Du musst halten");
    }else {
        alert("Keine gültige Ampel-Farbe eingetragen");
    }
}
/******************************************************************************* */
/*Exkurs: Quellcode und Projekte hochladen mit Git*/






