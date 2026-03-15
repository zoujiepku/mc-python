import React from 'react';
import { chapterManifest } from './chapters';
import './ChapterSelect.css';

export const ChapterSelect = ({ onSelectChapter }) => {
    return (
        <div className="chapter-select-container">
            <h2 className="chapter-select-title">{`\u{1F4DA} Choose Your Adventure!`}</h2>
            <p className="chapter-select-subtitle">{`Pick a chapter to start learning Python! \u{1F40D}`}</p>
            <div className="chapter-grid">
                {chapterManifest.map((chapter, index) => (
                    <button
                        key={chapter.id}
                        className="chapter-card"
                        onClick={() => onSelectChapter(index)}
                    >
                        <span className="chapter-emoji">{chapter.emoji}</span>
                        <h3 className="chapter-card-title">
                            {chapter.title.replace(/^Chapter\s+(\d+):\s*/i, '$1: ')}
                        </h3>
                        <p className="chapter-card-desc">{chapter.description}</p>
                        <span className="chapter-card-count">{chapter.lessonCount ?? chapter.lessons?.length ?? 0} steps</span>
                    </button>
                ))}
            </div>
        </div>
    );
};
