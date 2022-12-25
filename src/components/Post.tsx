import styles from "./Post.module.css";
import { Trash } from "phosphor-react";

interface Assignment {
  content: string;
  check: boolean;
}

interface PostProps {
  assignment: Assignment;
  handleAssignmentsDelete: (deleted: string) => void;
  handleCheckAssignment: (index: number) => void;
  index: number;
}

export function Post({
  assignment,
  handleAssignmentsDelete,
  handleCheckAssignment,
  index
}:PostProps) {
  function handleDeleteAssignments() {
    handleAssignmentsDelete(assignment.content);
  }

  function handleCheck() {
    handleCheckAssignment(index);
  }

  return (
    <div className={styles.container}>
      <div className={styles.checkAndContent}>
        <div className={styles.checkbox}>
          <input type="checkbox" defaultChecked={assignment.check} onClick={handleCheck} />
          <label></label>
        </div>
        <p>{assignment.content}</p>
      </div>
      <button onClick={handleDeleteAssignments}>
        <Trash />
      </button>
    </div>
  );
}
