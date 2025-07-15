let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let currentPeriod = 1;
let homeFouls = 0;
let guestFouls = 0;

function addOneHome() {
    homeScore.textContent = Number(homeScore.textContent) +1;
    updateLeader();
}

function addTwoHome() {
    homeScore.textContent = Number(homeScore.textContent) +2;
    updateLeader();
}

function addThreeHome() {
    homeScore.textContent = Number(homeScore.textContent) +3;
    updateLeader();
}

function addOneGuest() {
    guestScore.textContent = Number(guestScore.textContent) +1;
    updateLeader();
}

function addTwoGuest() {
    guestScore.textContent = Number(guestScore.textContent) +2;
    updateLeader();
}

function addThreeGuest() {
    guestScore.textContent = Number(guestScore.textContent) +3;
    updateLeader();
}

function newGame() {
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    resetFouls()
    resetPeriod();
    updateLeader();
}

function updateLeader() {
    console.log("updateLeader called!")
    let homeScoreValue = Number(homeScore.textContent);
    let guestScoreValue = Number(guestScore.textContent);
    
    console.log("Home:", homeScoreValue, "Guest:", guestScoreValue); 
    
    homeScore.classList.remove('leading');
    guestScore.classList.remove('leading');
    
    if (homeScoreValue > guestScoreValue) {
        homeScore.classList.add('leading');
        console.log("Home is leading!");
    } else if (guestScoreValue > homeScoreValue) {
        guestScore.classList.add('leading');
        console.log("Guest is leading!");
    }  
}

function nextPeriod() {
    currentPeriod++;
    let periodText = "";
    
    if (currentPeriod === 1) periodText = "1";
    else if (currentPeriod === 2) periodText = "2";
    else if (currentPeriod === 3) periodText = "3";
    else if (currentPeriod === 4) periodText = "4";
    else if (currentPeriod === 5) periodText = "OT";
    else periodText = (currentPeriod - 4) + "OT";
    
    document.getElementById("current-period").textContent = periodText;
    resetFouls()
}

function resetPeriod() {
    currentPeriod = 1;
    document.getElementById("current-period").textContent = "1";
}

function addFoulHome() {
    homeFouls++;
    document.getElementById("home-fouls").textContent = homeFouls;
}

function addFoulGuest() {
    guestFouls++;
    document.getElementById("guest-fouls").textContent = guestFouls;
}

function resetFouls() {
    homeFouls = 0;
    guestFouls = 0;
    document.getElementById("home-fouls").textContent = 0;
    document.getElementById("guest-fouls").textContent = 0;
}