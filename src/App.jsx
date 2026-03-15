import React, { useEffect, useState } from 'react';
import { PyodideProvider } from './PyodideProvider';
import { LessonRenderer } from './LessonRenderer';
import { ChapterSelect } from './ChapterSelect';
import { chapterManifest } from './chapters';
import './App.css';

function App() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [isChapterLoading, setIsChapterLoading] = useState(false);
  const [chapterLoadError, setChapterLoadError] = useState(null);

  const handleSelectChapter = (index) => {
    setCurrentChapterIndex(index);
    setIsChapterLoading(true);
    setChapterLoadError(null);
    setCurrentChapter(null);
  };

  const handleBackToChapters = () => {
    setCurrentChapterIndex(null);
  };

  useEffect(() => {
    let cancelled = false;

    if (currentChapterIndex === null) {
      setCurrentChapter(null);
      setIsChapterLoading(false);
      setChapterLoadError(null);
      return () => {
        cancelled = true;
      };
    }

    const manifestEntry = chapterManifest[currentChapterIndex];
    if (!manifestEntry) {
      setCurrentChapter(null);
      setIsChapterLoading(false);
      setChapterLoadError(new Error('Chapter not found'));
      return () => {
        cancelled = true;
      };
    }

    setIsChapterLoading(true);
    setChapterLoadError(null);
    setCurrentChapter(null);

    manifestEntry
      .load()
      .then((chapter) => {
        if (cancelled) return;
        setCurrentChapter(chapter);
        setIsChapterLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Failed to load chapter:', err);
        setChapterLoadError(err);
        setIsChapterLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [currentChapterIndex]);

  return (
    <PyodideProvider>
      <div className="app-container">
        <header
          className="app-header app-header-clickable"
          onClick={handleBackToChapters}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleBackToChapters();
            }
          }}
        >
          <span className="logo-icon">⛏️</span>
          <h1>Python for Kids</h1>
          <span className="header-divider">|</span>
          <span className="subtitle">Learn to code with magical command blocks!</span>
        </header>

        {/* Navbar - only show when inside a chapter */}
        {currentChapterIndex !== null && (
          <nav className="navbar">
            <div className="nav-select-wrapper">
              <select
                className="nav-select"
                value={currentChapterIndex}
                onChange={(e) => setCurrentChapterIndex(Number(e.target.value))}
                aria-label="Select chapter"
              >
                {chapterManifest.map((ch, index) => (
                  <option key={ch.id} value={index}>
                    {ch.emoji} Chapter {index + 1}: {ch.title.replace(/^Chapter\s+\d+:\s*/i, '')}
                  </option>
                ))}
              </select>
            </div>
            <div className="nav-buttons">
              {chapterManifest.map((ch, index) => (
                <button
                  key={ch.id}
                  className={`nav-btn ${currentChapterIndex === index ? 'nav-active' : ''}`}
                  onClick={() => { setCurrentChapterIndex(index); }}
                >
                  {ch.emoji} Ch.{index + 1}
                </button>
              ))}
            </div>
          </nav>
        )}

        <main className="main-content">
          {currentChapterIndex === null ? (
            <ChapterSelect onSelectChapter={handleSelectChapter} />
          ) : chapterLoadError ? (
            <div style={{ textAlign: 'center', color: '#ffaaaa', fontFamily: '"Minecraftia", sans-serif' }}>
              Oops! Failed to load that chapter. Try again or go back to Chapters.
            </div>
          ) : isChapterLoading || !currentChapter ? (
            <div style={{ textAlign: 'center', color: '#c0c0c0', fontFamily: '"Minecraftia", sans-serif' }}>
              Loading chapter...
            </div>
          ) : (
            <LessonRenderer
              key={currentChapterIndex}
              chapter={currentChapter}
              onBack={handleBackToChapters}
            />
          )}
        </main>
      </div>
    </PyodideProvider>
  );
}

export default App;
