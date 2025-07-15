# Basketball Scoreboard ⛹️‍♂️

A fully functional basketball scoreboard web application built from scratch as part of my journey to becoming a Full Stack AI Engineer. This project demonstrates core web development fundamentals including responsive design, interactive JavaScript functionality, and clean code practices.

## 🚀 Live Demo

**[View Live Project]** - *[I will add Netlify deployment link here]*

## 📖 Project Overview

This basketball scoreboard replicates the functionality of a real basketball arena scoreboard, featuring:

- **Real-time scoring** for both HOME and GUEST teams
- **Period management** with support for regulation periods (1-4) and overtime (OT, 2OT, 3OT...)
- **Countdown timer** with start, pause, and reset controls
- **Foul tracking** for both teams with digital display
- **Leader highlighting** with visual glow effect for the winning team
- **Complete game reset** functionality
- **Professional styling** with digital LED-style fonts and authentic basketball scoreboard aesthetics

## 🛠️ Tech Stack

### Frontend Technologies
- **HTML5** - Semantic markup and document structure
- **CSS3** - Responsive styling, flexbox layouts, custom fonts, and visual effects
- **Vanilla JavaScript** - DOM manipulation, event handling, timer functions, and game logic

### Development Concepts Learned
- **DOM Manipulation** - Dynamic content updates and element selection
- **Event Handling** - Button clicks and user interactions
- **Timer Implementation** - `setInterval()` and `clearInterval()` for countdown functionality
- **State Management** - Tracking game state, scores, periods, and timer status
- **CSS Flexbox** - Responsive three-column layout design
- **Custom Font Integration** - Digital display typography
- **Code Organization** - Clean, commented, and maintainable code structure

## 🎯 Learning Objectives & Full Stack AI Engineer Goals

This project serves as a foundational stepping stone in my journey to becoming a Full Stack AI Engineer by developing:

### Core Web Development Skills
- **Frontend Fundamentals** - Essential for building AI-powered user interfaces
- **JavaScript Proficiency** - Critical for integrating AI APIs and handling real-time data
- **Responsive Design** - Necessary for AI applications across different devices
- **State Management** - Fundamental for complex AI application architectures

### Technical Skills Applicable to AI Engineering
- **Real-time Data Handling** - Timer functionality mirrors real-time AI model updates
- **Interactive UI Design** - Essential for AI model interaction and visualization
- **Event-Driven Programming** - Critical for AI applications requiring user input
- **Clean Code Practices** - Vital for maintaining complex AI systems

### Next Steps in AI Development
This project establishes the frontend foundation needed for future AI integrations such as:
- Building interfaces for machine learning model interactions
- Creating dashboards for AI analytics and insights
- Developing real-time AI-powered applications
- Implementing responsive designs for AI mobile applications

## 🎮 Features

### Scoring System
- **+1, +2, +3 point buttons** for each team
- **Automatic leader detection** with visual highlighting
- **Real-time score updates** with digital display

### Timer Management
- **Countdown timer** (configurable duration - currently set to 1 minute for testing)
- **Start/Pause/Reset controls** with professional button styling
- **Automatic alerts** when time expires
- **Timer resets** automatically when advancing periods

### Game Flow
- **Period advancement** (1 → 2 → 3 → 4 → OT → 2OT → 3OT...)
- **Foul tracking** with individual team counters
- **New Game functionality** resets all values to starting state
- **Professional layout** mimicking real basketball scoreboards

### Visual Design
- **Authentic LED-style font** for all digital displays
- **Color-coded elements** (red for scores/timer, blue for controls)
- **Responsive flexbox layout** with proper spacing
- **Leader highlighting** with subtle glow effects

## 📁 Project Structure

```
basketball-scoreboard/
│
├── index.html          # Main HTML structure
├── index.css           # Complete styling and layout
├── index.js            # All JavaScript functionality
├── CursedTimerUlil-Aznm.ttf  # Custom LED-style font
├── README.md           # Project documentation
├── package.json        # Project configuration (Vite)
└── vite.config.js      # Vite build configuration
```

## 💻 Installation & Setup

### Prerequisites
- Node.js installed on your machine

### Getting Started
1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd basketball-scoreboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Design Decisions

### Color Palette
- **Background**: Dark blue (#1B244A) for professional appearance
- **Digital Displays**: Red text (#F94F6D) on black background (#080001)
- **Controls**: Light blue (#9AABD8) for buttons and borders
- **Text**: Light gray (#EEEEEE) for labels and titles

### Typography
- **Digital Elements**: 'Cursed Timer' custom font for authentic LED appearance
- **Labels & Titles**: Verdana for clean, readable text
- **Hierarchy**: Varied font sizes to establish clear information hierarchy

### Layout
- **Three-column design**: HOME | PERIOD | GUEST for balanced composition
- **Timer prominence**: Large timer at top for clear visibility
- **Consistent spacing**: Uniform margins and padding throughout

## 🔧 Code Highlights

### Timer Implementation
```javascript
// Configurable timer duration
const PERIOD_DURATION = 60;

// Countdown functionality with automatic updates
function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        timerInterval = setInterval(function() {
            gameTime--;
            updateTimerDisplay();
            if (gameTime <= 0) {
                pauseTimer();
                alert("Time's up!");
            }
        }, 1000);
    }
}
```

### Dynamic Leader Highlighting
```javascript
function updateLeader() {
    let homeScoreValue = Number(homeScore.textContent);
    let guestScoreValue = Number(guestScore.textContent);
    
    homeScore.classList.remove('leading');
    guestScore.classList.remove('leading');
    
    if (homeScoreValue > guestScoreValue) {
        homeScore.classList.add('leading');
    } else if (guestScoreValue > homeScoreValue) {
        guestScore.classList.add('leading');
    }
}
```

## 🚀 Future Enhancements

### Potential AI Integrations
- **Voice Recognition** - Voice commands for scoring ("Home team 2 points")
- **Computer Vision** - Automatic score detection from game footage
- **Predictive Analytics** - AI-powered game outcome predictions
- **Natural Language Processing** - Automated game commentary generation

### Additional Features
- **Sound effects** for timer and scoring events
- **Team customization** with logos and colors
- **Game statistics** and historical data tracking
- **Mobile responsive optimizations**

---

*This project represents a milestone in my journey to becoming a Full Stack AI Engineer, demonstrating core web development skills that will serve as the foundation for building sophisticated AI-powered applications.*