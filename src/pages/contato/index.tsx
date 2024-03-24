import React from "react";
import { Form, Title, TransactionsContainer, InputContainer } from "./styles";
import Head from "next/head";

export default function contato() {
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>
      <TransactionsContainer>
        <Title>Contato</Title>

        <Form>
          <InputContainer>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
          </InputContainer>
          <textarea placeholder="Mensagem" />
          <button type="submit">Enviar</button>
        </Form>
      </TransactionsContainer>
    </>
  );
}
