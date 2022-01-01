import React, { useState } from 'react';
import { ActionItem, CommandPaletteSearchBar } from './components';
import styles from './CommandPalette.module.scss';
import Command from '../../interfaces/Command';

function CommandPalette({ commands }: CommandPaletteProps) {
  const [filteredCommands, setFilteredCommands] = useState(commands);

  const onSearchChange = (newSearch: string) => {
    setFilteredCommands(
      commands.filter(item =>
        item.name.toLowerCase().includes(newSearch.toLowerCase())
      )
    );
  };

  return (
    <div className={styles.container}>
      <CommandPaletteSearchBar onSearchChange={onSearchChange} />
      {filteredCommands.map(command => (
        <div key={command.key}>
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
