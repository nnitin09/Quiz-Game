# 🧠 The Ultimate Animated GK Quiz Challenge

A futuristic, highly animated, and bilingual General Knowledge (GK) quiz application built with vanilla HTML, CSS, and JavaScript. This quiz features dynamic sound effects, Text-to-Speech capabilities, and a sleek glassmorphism design.

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## ✨ Features

- **Bilingual Support:** Switch seamlessly between English and हिन्दी (Hindi).
- **Futuristic UI:** Modern glassmorphism design with a dynamic, animated starfield background.
- **Text-to-Speech (TTS):** Questions and instructions are read aloud using the Web Speech API for better accessibility.
- **Interactive Gameplay:** 15-second timer per question, skip functionality, and immediate feedback.
- **Sound Effects & Visuals:** Audio feedback for right/wrong answers and confetti explosions for high scores.
- **Modular Question Bank:** Questions are loaded from separate JavaScript files for easy management and expansion.
- **Responsive Design:** Adapts to different screen sizes.
- **Share Functionality:** Easily share your score or the website link via Web Share API or WhatsApp.

## 🚀 Technologies Used

- **HTML5:** For the core structure.
- **CSS3:** For styling, complex animations, glassmorphism effects, and the particle background.
- **Vanilla JavaScript (ES6+):** For quiz logic, DOM manipulation, and event handling.
- **[Canvas Confetti](https://github.com/catdad/canvas-confetti):** For celebration effects.
- **Web Speech API:** For synthesizing speech (TTS).
- **Google Fonts:** Poppins typeface.

## 🏗️ Project Structure

The project is organized to separate data from logic:

```
/GK-Quiz-Project/
├── index.html          # The main application file (HTML, CSS, and core JS logic)
├── questions_en.js     # The database for all English questions
├── questions_hi.js     # The database for all Hindi questions
└── README.md           # This file
```

## 🛠️ Setup and Installation

This project requires no complex setup or build tools.

1. **Clone the repository (or download the files):**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Open the application:**
   Simply open the `index.html` file in any modern web browser.

## ❓ How to Add More Questions

The question bank is separated into `questions_en.js` (English) and `questions_hi.js` (Hindi).

### Important Rules:
*   You **must** add the question to both `questions_en.js` and `questions_hi.js`.
*   The application does **not** automatically translate questions.
*   The answer (`a`) must exactly match one of the options in the options array (`o`).

### Steps to add a question:

1. **Open `questions_en.js`:**
   Add a new object to the `englishQuestions` array following this structure:

   ```javascript
   // Example: questions_en.js
   const englishQuestions = [
       // ... existing questions ...
       {
           q: "What is the capital of Japan?", // The Question
           o: ["Beijing", "Seoul", "Tokyo", "Bangkok"], // The Options array
           a: "Tokyo" // The Correct Answer
       }
   ];
   ```

2. **Open `questions_hi.js`:**
   Add the corresponding translated question to the `hindiQuestions` array:

   ```javascript
   // Example: questions_hi.js
   const hindiQuestions = [
       // ... existing questions ...
       {
           q: "जापान की राजधानी क्या है?", // The Question in Hindi
           o: ["बीजिंग", "सियोल", "टोक्यो", "बैंकॉक"], // Options in Hindi
           a: "टोक्यो" // Correct Answer in Hindi
       }
   ];
   ```

## 🎮 Gameplay Instructions

1. **Select Language:** Choose English or Hindi on the start screen.
2. **Start Quiz:** Click "Play Now".
3. **Answer:** You have 15 seconds to select the correct answer. The timer will flash red when time is low.
4. **Skip:** You can skip questions if unsure.
5. **Feedback:** Green indicates correct, red indicates incorrect. The correct answer is shown if you are wrong or time runs out.
6. **Results:** View your final score and share it with friends.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/your-repo-name/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📺 Connect

If you enjoyed this project, consider subscribing!

👉 **Subscribe on YouTube:** [https://youtube.com/@nitish7629](https://youtube.com/@nitish7629)

