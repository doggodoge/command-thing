import styles from './ActionItem.module.scss';
import Command from '../../../../interfaces';

function ActionItem({ item }: ActionItemProps) {
  return (
    <button className={styles.actionItem} onDoubleClick={item.action}>
      {item.name}
    </button>
  );
}

interface ActionItemProps {
  item: Command;
}

export default ActionItem;
