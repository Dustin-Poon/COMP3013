// Import necessary styles and icons
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCircle, BsCheckCircle } from "react-icons/bs";

// Define the props for the Assignment component
interface AssignmentProps {
  assignment: {
    id: string; // Change from number to string for crypto
    title: string;
    completed: boolean;
    dueDate: Date;
  };
  deleteAssignment: (id: string) => void; // Define the props for the Assignment component
  toggleCompletion: (id: string) => void; // Function to toggle completion status of an assignment by ID
}

// Function to toggle completion status of an assignment by ID
export function Assignment({ assignment, deleteAssignment, toggleCompletion }: AssignmentProps) {
  const today = new Date(); // Get today's date
  const dueDate = new Date(assignment.dueDate); // Convert the due date to a Date object
  const timeDiff = dueDate.getTime() - today.getTime(); // Calculate the time difference in milliseconds
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert the time difference to days

  let dueText = ""; // Initialize dueText variable
  let dueClass = ""; // Initialize dueClass variable

  // Determine the due text and class based on the days difference
  if (daysDiff > 1) {
    dueText = `${daysDiff} days away`;
  } else if (daysDiff === 1) {
    dueText = "Tomorrow";
    dueClass = styles.dueSoon;
  } else {
    dueText = "Due: Now";
    dueClass = styles.dueNow;
  }

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
      <span className={`${styles.dueDate} ${dueClass}`}>{dueText}</span>
      <button className={styles.deleteButton} onClick={() => deleteAssignment(assignment.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
