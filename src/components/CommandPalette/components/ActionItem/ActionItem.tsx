import styles from './ActionItem.module.scss';
import Command from '../../../../interfaces';
import React from 'react';

function ActionItem({ item }: ActionItemProps) {
  const handleKeyEvent = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      item.action();
    }
  };

  return (
    <button
      className={styles.actionItem}
      onKeyDown={handleKeyEvent}
      onDoubleClick={item.action}
    >
      {item.name}
    </button>
  );
}

interface ActionItemProps {
  item: Command;
}

export default ActionItem;
