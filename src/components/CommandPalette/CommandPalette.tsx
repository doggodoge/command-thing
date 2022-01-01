import React, { useState } from 'react';
import CommandPaletteSearchBar from './components';
import styles from './CommandPalette.module.scss';
import Command from '../../interfaces/Command';

function CommandPalette({ commands }: CommandPaletteProps) {
  const [filteredList, setFilteredList] = useState(commands);

  const onSearchChange = (newSearch: string) => {
    setFilteredList(
      commands.filter(item =>
        item.name.toLowerCase().includes(newSearch.toLowerCase())
      )
    );
  };

  return (
    <div className={styles.container}>
      <CommandPaletteSearchBar onSearchChange={onSearchChange} />
      {filteredList.map(item => (
        <div key={item.key}>
          <button className={styles.commandButton} onClick={item.action}>{item.name}</button>
        </div>
      ))}
    </div>
  );
}

interface CommandPaletteProps {
  commands: Command[];
}

export default CommandPalette;
