import React, { useState } from 'react';
import './Quiz.css';

export const Quiz = ({ question, options, correctAnswerIndex, onCorrect }) => {
    const [selected, setSelected] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleSelect = (index) => {
        setSelected(index);
        if (index === correctAnswerIndex) {
            setIsCorrect(true);
            setTimeout(() => {
                onCorrect();
                setSelected(null);
                setIsCorrect(null);
            }, 1500);
        } else {
            setIsCorrect(false);
            setTimeout(() => {
                setSelected(null);
                setIsCorrect(null);
            }, 1000);
        }
    };

    return (
        <div className="quiz-container">
            <h3 className="quiz-question">{question}</h3>
            <div className="quiz-options">
                {options.map((option, index) => {
                    let btnClass = 'quiz-option';
                    if (selected === index) {
                        btnClass += isCorrect ? ' correct' : ' wrong';
                    }
                    return (
                        <button
                            key={index}
                            className={btnClass}
                            onClick={() => handleSelect(index)}
                            disabled={selected !== null}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
            {isCorrect === true && <div className="quiz-feedback correct-text">🎉 Diamond! Correct!</div>}
            {isCorrect === false && <div className="quiz-feedback wrong-text">💥 Creeper hiss! Try again!</div>}
        </div>
    );
};
