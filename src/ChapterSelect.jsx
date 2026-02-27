import React from 'react';
import { chapters } from './chapters';
import './ChapterSelect.css';

export const ChapterSelect = ({ onSelectChapter }) => {
    return (
        <div className="chapter-select-container">
            <h2 className="chapter-select-title">📚 Choose Your Adventure!</h2>
            <p className="chapter-select-subtitle">Pick a chapter to start learning Python! 🐍</p>
            <div className="chapter-grid">
                {chapters.map((chapter, index) => (
                    <button
                        key={chapter.id}
                        className="chapter-card"
                        onClick={() => onSelectChapter(index)}
                    >
                        <span className="chapter-emoji">{chapter.emoji}</span>
                        <h3 className="chapter-card-title">{chapter.title}</h3>
                        <p className="chapter-card-desc">{chapter.description}</p>
                        <span className="chapter-card-count">{chapter.lessons.length} steps</span>
                    </button>
                ))}
            </div>
        </div>
    );
};
