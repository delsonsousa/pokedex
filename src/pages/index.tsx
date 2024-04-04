import Head from "next/head";
import Loading from "@/components/Loading";
import Card from "@/components/Card";
import { PokedexContainer, Title } from "./styles";

export default function Home() {
  return (
    <>
      {!(<Card />) && <Loading />}
      <Head>
        <title>Pokedex</title>
      </Head>
      <PokedexContainer>
        <Title>Pokedex</Title>
        <Card />
      </PokedexContainer>
    </>
  );
}
