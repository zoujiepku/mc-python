import React, { useState } from 'react';
import { PyodideProvider } from './PyodideProvider';
import { LessonRenderer } from './LessonRenderer';
import { ChapterSelect } from './ChapterSelect';
import { chapters } from './chapters';
import './App.css';

function App() {
  const [currentChapter, setCurrentChapter] = useState(null);

  const handleSelectChapter = (index) => {
    setCurrentChapter(index);
  };

  const handleBackToChapters = () => {
    setCurrentChapter(null);
  };

  return (
    <PyodideProvider>
      <div className="app-container">
        <header className="app-header">
          <span className="logo-icon">⛏️</span>
          <h1>Python for Kids</h1>
          <span className="header-divider">|</span>
          <span className="subtitle">Learn to code with magical command blocks!</span>
        </header>

        {/* Navbar - only show when inside a chapter */}
        {currentChapter !== null && (
          <nav className="navbar">
            <button className="nav-btn nav-home" onClick={handleBackToChapters}>🏠 Chapters</button>
            {chapters.map((ch, index) => (
              <button
                key={ch.id}
                className={`nav-btn ${currentChapter === index ? 'nav-active' : ''}`}
                onClick={() => { setCurrentChapter(index); }}
              >
                {ch.emoji} Ch.{index + 1}
              </button>
            ))}
          </nav>
        )}

        <main className="main-content">
          {currentChapter === null ? (
            <ChapterSelect onSelectChapter={handleSelectChapter} />
          ) : (
            <LessonRenderer
              key={currentChapter}
              chapter={chapters[currentChapter]}
              onBack={handleBackToChapters}
            />
          )}
        </main>
      </div>
    </PyodideProvider>
  );
}

export default App;
