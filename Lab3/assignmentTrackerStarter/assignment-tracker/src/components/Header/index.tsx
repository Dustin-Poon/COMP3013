// Import necessary modules and components
import React, { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { uppercase } from "../../helpers/stringHelpers";

// Define the props for the Header component
interface HeaderProps {
  addAssignment: (title: string, dueDate: Date) => void;
}

export function Header({ addAssignment }: HeaderProps) {
  // State to hold the current input value for the title
  const [title, setTitle] = useState("");
  // State to hold the selected due date
  const [dueDate, setDueDate] = useState<Date | undefined>(undefined);
  // State to control the visibility of the calendar
  const [showCalendar, setShowCalendar] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (title.trim() && dueDate) {
      addAssignment(title.trim(), dueDate); // Add the assignment with the title and due date
      setTitle(""); // Clear the title input
      setDueDate(undefined); // Reset the due date
      setShowCalendar(false); // Hide the calendar after submission
    }
  };

  // Disable the submit button if the title or due date is not set
  const isDisabled = title.trim() === "" || !dueDate;

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
        <button type="button" onClick={() => setShowCalendar(!showCalendar)}>
          {showCalendar ? "Hide Calendar" : "Pick Due Date"}
        </button>
        {showCalendar && (
          <DayPicker
            mode="single"
            selected={dueDate}
            onSelect={setDueDate}
            footer={dueDate ? `Due: ${dueDate.toLocaleDateString()}` : "Pick a due date"}
          />
        )}
        <button type="submit" disabled={isDisabled} className={isDisabled ? styles.disabledButton : ""}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}

