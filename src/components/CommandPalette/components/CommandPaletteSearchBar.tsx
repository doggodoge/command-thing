import React, { useState } from 'react';
import styles from './CommandPaletteSearchBar.module.scss';

function CommandPaletteSearchBar({
  onSearchChange,
}: CommandPaletteSearchBarProps) {
  const [text, setText] = useState('');

  const handleReturn = () => {
    console.log('pressed return');
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
          onSearchChange(e.target.value);
        }}
      />
      <div className={styles.return} onClick={handleReturn}>⮐</div>
    </div>
  );
}

interface CommandPaletteSearchBarProps {
  onSearchChange: (newSearch: string) => void;
}

export default CommandPaletteSearchBar;
