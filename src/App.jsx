import React from 'react';
import { PyodideProvider } from './PyodideProvider';
import { LessonRenderer } from './LessonRenderer';
import './App.css';

function App() {
  return (
    <PyodideProvider>
      <div className="app-container">
        <header className="app-header">
          <span className="logo-icon">⛏️</span>
          <h1>Python for Kids</h1>
          <span className="header-divider">|</span>
          <span className="subtitle">Learn to code with magical command blocks!</span>
        </header>

        <main className="main-content">
          <LessonRenderer />
        </main>
      </div>
    </PyodideProvider>
  );
}

export default App;
