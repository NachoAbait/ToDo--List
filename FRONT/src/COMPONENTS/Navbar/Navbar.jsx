import React, { useState, useEffect } from "react";
import css from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faListCheck } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import ModalLogin from "../ModalLogin/ModalLogin.jsx";
import ModalSignup from "../ModalSignup/ModalSignup.jsx";
import { useSelector , useDispatch} from "react-redux"
import { openModal2 } from "../../REDUX/Actions/openModal2";
import { openModal } from "../../REDUX/Actions/openModal";

export default function Navbar() {
  const dispatch = useDispatch()

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ModalOpen = useSelector((state) => state.isOpen);
  const ModalOpen2 = useSelector((state) => state.isOpen2);


  const toggleModal = () => {
    dispatch(openModal())
  };
  
  const toggleModal2 = () => {
    dispatch(openModal2())
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <FontAwesomeIcon
          icon={faListCheck}
          style={{ color: "#e5ea47" }}
          className={css.task}
        />
        <h1>TaskTracker</h1>
      </div>
      <div className={css.usuario}>
        <FontAwesomeIcon
          icon={faUser}
          style={{ color: "#ffffff" }}
          className={css.user}
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <div className={css.menu}>
            <a href="#" onClick={toggleModal} className={css.L}>
              LogIn
            </a>
            <Modal
              isOpen={ModalOpen}
              onRequestClose={toggleModal}
              contentLabel="Login Modal"
            >
              <ModalLogin />
            </Modal>
            <a href="#" onClick={toggleModal2} className={css.S}>
              SignUp
            </a>
            <Modal
              isOpen={ModalOpen2}
              onRequestClose={toggleModal2}
              contentLabel="Signin Modal"
            >
              <ModalSignup/>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}
