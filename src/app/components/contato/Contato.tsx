"use client";

import { useState } from "react";
import styles from "./contato.module.css";
import emailjs from "@emailjs/browser";

export default function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDeFault();

    if (name === " " || email === " " || message === " ") {
      alert("preencha direito essa bagaça");
      return;
    }
    const templeteParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_06wu4lc",
        "template_e5n308a",
        templeteParams,
        "y-QpZiIJOp09Nnlkt"
      )
      .then((response) => {
        console.log("email enviado", response.status, response.text);
      });
  }
  return (
    <div className={styles.containe}>
      <h1 className={styles.title}>Contato</h1>

      <form className={styles.form} onSubmit={() => {}}>
        <input
          className={styles.input}
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className={styles.input}
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className={styles.textarea}
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className={styles.button} type="submit" value="Enviar" />
      </form>
    </div>
  );
}
