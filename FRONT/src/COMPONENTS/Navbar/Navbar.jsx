import React from "react";
import css from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser , faListCheck} from "@fortawesome/free-solid-svg-icons"





export default function Navbar() {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <FontAwesomeIcon icon={ faListCheck} style={{color: "#e5ea47",}} className={css.task}/> <h1>TaskTracker</h1>
      </div>
      <div className={css.usuario}>
        <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} className={css.user} />
      </div>
    </div>
  )
}
