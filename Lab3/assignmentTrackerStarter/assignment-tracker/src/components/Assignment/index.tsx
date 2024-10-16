// Import necessary modules
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCircle , BsCheckCircle } from "react-icons/bs";

// Define the props for the Assignment component
interface AssignmentProps {
  assignment: {
    id: number;
    title: string;
    completed: boolean;
  };
  deleteAssignment: (id: number) => void;
  toggleCompletion: (id: number) => void;
}

export function Assignment({ assignment, deleteAssignment, toggleCompletion }: AssignmentProps) {
  return (
    <div className={`${styles.assignment} ${assignment.completed ? styles.completed : ""}`}>
      <button className={styles.checkContainer} onClick={() => toggleCompletion(assignment.id)}>
        {assignment.completed ? (
          <BsCheckCircle size={20} />
        ) : (
          <BsCircle size={20} />
        )}
      </button>
      <p>{assignment.title}</p>
      <button className={styles.deleteButton} onClick={() => deleteAssignment(assignment.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
