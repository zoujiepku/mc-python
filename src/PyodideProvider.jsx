import React, { createContext, useContext, useEffect, useState } from 'react';

const PyodideContext = createContext(null);

export const PyodideProvider = ({ children }) => {
  const [pyodide, setPyodide] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPyodideInstance = async () => {
      try {
        if (!window.loadPyodide) {
          throw new Error('Pyodide script not loaded via CDN');
        }
        const pyodideInstance = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/",
        });
        
        // redirect stdout to a custom function we can override
        pyodideInstance.setStdout({ batched: (msg) => {
           if (window.handlePyodideStdout) window.handlePyodideStdout(msg);
        } });
        pyodideInstance.setStderr({ batched: (msg) => {
           if (window.handlePyodideStderr) window.handlePyodideStderr(msg);
        } });

        setPyodide(pyodideInstance);
        setIsLoading(false);
      } catch (err) {
        console.error("Pyodide loading failed:", err);
      }
    };
    loadPyodideInstance();
  }, []);

  return (
    <PyodideContext.Provider value={{ pyodide, isLoading }}>
      {children}
    </PyodideContext.Provider>
  );
};

export const usePyodide = () => useContext(PyodideContext);
