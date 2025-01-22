import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/Maincontent';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <div className="h-screen flex bg-[#F3F5F7] px-3 py-4">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <MainContent />
      </div>
    </>
  );
}

export default App;
