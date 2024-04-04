import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  AbilitiesContainer,
  ButtonContainer,
  DetailsContainer,
  DetailsContent,
  PokemonDescription,
  PokemonPhoto,
  PowerBar,
  PowerBarContainer,
  StatusList,
  Title,
} from "./styles";
import Loading from "@/components/Loading";

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
    return <Loading />;
  }

  const findStatByName = (name: string): Stat | undefined =>
    pokemonDetails.stats.find((stat: Stat) => stat.stat.name === name);

  const hpStat = findStatByName("hp");
  const attackStat = findStatByName("attack");
  const defenseStat = findStatByName("defense");
  const specialAttackStat = findStatByName("special-attack");
  const specialDefenseStat = findStatByName("special-defense");
  const speedStat = findStatByName("speed");

  return (
    <DetailsContainer>
      <ButtonContainer>
        <a href={"/"}>Voltar</a>
        <a href={"/contato"}>Contato</a>
      </ButtonContainer>
      <DetailsContent>
        <Title>{pokemonDetails.name}</Title>
        <PokemonDescription>{pokemonDescription}</PokemonDescription>
      </DetailsContent>
      <DetailsContent>
        <PokemonPhoto
          src={pokemonDetails.sprites.front_default}
          alt={pokemonDetails.name}
        />
        <AbilitiesContainer>
          <div>
            <p>
              <strong>Weight:</strong> {pokemonDetails.weight}
            </p>
            <p>
              <strong>Height:</strong> {pokemonDetails.height}
            </p>
          </div>
          <div>
            <p>
              <strong>Abilities:</strong>
            </p>
            <ul>
              {pokemonDetails.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        </AbilitiesContainer>
      </DetailsContent>
      <DetailsContent>
        <StatusList>
          <li>
            <p>HP: </p>
            <PowerBarContainer>
              <PowerBar
                style={{ width: `${hpStat?.base_stat || 0}%` }}
              ></PowerBar>
            </PowerBarContainer>
          </li>

          <li>
            <p>Attack: </p>
            <PowerBarContainer>
              <PowerBar
                style={{ width: `${attackStat?.base_stat || 0}%` }}
              ></PowerBar>
            </PowerBarContainer>
          </li>

          <li>
            <p>Defence: </p>
            <PowerBarContainer>
              <PowerBar
                style={{ width: `${defenseStat?.base_stat || 0}%` }}
              ></PowerBar>
            </PowerBarContainer>
          </li>

          <li>
            <p>Special Attack: </p>
            <PowerBarContainer>
              <PowerBar
                style={{ width: `${specialAttackStat?.base_stat || 0}%` }}
              ></PowerBar>
            </PowerBarContainer>
          </li>

          <li>
            <p>Special Defense: </p>
            <PowerBarContainer>
              <PowerBar
                style={{ width: `${specialDefenseStat?.base_stat || 0}%` }}
              ></PowerBar>
            </PowerBarContainer>
          </li>

          <li>
            <p>Speed: </p>
            <PowerBarContainer>
              <PowerBar
                style={{ width: `${speedStat?.base_stat || 0}%` }}
              ></PowerBar>
            </PowerBarContainer>
          </li>
        </StatusList>
      </DetailsContent>
    </DetailsContainer>
  );
};

export default PokemonDetails;
