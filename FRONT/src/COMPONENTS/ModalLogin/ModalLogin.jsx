import React from "react";
import css from "./ModalLogin.module.css"

export default function ModalLogin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
  };

  return (
    <div className={css.container}>
      
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.signin}>
          <h1>Login</h1>
       </div>
        
  
        <input type="email" placeholder=" Insert email" name="email" className={css.input} />
        <input type="password" placeholder=" Insert password" name="password" className={css.input}/>
        <button type="submit" className={css.btn}>Iniciar sesión</button>
    </form>
    </div>
    
  );
}
