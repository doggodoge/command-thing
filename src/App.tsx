import React, { useState } from 'react';
import styles from './App.module.scss';
import Command from './interfaces';
import CommandPalette from './components';

function App() {
  const [clickedButton, setClickedButton] = useState('');

  const commands: Command[] = [
    {
      name: 'First Command',
      action: () => {
        setClickedButton('First command activated');
      },
    },
    {
      name: 'Second Command',
      action: () => {
        setClickedButton('Second command activated');
      },
    },
    {
      name: 'Third Command',
      action: () => {
        setClickedButton('Third command activated');
      },
    },
    {
      name: 'Fourth Command',
      action: () => {
        setClickedButton('Fourth command activated');
      },
    },
  ];

  return (
    <div className={styles.app}>
      <header>
        <h1>Action Menu</h1>
      </header>
      <CommandPalette commands={commands} />
      <p>{clickedButton}</p>
    </div>
  );
}

export default App;
