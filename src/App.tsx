import React, { useState } from 'react';
import styles from './App.module.scss';

interface Command {
  name: string;
  action: () => void;
}

interface CommandList {
  commands: Command[];
}

function CommandPaletteSearchBar() {
  const [text, setText] = useState('');

  return (
    <div>
      <input type='text' value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
}

function CommandPalette({ commands }: CommandList) {
  const [search, setSearch] = useState('');
  const [filteredList, setFilteredList] = useState(commands);

  const handleFilterList = () => {
    setFilteredList(filteredList.filter(item => item.name.includes(search)));
  };

  return (
    <div>
      <CommandPaletteSearchBar />
      {filteredList.map(item => (
        <div>
          <button onClick={item.action}>{item.name}</button>
        </div>
      ))}
    </div>
  );
}

function App() {
  const someCommandList: Command[] = [
    {
      name: 'First command', action: () => {
        console.log('Executed first command');
      }
    },
    {
      name: 'Second command', action: () => {
        console.log('Executed second command');
      }
    }
  ];

  return (
    <div className={styles.app}>
      <h1>Action Menu</h1>
      <CommandPalette commands={someCommandList} />
    </div>
  );
}

export default App;
