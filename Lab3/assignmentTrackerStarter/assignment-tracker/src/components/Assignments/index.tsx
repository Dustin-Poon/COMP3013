// Import necessary modules
import styles from "./assignments.module.css";
import { Assignment } from "../Assignment"; // Import Assignment component

// Define the props for the Assignments component
interface Assignment {
  id: number;
  title: string;
  completed: boolean;
}

interface AssignmentsProps {
  assignments: Assignment[];
  deleteAssignment: (id: number) => void;
  toggleCompletion: (id: number) => void;
}

export function Assignments({ assignments, deleteAssignment, toggleCompletion }: AssignmentsProps) {
  // Calculate the number of completed assignments
  const completedCount = assignments.filter((assignment) => assignment.completed).length;

  // Render the list of assignments and header
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedCount} of {assignments.length}</span>
        </div>
      </header>
      <div className={styles.list}>
        {assignments.map((assignment) => (
          <Assignment
            key={assignment.id}
            assignment={assignment}
            deleteAssignment={deleteAssignment}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </div>
    </section>
  );
}
