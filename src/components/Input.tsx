import { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface PropsInput {
  newAssignment: string;
  setNewAssignment: (event: string) => void;
}

export function Input({ newAssignment, setNewAssignment }: PropsInput) {

  function handleNewAssignmentChange(event: ChangeEvent<HTMLInputElement>) {
    setNewAssignment(event.target.value)
  }

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Adicione uma nova tarefa!"
      value={newAssignment}
      onChange={handleNewAssignmentChange}
    />
  );
}
