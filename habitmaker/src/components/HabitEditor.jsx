import React, { useEffect, useState } from "react";
import styles from "./HabitEditor.module.css";
import CustomButton from "./customButton/CustomButton";
import { ToastContainer, toast } from "react-toastify";
export default function HabitEditor() {
  const [habit, setHabit] = useState("");
  const [habits, setHabits] = useState([]);
  const handleChange = (e) => {
    setHabit(e.target.value);
  };
  const notify = () =>
    toast(`${habit} added Successfully`, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
  const handleSubmit = (e) => {
    e.preventDefault();
    setHabits([...habits, habit]);
    localStorage.setItem("newHabit", JSON.stringify(habits));
    // sessionStorage.setItem("habits",JSON.stringify(habits))
    console.log(habit);
    console.log(habits);
    notify();
    setHabit("");
    // alert(`${habit} added successfully`)
  };
  const handleRemove = (idx) => {
    let updatedHabits = habits.filter((val, index) => idx != index);
    localStorage.setItem("newHabit", JSON.stringify(updatedHabits));
    setHabits(updatedHabits);
  };
  useEffect(() => {
    let storedHabits = localStorage.getItem("newHabit");
    // localStorage.removeItem('newHabits')
    setHabits(JSON.parse(storedHabits));
  }, []);
  // toastify function

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={styles.editor}>
        <h1 className={styles.title}>Make New Habit Everyday</h1>
        <input
          type="text"
          name=""
          id={styles.inp}
          placeholder="Enter your habit.."
          value={habit}
          onChange={handleChange}
        />
        <CustomButton
          btnText="Add"
          style={styles.submitBtn}
          handler={handleSubmit}
        />
      </div>
      <div className={styles.habits}>
        <ul className={styles.habitItems}>
          {habits.length > 0 &&
            habits.map((val, idx) => (
              <div className={styles.items}>
                <li key={idx} className={styles.habitItem}>
                  {val}
                </li>
                <CustomButton key={idx+"k"}
                  btnText="Remove"
                  style={styles.submitBtn}
                  handler={() => handleRemove(idx)}
                />
              </div>
            ))}
        </ul>
      </div>
    </>
  );
}