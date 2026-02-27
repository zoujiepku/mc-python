import React, { useState } from 'react';
import { PythonEditor } from './PythonEditor';
import { Quiz } from './Quiz';
import './LessonRenderer.css';

export const LessonRenderer = ({ chapter, onBack }) => {
    const lessons = chapter.lessons;
    const [currentStep, setCurrentStep] = useState(0);
    const [stepCompleted, setStepCompleted] = useState(false);
    const [resetKey, setResetKey] = useState(0);

    const nextStep = () => {
        setStepCompleted(false);
        if (lessons[currentStep].isEnd) {
            onBack();
        } else {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleRunSuccess = (output) => {
        const step = lessons[currentStep];
        if (step.expectedOutputPattern) {
            const pattern = new RegExp(step.expectedOutputPattern);
            if (pattern.test(output)) {
                setStepCompleted(true);
            }
        }
    };

    const prevStep = () => {
        setStepCompleted(false);
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const resetCode = () => {
        setStepCompleted(false);
        setResetKey((k) => k + 1);
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
                            key={`${currentStep}-${resetKey}`}
                            initialCode={step.initialCode}
                            onRunSuccess={handleRunSuccess}
                        />
                        {stepCompleted ? (
                            <div style={{ textAlign: 'center', marginTop: '8px' }}>
                                <p style={{ color: '#55ff55', fontWeight: 'bold', fontSize: '16px', marginBottom: '5px', fontFamily: '"Minecraftia", sans-serif' }}>🎉 Great job! The code worked!</p>
                                <p style={{ color: '#aaaaaa', fontStyle: 'italic', marginBottom: '10px', fontSize: '13px' }}>You can keep editing and experimenting!</p>
                                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                    <button className="mc-button" onClick={resetCode}>Try Again 🔄</button>
                                    <button className="mc-button" onClick={prevStep} disabled={currentStep === 0}>Previous Level ⬅️</button>
                                    <button className="mc-button" onClick={nextStep}>Next Level ➡️</button>
                                </div>
                            </div>
                        ) : (
                            <p className="hint-text">Run the correct code to gain XP and advance!</p>
                        )}
                    </div>
                )}

                {step.type === 'quiz' && (
                    <div className="quiz-section">
                        <Quiz
                            key={currentStep}
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
