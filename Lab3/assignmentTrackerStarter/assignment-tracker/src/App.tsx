// Import necessary components and hooks
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { Assignment } from "./types/types";

function App() {
  // State to hold the list of assignments
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  // Function to add a new assignment to the list
  const addAssignment = (title: string, dueDate: Date) => {
    // Create a new assignment object with a unique ID
    const newAssignment = {
      id: crypto.randomUUID(), // Use crypto.randomUUID() for unique ID
      title,
      completed: false,
      dueDate,
    };
    // Update the state with the new assignment
    setAssignments([...assignments, newAssignment]);
  };

  // Function to delete an assignment by its ID
  const deleteAssignment = (id: string) => { // Update parameter type to string
    // Filter out the assignment with the specified ID
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };

  // Function to toggle the completion status of an assignment by its ID
  const toggleCompletion = (id: string) => { // Update parameter type to string
    // Map through assignments and toggle the completed status if ID matches
    setAssignments(assignments.map((assignment) =>
      assignment.id === id ? { ...assignment, completed: !assignment.completed } : assignment
    ));
  };

  // Render the Header and Assignments components, passing necessary props
  return (
    <>
      <Header addAssignment={addAssignment} />
      <Assignments
        assignments={assignments}
        deleteAssignment={deleteAssignment}
        toggleCompletion={toggleCompletion}
      />
    </>
  );
}

export default App;
