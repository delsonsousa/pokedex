import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DetailsContainer, DetailsContent } from "./styles";

interface Ability {
  ability: {
    name: string;
  };
}

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface Species {
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
    };
  }[];
}

interface PokemonDetailsProps {
  name: string;
  weight: number;
  height: number;
  abilities: Ability[];
  stats: Stat[];
  species: {
    url: string;
  };
  sprites: {
    front_default: string;
  };
}

const PokemonDetails = () => {
  const router = useRouter();
  const { name } = router.query;
  const [pokemonDetails, setPokemonDetails] =
    useState<PokemonDetailsProps | null>(null);
  const [pokemonDescription, setPokemonDescription] = useState("");

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        if (!name) return;

        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        if (!response.ok) {
          throw new Error("Erro ao carregar os detalhes do Pokémon");
        }
        const data: PokemonDetailsProps = await response.json();
        setPokemonDetails(data);

        const speciesResponse = await fetch(data.species.url);
        if (!speciesResponse.ok) {
          throw new Error("Erro ao carregar a espécie do Pokémon");
        }
        const speciesData: Species = await speciesResponse.json();
        const enDescription = speciesData.flavor_text_entries.find(
          (entry) => entry.language.name === "en"
        );
        setPokemonDescription(enDescription?.flavor_text || "");
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (!pokemonDetails || !pokemonDescription) {
    return <div>Carregando...</div>;
  }

  return (
    <DetailsContainer>
      <DetailsContent>
        <h1>{pokemonDetails.name}</h1>
        <p>{pokemonDescription}</p>
      </DetailsContent>
      <DetailsContent>
        <img
          src={pokemonDetails.sprites.front_default}
          alt={pokemonDetails.name}
        />
        <p>Peso: {pokemonDetails.weight}</p>
        <p>Altura: {pokemonDetails.height}</p>
        <div>
          <p>Habilidades:</p>
          <ul>
            {pokemonDetails.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </DetailsContent>
      <DetailsContent>
        <p>
          HP:{" "}
          {
            pokemonDetails.stats.find((stat) => stat.stat.name === "hp")
              ?.base_stat
          }
        </p>
        <p>
          Ataque:{" "}
          {
            pokemonDetails.stats.find((stat) => stat.stat.name === "attack")
              ?.base_stat
          }
        </p>
        <p>
          Defesa:{" "}
          {
            pokemonDetails.stats.find((stat) => stat.stat.name === "defense")
              ?.base_stat
          }
        </p>
        <p>
          Ataque Especial:{" "}
          {
            pokemonDetails.stats.find(
              (stat) => stat.stat.name === "special-attack"
            )?.base_stat
          }
        </p>
        <p>
          Defesa Especial:{" "}
          {
            pokemonDetails.stats.find(
              (stat) => stat.stat.name === "special-defense"
            )?.base_stat
          }
        </p>
        <p>
          Velocidade:{" "}
          {
            pokemonDetails.stats.find((stat) => stat.stat.name === "speed")
              ?.base_stat
          }
        </p>
      </DetailsContent>
    </DetailsContainer>
  );
};

export default PokemonDetails;
