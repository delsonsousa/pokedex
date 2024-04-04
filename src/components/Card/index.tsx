import React, { useEffect, useState, useRef } from "react";
import {
  CardContainer,
  CardContent,
  CardDescription,
  CardDetail,
  CardImage,
  CardImageBackground,
  CardName,
  CardTypeContainer,
  Link,
} from "./styles";
import Head from "next/head";
import Loading from "../Loading";

type PokemonProps = {
  name: string;
  abilities: string;
  types: "fire" | "water" | "grass" | "poison";
  imageUrl: string;
  url: string;
};

const Card = () => {
  const [pokemonData, setPokemonData] = useState<PokemonProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
      );
      if (!response.ok) {
        throw new Error("Erro ao carregar os dados");
      }
      const data = await response.json();
      setPokemonData((prevData) => [...prevData, ...data.results]);
      setLoading(false);
      setOffset(offset + 20);
      if (data.results.length < 20) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const getPokemonDetails = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erro ao carregar os detalhes do Pokémon");
      }
      const data = await response.json();
      const abilities = data.abilities
        .map((ability) => ability.ability.name)
        .join(", ");
      const types = data.types.map((type) => type.type.name).join(", ");
      return {
        imageUrl: data.sprites.front_default,
        abilities,
        types,
      };
    } catch (error) {
      console.error("Erro:", error);
      return null;
    }
  };

  useEffect(() => {
    if (!loading && hasMore) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchData();
        }
      });
      observer.observe(containerRef.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [loading, hasMore]);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const promises = pokemonData.map((pokemon) =>
        getPokemonDetails(pokemon.url)
      );
      const details = await Promise.all(promises);
      setPokemonData((prevData) =>
        prevData.map((pokemon, index) => ({ ...pokemon, ...details[index] }))
      );
    };

    fetchPokemonDetails();
  }, [pokemonData]);

  return (
    <>
      <div>
        <Head>
          <title>Pokémons</title>
        </Head>
        <CardContainer>
          {pokemonData.map((pokemon, index) => (
            <Link key={index} href={`/detalhesPokemon/${pokemon.name}`}>
              <CardContent
                variant={
                  pokemon.types ? pokemon.types.split(",")[0].trim() : ""
                }
              >
                <CardImageBackground variant={pokemon.types} />
                {pokemon.imageUrl ? (
                  <CardImage src={pokemon.imageUrl} alt={pokemon.name} />
                ) : (
                  <Loading />
                )}

                <CardName>{pokemon.name}</CardName>
                <CardDescription>
                  <CardDetail>
                    {pokemon.abilities && pokemon.abilities.split(",")[0]}{" "}
                  </CardDetail>
                </CardDescription>
                <CardDescription>
                  {pokemon.types &&
                    pokemon.types.split(",").map((type, index) => (
                      <CardTypeContainer variant={pokemon.types} key={index}>
                        <CardDetail>{type.trim()}</CardDetail>
                        {index < pokemon.types.split(",").length - 1}
                      </CardTypeContainer>
                    ))}
                </CardDescription>
              </CardContent>
            </Link>
          ))}
        </CardContainer>
        {loading && <Loading />}
        <div ref={containerRef}></div>
      </div>
    </>
  );
};

export default Card;
