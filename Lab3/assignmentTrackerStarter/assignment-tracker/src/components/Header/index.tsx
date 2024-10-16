// Import necessary modules
import React, { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

// Define the props for the Header component
interface HeaderProps {
  addAssignment: (title: string) => void;
}

export function Header({ addAssignment }: HeaderProps) {
  const [title, setTitle] = useState("");// State to hold the current input value

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addAssignment(title.trim());
      setTitle("");// Clear the input after submission

    }
  };

  // Disable the button if the input is empty
  const isDisabled = title.trim() === "";

  // Render the header and form
  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" disabled={isDisabled} className={isDisabled ? styles.disabledButton : ""}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}