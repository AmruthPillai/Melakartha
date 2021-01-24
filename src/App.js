import { useState } from 'react';
import './App.css';

function App() {
  const [key, setKey] = useState('');

  const handleClick = async (key) => {
    try {
      setKey(key);
      await (await new Audio(`/assets/sounds/tabla/${key}.wav`)).play();
      setTimeout(() => setKey(''), 200);
    } catch (error) {}
  };

  const handleKeyDown = (event) => handleClick(event.key.toString().toLowerCase());

  return (
    <div
      autoFocus
      tabIndex={-1}
      className="App"
      onKeyPress={handleKeyDown}
      ref={el => el && el.focus()}
    >
      <div
        onClick={() => handleClick('q')}
        className={`btn-tabla ${key === 'q' && 'selected'}`}
      >
        <span>Q</span>
      </div>
      <div
        onClick={() => handleClick('w')}
        className={`btn-tabla ${key === 'w' && 'selected'}`}
      >
        <span>W</span>
      </div>
      <div
        onClick={() => handleClick('e')}
        className={`btn-tabla ${key === 'e' && 'selected'}`}
      >
        <span>E</span>
      </div>
      <div
        onClick={() => handleClick('r')}
        className={`btn-tabla ${key === 'r' && 'selected'}`}
      >
        <span>R</span>
      </div>

      <div
        onClick={() => handleClick('a')}
        className={`btn-tabla ${key === 'a' && 'selected'}`}
      >
        <span>A</span>
      </div>
      <div
        onClick={() => handleClick('s')}
        className={`btn-tabla ${key === 's' && 'selected'}`}
      >
        <span>S</span>
      </div>
      <div
        onClick={() => handleClick('d')}
        className={`btn-tabla ${key === 'd' && 'selected'}`}
      >
        <span>D</span>
      </div>
      <div
        onClick={() => handleClick('f')}
        className={`btn-tabla ${key === 'f' && 'selected'}`}
      >
        <span>F</span>
      </div>

      <div
        onClick={() => handleClick('z')}
        className={`btn-tabla ${key === 'z' && 'selected'}`}
      >
        <span>Z</span>
      </div>
      <div
        onClick={() => handleClick('x')}
        className={`btn-tabla ${key === 'x' && 'selected'}`}
      >
        <span>X</span>
      </div>
      <div
        onClick={() => handleClick('c')}
        className={`btn-tabla ${key === 'c' && 'selected'}`}
      >
        <span>C</span>
      </div>
      <div
        onClick={() => handleClick('v')}
        className={`btn-tabla ${key === 'v' && 'selected'}`}
      >
        <span>V</span>
      </div>
    </div>
  );
}

export default App;
