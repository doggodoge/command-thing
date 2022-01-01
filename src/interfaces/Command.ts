interface Command {
  key: number;
  name: string;
  action: () => void;
}

export default Command;
