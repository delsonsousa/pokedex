import React, { useState } from "react";
import { Form, Title, TransactionsContainer, InputContainer } from "./styles";
import Head from "next/head";

type ContactProps = {
  nome: string;
  email: string;
  textArea: string;
};

export default function Contato() {
  const [form, setForm] = useState<ContactProps>({
    nome: "",
    email: "",
    textArea: "",
  });
  const [error, setError] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.nome || !form.email || !form.textArea) {
      setError(true);
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(form.email)) {
      setError(true);
      return;
    }

    try {
      const response = await fetch("http://localhost:3333/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setForm({
          nome: "",
          email: "",
          textArea: "",
        });
      } else {
        alert(
          "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."
        );
      }
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      alert(
        "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."
      );
    } finally {
      setIsSubmitting(false);
      setError(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>
      <TransactionsContainer>
        <Title>Contato</Title>

        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <input
              type="text"
              placeholder="Nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              style={{
                border: error && !form.nome ? "1px solid #F75A68" : "",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              style={{
                border: error && !form.email ? "1px solid #F75A68" : "",
              }}
            />
          </InputContainer>
          <textarea
            placeholder="Mensagem"
            name="textArea"
            value={form.textArea}
            onChange={handleChange}
            style={{
              border: error && !form.textArea ? "1px solid #F75A68" : "",
            }}
          />
          <button type="submit">
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </Form>
      </TransactionsContainer>
    </>
  );
}
