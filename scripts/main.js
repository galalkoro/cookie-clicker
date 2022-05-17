
// this function for promt player

var numberOfClick = 0;
/*window.onload = function () {
    var entreName = prompt("Entre a name"); // this will load the page automaticly to submit your name in orde to start play 
    var spaceCookie = document.getElementById("space");
    spaceCookie.innerHTML = entreName + "bakery";
    
}*/

var myCookie = document.getElementById("cookie");

function cookieClick() {
    numberOfClick += 1;
    var numbers = document.getElementById("numbers");
   

    // upgrading level for printing

    var upgradeLevel = document.getElementById("upgradeLevel");
    numbers.innerHTML = numberOfClick; 

    // upgrade to 2x

    if (numberOfClick >= 30) {
        numberOfClick += 2;
        upgradeLevel.innerHTML = "first Level";
        
    }

    // upgrade to 10x
    if (numberOfClick >= 100) {
        numberOfClick += 10;
        upgradeLevel.innerHTML = "third Level";
    }

    //super upgrade to 500
    if (numberOfClick >= 1000) {
        numberOfClick += 100;
        upgradeLevel.innerHTML = "super Level"
        
    }
}