import Card from "@/components/Card";
import Head from "next/head";
import { PokedexContainer, Title } from "./styles";
import Loading from "@/components/Loading";

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
