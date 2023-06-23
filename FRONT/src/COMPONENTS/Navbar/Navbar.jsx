import React, { useState } from "react";
import css from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faListCheck } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import ModalLogin from "../ModalLogin/ModalLogin.jsx";
import ModalSignin from "../ModalSignin/ModalSignin.jsx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleModal2 = () => {
    setIsModalOpen2(!isModalOpen2);
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
              Login
            </a>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={toggleModal}
              contentLabel="Login Modal"
            >
              <ModalLogin />
            </Modal>
            <a href="#" onClick={toggleModal2} className={css.S}>
              Signin
            </a>
            <Modal
              isOpen={isModalOpen2}
              onRequestClose={toggleModal2}
              contentLabel="Signin Modal"
            >
              <ModalSignin />
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}
