import styles from "./Rodape.module.css";
import { ReactComponent as MarcaRegistrada } from "../../assets/marca_registrada.svg";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
      Desenvolvido por Daniel Pinheiro
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/DanielPinheir"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/daniel-pinheiro-machado/"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </footer>
  );
}
