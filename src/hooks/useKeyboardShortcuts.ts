import { useState, useCallback, useEffect } from 'react';

function useKeyboardShortcuts(): boolean {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (
      event.metaKey === true &&
      event.shiftKey === true &&
      event.key === 'k'
    ) {
      setIsCommandPaletteOpen(true);
    }
    if (event.key === 'Escape') {
      setIsCommandPaletteOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return isCommandPaletteOpen;
}

export default useKeyboardShortcuts;
