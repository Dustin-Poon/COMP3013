// Import necessary modules
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { Assignment } from "./types/types";

function App() {
  // Initialize state to hold the list of assignments
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  // Function to add a new assignment to the list
  const addAssignment = (title: string) => {
    const newAssignment = {
      id: Date.now(), // Use timestamp for a unique ID
      title,
      completed: false,
    };
    setAssignments([...assignments, newAssignment]);
  };

  // Function to delete an assignment by ID
  const deleteAssignment = (id: number) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };

  // Function to toggle the completion status of an assignment by ID
  const toggleCompletion = (id: number) => {
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
