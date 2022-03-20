import { useState } from 'react';
import styles from './CommandPaletteSearchBar.module.scss';

function CommandPaletteSearchBar({
  onSearchChange,
}: CommandPaletteSearchBarProps) {
  const [text, setText] = useState('');

  const handleChange = (newText: string) => {
    setText(newText);
    onSearchChange(newText);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        type="text"
        value={text}
        onChange={e => handleChange(e.target.value)}
      />
      <button className={styles.clear} onClick={() => handleChange('')}>
        ×
      </button>
    </div>
  );
}

interface CommandPaletteSearchBarProps {
  onSearchChange: (newSearch: string) => void;
}

export default CommandPaletteSearchBar;
