import { useState } from 'react';
import styles from './App.module.scss';
import Command from './interfaces';
import CommandPalette from './components';
import { useKeyboardShortcuts } from './hooks';

function App() {
  const [clickedButton, setClickedButton] = useState('');

  const { isCommandPaletteOpen, setIsCommandPaletteOpen } =
    useKeyboardShortcuts();

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

  const onClickOpenButton = () => {
    setIsCommandPaletteOpen(true);
  };

  return (
    <div className={styles.app}>
      <header>
        <h1>Action Menu</h1>
      </header>
      <p>
        Press the <kbd>⌘</kbd> + <kbd>shift</kbd> + <kbd>k</kbd> key to open the
        command palette.
      </p>
      <div>
        <label htmlFor="open-button">Or open it with: </label>
        <button id="open-button" onClick={onClickOpenButton}>
          Open
        </button>
      </div>
      <p>
        Press <kbd>Escape</kbd> to close the command palette.
      </p>
      <CommandPalette commands={commands} isOpen={isCommandPaletteOpen} />
      <p>{clickedButton}</p>
    </div>
  );
}

export default App;
