import React from "react";
import css from "./Card.module.css"

export default function Card({title, description, date}) {
  return (
    <div className={css.card}>
      
      <h3>{title}</h3>
      
        <p>
        { description }
        </p>
      
      <div className={css.date}>{ date }</div>
      <div className={css.btn}>
        ❌
      </div>
    </div>
  );
}
