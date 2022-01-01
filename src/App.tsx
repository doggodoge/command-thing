import React from 'react';
import styles from './App.module.scss';
import Command from './interfaces';
import CommandPalette from './components';

const commandList: Command[] = [
  {
    key: 1,
    name: 'First Command',
    action: () => {
      console.log('Executed first command');
    },
  },
  {
    key: 2,
    name: 'Second Command',
    action: () => {
      console.log('Executed second command');
    },
  },
  {
    key: 3,
    name: 'Third Command',
    action: () => {
      console.log('Executed third command');
    },
  },
  {
    key: 4,
    name: 'Fourth Command',
    action: () => {
      console.log('Executed fourth command');
    },
  },
];

function App() {
  return (
    <div className={styles.app}>
      <header>
        <h1>Action Menu</h1>
      </header>
      <CommandPalette commands={commandList} />
    </div>
  );
}

export default App;
