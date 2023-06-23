import React from "react";
import css from "./ModalSignin.module.css"

export default function ModalSignin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
  };

  return (
    <div className={css.container}>
      
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.signin}>
          <h1>Signin</h1>
       </div>
        
  
        <input type="email" placeholder=" Insert email" name="email" className={css.input} />
        <input type="password" placeholder=" Insert password" name="password" className={css.input}/>
        <button type="submit" className={css.btn}>Iniciar sesión</button>
    </form>
    </div>
    
  );
}
