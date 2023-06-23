import React from "react";
import css from "./ModalLogin.module.css"
import login from "../../REDUX/Actions/login.js"
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../REDUX/Actions/closeModal";

export default function ModalLogin() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(closeModal())
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target;

    const userData = {
      email: email.value,
      password: password.value
    };

    if ( userData.email === "" || userData.password === "") {
      return alert("You must complete all fields");
    }

    dispatch(login(userData))
      .then(() => {
        // Usuario creado exitosamente
        alert("Login Success! 🥳");
      })
      .catch((error) => {
        // Error en la creación del usuario
        
          alert(error);
        
      });
  };


  return (
    <div className={css.container}>
      <div className={css.close} onClick={handleClick}>
        ❌
      </div>
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
