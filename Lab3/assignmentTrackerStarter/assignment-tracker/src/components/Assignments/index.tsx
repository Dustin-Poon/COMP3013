// Import necessary styles and components
import styles from "./assignments.module.css";
import { Assignment } from "../Assignment";

// Define the structure of an Assignment object
interface Assignment {
  id: string; // Change from number to string for crypto
  title: string;
  completed: boolean;
  dueDate: Date;
}

// Define the props for the Assignments component
interface AssignmentsProps {
  assignments: Assignment[];
  deleteAssignment: (id: string) => void; // Update parameter type to string
  toggleCompletion: (id: string) => void; // Update parameter type to string
}

// Assignments component to display a list of assignments
export function Assignments({ assignments, deleteAssignment, toggleCompletion }: AssignmentsProps) {
  // Calculate the number of completed assignments
  const completedCount = assignments.filter((assignment) => assignment.completed).length;

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
