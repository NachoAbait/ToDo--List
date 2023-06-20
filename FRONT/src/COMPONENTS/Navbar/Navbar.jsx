import React from "react";
import css from "./navbar.module.css";





export default function Navbar() {
  return (
    <div className={css.container}>
      <div className={css.logo}>
          Logo
      </div>
      <div className={css.usuario}>
        <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} className={css.user} />
      </div>
    </div>
  )
}
