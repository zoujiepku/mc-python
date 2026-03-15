import React, { useState } from 'react';
import './Quiz.css';

const SUCCESS_MESSAGES = [
    "🎉 Diamond! Correct!",
    "⛏️ Awesome! You mined the right answer!",
    "✨ Like magic! That's correct!",
    "🏆 Level Up! Great job!",
    "🔥 You're on fire! Correct!",
    "💚 Splendid! You got it!",
    "🚀 Wow, perfect answer!",
    "⚡ Sharpness V! Spot on!",
    "💎 You found the treasure!",
    "🌟 Enchanting! That is right!",
    "🎯 Bullseye! Perfect hit!",
    "🧠 Big brain energy! Correct!",
    "🎂 Have some cake! You got it!",
    "👑 True speedrunner! Correct!",
    "🍎 Golden apple for you!",
    "🐉 Ender Dragon defeated! Great job!",
    "💪 Strong as Netherite! Correct!",
    "🗺️ You know the map! Spot on!",
    "🎶 jukebox hits! Right answer!",
    "🦅 Elytra unlocked! Flying high!"
];

const FAIL_MESSAGES = [
    "💥 Creeper hiss! Try again!",
    "🧟 Zombie bite! Not quite right.",
    "🕷️ Caught in a web! Give it another shot.",
    "🌋 Fell in lava! Oops! Try again.",
    "🏹 Missed the shot! Try one more time.",
    "🌧️ Oh no, it started raining. Try again!",
    "💀 Ouch! Better luck on the next try!",
    "👻 Spooked by a Ghast! Nope!",
    "🌵 Pricked by a cactus! Ouch, try again!",
    "🐷 Oink? That wasn't it.",
    "⛏️ Pickaxe broke! Try a different one.",
    "🧙‍♂️ Witched! That's incorrect.",
    "🌊 Swept away by water! Try again.",
    "🚪 Wrong door! Turn around and try again.",
    "💣 TNT explosion! Oops!",
    "🌑 It's getting dark... try again!",
    "🎣 No fish this time! Recast your line.",
    "🔥 Blaze fireball! Watch out and try again.",
    "🦴 Skeleton arrow! Not quite.",
    "💨 Blew away! Give it another guess."
];

export const Quiz = ({ question, options, correctAnswerIndex, onCorrect }) => {
    const [selected, setSelected] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [feedbackMsg, setFeedbackMsg] = useState('');

    const handleSelect = (index) => {
        setSelected(index);
        if (index === correctAnswerIndex) {
            setIsCorrect(true);
            const randomMsg = SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)];
            setFeedbackMsg(randomMsg);
            setTimeout(() => {
                onCorrect();
                setSelected(null);
                setIsCorrect(null);
                setFeedbackMsg('');
            }, 1500);
        } else {
            setIsCorrect(false);
            const randomMsg = FAIL_MESSAGES[Math.floor(Math.random() * FAIL_MESSAGES.length)];
            setFeedbackMsg(randomMsg);
            setTimeout(() => {
                setSelected(null);
                setIsCorrect(null);
                setFeedbackMsg('');
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
            {isCorrect === true && <div className="quiz-feedback correct-text">{feedbackMsg}</div>}
            {isCorrect === false && <div className="quiz-feedback wrong-text">{feedbackMsg}</div>}
        </div>
    );
};
