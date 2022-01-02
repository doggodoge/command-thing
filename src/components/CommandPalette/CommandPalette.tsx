import React, { useState } from 'react';
import { ActionItem, CommandPaletteSearchBar } from './components';
import Command from '../../interfaces/Command';
import styles from './CommandPalette.module.scss';

function CommandPalette({ commands }: CommandPaletteProps) {
  const [filteredCommands, setFilteredCommands] = useState(commands);

  const handleSearchChange = (newSearch: string) => {
    setFilteredCommands(
      commands.filter(item =>
        item.name.toLowerCase().includes(newSearch.toLowerCase())
      )
    );
  };

  return (
    <div className={styles.container}>
      <CommandPaletteSearchBar onSearchChange={handleSearchChange} />
      {filteredCommands.map(command => (
        <div key={command.name}>
          <ActionItem item={command} />
        </div>
      ))}
    </div>
  );
}

interface CommandPaletteProps {
  commands: Command[];
}

export default CommandPalette;
