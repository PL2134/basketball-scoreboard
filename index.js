// ==========================================
// BASKETBALL SCOREBOARD - JAVASCRIPT
// ==========================================

// Timer configuration
const PERIOD_DURATION = 60; // Duration of each period in seconds (1 minute for testing)

// Score elements - getting references to HTML elements
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

// Game state variables
let currentPeriod = 1;  // Track which period we're in (1, 2, 3, 4, OT, 2OT, etc.)
let homeFouls = 0;      // Track home team fouls
let guestFouls = 0;     // Track guest team fouls

// Timer variables
let gameTime = PERIOD_DURATION;  // Current time remaining in seconds
let timerInterval = null;        // Stores the setInterval reference so we can stop it
let isTimerRunning = false;      // Boolean flag to track if timer is actively counting

// ==========================================
// SCORING FUNCTIONS - HOME TEAM
// ==========================================

// Add 1 point to home team score
function addOneHome() {
    homeScore.textContent = Number(homeScore.textContent) + 1;
    updateLeader(); // Check if this changed who's winning
}

// Add 2 points to home team score (field goal)
function addTwoHome() {
    homeScore.textContent = Number(homeScore.textContent) + 2;
    updateLeader(); // Check if this changed who's winning
}

// Add 3 points to home team score (three-pointer)
function addThreeHome() {
    homeScore.textContent = Number(homeScore.textContent) + 3;
    updateLeader(); // Check if this changed who's winning
}

// ==========================================
// SCORING FUNCTIONS - GUEST TEAM
// ==========================================

// Add 1 point to guest team score
function addOneGuest() {
    guestScore.textContent = Number(guestScore.textContent) + 1;
    updateLeader(); // Check if this changed who's winning
}

// Add 2 points to guest team score (field goal)
function addTwoGuest() {
    guestScore.textContent = Number(guestScore.textContent) + 2;
    updateLeader(); // Check if this changed who's winning
}

// Add 3 points to guest team score (three-pointer)
function addThreeGuest() {
    guestScore.textContent = Number(guestScore.textContent) + 3;
    updateLeader(); // Check if this changed who's winning
}

// ==========================================
// GAME MANAGEMENT FUNCTIONS
// ==========================================

// Reset everything for a completely new game
function newGame() {
    homeScore.textContent = 0;     // Reset home score to 0
    guestScore.textContent = 0;    // Reset guest score to 0
    resetFouls();                  // Clear all fouls for both teams
    resetPeriod();                 // Go back to period 1
    resetTimer();                  // Reset timer to full time
    updateLeader();                // Update leader highlighting (should clear it)
}

// Determine which team is winning and highlight their score
function updateLeader() {
    console.log("updateLeader called!")
    
    // Get current score values as numbers
    let homeScoreValue = Number(homeScore.textContent);
    let guestScoreValue = Number(guestScore.textContent);
    
    console.log("Home:", homeScoreValue, "Guest:", guestScoreValue); 
    
    // Remove any existing leader highlighting
    homeScore.classList.remove('leading');
    guestScore.classList.remove('leading');
    
    // Add leader highlighting to whoever is winning
    if (homeScoreValue > guestScoreValue) {
        homeScore.classList.add('leading');
        console.log("Home is leading!");
    } else if (guestScoreValue > homeScoreValue) {
        guestScore.classList.add('leading');
        console.log("Guest is leading!");
    }
    // If scores are tied, no one gets the 'leading' class
}

// ==========================================
// PERIOD MANAGEMENT FUNCTIONS
// ==========================================

// Advance to the next period (1→2→3→4→OT→2OT→etc.)
function nextPeriod() {
    currentPeriod++; // Increment period counter
    let periodText = "";
    
    // Determine what text to display based on period number
    if (currentPeriod === 1) periodText = "1";
    else if (currentPeriod === 2) periodText = "2";
    else if (currentPeriod === 3) periodText = "3";
    else if (currentPeriod === 4) periodText = "4";
    else if (currentPeriod === 5) periodText = "OT";        // First overtime
    else periodText = (currentPeriod - 4) + "OT";           // 2OT, 3OT, etc.
    
    // Update the display with new period
    document.getElementById("current-period").textContent = periodText;
    resetFouls();  // Clear fouls at start of new period
    resetTimer();  // Reset timer to full time for new period
}

// Reset game back to period 1 (used by newGame)
function resetPeriod() {
    currentPeriod = 1;
    document.getElementById("current-period").textContent = "1";
    resetTimer(); // Reset timer when going back to period 1
}

// ==========================================
// FOUL MANAGEMENT FUNCTIONS
// ==========================================

// Add a foul to the home team
function addFoulHome() {
    homeFouls++;
    document.getElementById("home-fouls").textContent = homeFouls;
}

// Add a foul to the guest team
function addFoulGuest() {
    guestFouls++;
    document.getElementById("guest-fouls").textContent = guestFouls;
}

// Reset both teams' fouls to 0 (used when starting new period)
function resetFouls() {
    homeFouls = 0;
    guestFouls = 0;
    document.getElementById("home-fouls").textContent = 0;
    document.getElementById("guest-fouls").textContent = 0;
}

// ==========================================
// TIMER FUNCTIONS
// ==========================================

// Update the timer display to show current time in MM:SS format
function updateTimerDisplay() {
    let minutes = Math.floor(gameTime / 60);  // Get whole minutes
    let seconds = gameTime % 60;              // Get remaining seconds
    
    // Format as "M:SS" - add leading zero to seconds if needed
    let displayTime = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
    
    // Update the HTML element
    document.getElementById("game-timer").textContent = displayTime;
}

// Start the countdown timer
function startTimer() {
    // Only start if timer isn't already running (prevents multiple intervals)
    if (!isTimerRunning) {
        isTimerRunning = true;  // Mark timer as running
        
        // Set up interval to run every 1000ms (1 second)
        timerInterval = setInterval(function() {
            gameTime--;           // Subtract 1 second
            updateTimerDisplay(); // Update what user sees
            
            // Check if time has run out
            if (gameTime <= 0) {
                pauseTimer();        // Stop the timer
                alert("Time's up!"); // Notify user
            }
        }, 1000); // Run every 1000 milliseconds (1 second)
    }
}

// Pause/stop the timer
function pauseTimer() {
    isTimerRunning = false;           // Mark timer as not running
    clearInterval(timerInterval);     // Stop the setInterval from running
    timerInterval = null;             // Clear the interval reference
}

// Reset timer back to full period time
function resetTimer() {
    pauseTimer();                     // First stop the timer if it's running
    gameTime = PERIOD_DURATION;       // Reset time to configured duration
    updateTimerDisplay();             // Update display to show reset time
}

// ==========================================
// INITIALIZATION
// ==========================================

// Initialize the timer display when page loads
// This ensures the display shows the correct initial time
updateTimerDisplay();