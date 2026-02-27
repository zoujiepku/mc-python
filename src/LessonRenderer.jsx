import React, { useState } from 'react';
import { PythonEditor } from './PythonEditor';
import { Quiz } from './Quiz';
import './LessonRenderer.css';

const lessons = [
    {
        type: 'info',
        title: '🪄 The Magic Command Block',
        content: "Welcome to Python! 🐍 Python is like a magical Command Block. We can give it instructions and it will do them instantly. Let's try telling the computer to say something! ✨",
        buttonText: "Let's Go! 🏃‍♂️"
    },
    {
        type: 'code',
        title: 'Your First Spell 📜',
        content: 'Type the exact words below and hit Run! ⚡\\n\\nprint("Hello, Minecraft!")',
        initialCode: 'print("Hello, Minecraft!")',
        expectedOutputPattern: /Hello, Minecraft!/
    },
    {
        type: 'quiz',
        question: 'What does the print() command do? 🤔',
        options: [
            '🟩 Spawns a creeper',
            '⛏️ Digs a hole',
            '💬 Tells the computer to display a message on the screen'
        ],
        correctAnswerIndex: 2
    },
    {
        type: 'info',
        title: '🔢 Super Silly Big Numbers!',
        content: "Python is also a super-fast calculator. 🚀 It can multiply giant numbers faster than you can blink! Let's multiply 99,999,999 by 88,888,888. 🤯",
        buttonText: "Let's multiply! ✖️"
    },
    {
        type: 'code',
        title: 'Mega Multiplication 💥',
        content: 'Try typing this and run it:\\n\\nprint(99999999 * 88888888)',
        initialCode: 'print(99999999 * 88888888)',
        expectedOutputPattern: /\d+/
    },
    {
        type: 'info',
        title: '📦 Storing Blocks (Variables)',
        content: 'In Minecraft, you carry items in your inventory. 🎒 In Python, we use "Variables" as our inventory slots. We can store numbers in words! 🔠',
        buttonText: "Show me! 👀"
    },
    {
        type: 'code',
        title: 'Variable Inventory 💎',
        content: 'Run this block to see how many treasures we have:\\n\\ndiamonds = 50\\nemerald_blocks = 1000\\nprint("Total treasures:", diamonds + emerald_blocks)',
        initialCode: 'diamonds = 50\nemerald_blocks = 1000\nprint("Total treasures:", diamonds + emerald_blocks)',
        expectedOutputPattern: /Total treasures:\s*1050/
    },
    {
        type: 'quiz',
        question: 'If we write `zombies = 5`, what did we just do? 🧟‍♂️',
        options: [
            '✅ Created a variable named `zombies` holding the number 5',
            '⚔️ Defeated 5 zombies',
            '🖨️ Printed the word zombies'
        ],
        correctAnswerIndex: 0
    },
    {
        type: 'info',
        title: 'Level Complete! 🏆✨',
        content: 'You learned about print commands, super big numbers, and variables! You are a Python Wizard now! 🧙‍♂️🪄',
        buttonText: "Play Again 🔄",
        isEnd: true
    }
];

export const LessonRenderer = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [stepCompleted, setStepCompleted] = useState(false);

    const nextStep = () => {
        setStepCompleted(false);
        if (lessons[currentStep].isEnd) {
            setCurrentStep(0);
        } else {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleRunSuccess = (output) => {
        const step = lessons[currentStep];
        if (step.expectedOutputPattern && step.expectedOutputPattern.test(output)) {
            setStepCompleted(true);
        }
    };

    const step = lessons[currentStep];
    const progress = ((currentStep) / (lessons.length - 1)) * 100;

    return (
        <div className="lesson-container">
            <div className="exp-bar-container">
                <div className="exp-bar-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="exp-text">XP Level {currentStep}</div>

            <div className="lesson-card">
                {step.type === 'info' && (
                    <div className="info-section">
                        <h2 className="lesson-title">{step.title}</h2>
                        <p className="lesson-content">{step.content}</p>
                        <button className="mc-button" onClick={nextStep}>{step.buttonText}</button>
                    </div>
                )}

                {step.type === 'code' && (
                    <div className="code-section">
                        <h2 className="lesson-title">{step.title}</h2>
                        <p className="lesson-content">{step.content}</p>
                        <PythonEditor
                            key={currentStep}
                            initialCode={step.initialCode}
                            onRunSuccess={handleRunSuccess}
                        />
                        {stepCompleted ? (
                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                <p style={{ color: '#55ff55', fontWeight: 'bold', fontSize: '20px', marginBottom: '15px', fontFamily: '"Minecraftia", sans-serif' }}>🎉 Great job! The code worked!</p>
                                <p style={{ color: '#aaaaaa', fontStyle: 'italic', marginBottom: '20px' }}>You can keep editing and experimenting!</p>
                                <button className="mc-button" onClick={nextStep}>Next Level</button>
                            </div>
                        ) : (
                            <p className="hint-text">Run the correct code to gain XP and advance!</p>
                        )}
                    </div>
                )}

                {step.type === 'quiz' && (
                    <div className="quiz-section">
                        <Quiz
                            question={step.question}
                            options={step.options}
                            correctAnswerIndex={step.correctAnswerIndex}
                            onCorrect={nextStep}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
