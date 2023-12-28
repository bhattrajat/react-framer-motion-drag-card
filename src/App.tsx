import { useState } from 'react';
import './App.css';
import Card from './Card';

const initialState = [
  { id: 1, text: 'Card 1', bgColor: '#dc2626' },
  { id: 2, text: 'Card 2', bgColor: '#16a34a' },
  { id: 3, text: 'Card 3', bgColor: '#9333ea' },
];
function App() {
  const [list, setList] = useState(initialState);
  const [isDragging, setIsDragging] = useState(false);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        minWidth: '100vw',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden',
      }}
    >
      <h2>
        Inspired from{' '}
        <a target="_blank" href="https://ui.dev/">
          ui.dev
        </a>
      </h2>
      <div className="grid">
        {list.map((item, index) => (
          <Card
            setList={setList}
            isDragging={isDragging}
            setIsDragging={setIsDragging}
            key={item.id}
            id={item.id}
            index={index}
            bgColor={item.bgColor}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
