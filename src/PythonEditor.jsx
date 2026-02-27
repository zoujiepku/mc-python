import React, { useState } from 'react';
import { usePyodide } from './PyodideProvider';
import { Play } from 'lucide-react';
import './PythonEditor.css';

export const PythonEditor = ({ initialCode, onRunSuccess }) => {
    const { pyodide, isLoading } = usePyodide();
    const [code, setCode] = useState(initialCode || '');
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    const runCode = async () => {
        if (!pyodide || isRunning) return;

        setIsRunning(true);
        let currentOutput = '';

        // Redirect stdout for this specific run
        window.handlePyodideStdout = (msg) => {
            currentOutput += msg + '\n';
        };
        window.handlePyodideStderr = (msg) => {
            currentOutput += 'ERROR: ' + msg + '\n';
        };

        try {
            await pyodide.runPythonAsync(code);
            setOutput(currentOutput);
            if (onRunSuccess) {
                onRunSuccess(currentOutput, code);
            }
        } catch (err) {
            setOutput(currentOutput + '\nError:\n' + err.message);
        } finally {
            setIsRunning(false);
            window.handlePyodideStdout = null;
            window.handlePyodideStderr = null;
        }
    };

    return (
        <div className="python-editor-container">
            <div className="editor-header">
                <span className="editor-title">🐍 Python Command Block</span>
                <button
                    className="run-button"
                    onClick={runCode}
                    disabled={isLoading || isRunning}
                >
                    <Play size={16} /> {isLoading ? 'Loading Python...' : isRunning ? 'Running...' : 'Run Code'}
                </button>
            </div>
            <textarea
                className="code-textarea"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck="false"
                placeholder="Type your Python code here..."
                rows={Math.max(3, code.split('\n').length + 1)}
            />
            <div className="terminal-output">
                <div className="terminal-header">Output:</div>
                <pre className="terminal-content">{output || 'No output yet...'}</pre>
            </div>
        </div>
    );
};
