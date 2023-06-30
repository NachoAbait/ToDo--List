import React from "react";
import css from "./Card.module.css"
import { useDispatch } from "react-redux";
import deleteTask from "../../REDUX/Actions/deleteTask";
import getTasks from "../../REDUX/Actions/getTasks";

export default function Card({ title, description, date, id }) {
  const dispatch = useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteTask(id))
    dispatch(getTasks())
  };

  return (
    <div className={css.card}>
      
      <h3>{title}</h3>
      
        <p>
        { description }
        </p>
      
      <div className={css.date}>{ date }</div>
      <div className={css.btn} onClick={handleSubmit}>
        ❌
      </div>
    </div>
  );
}
