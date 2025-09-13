import { useEffect, useState } from "react";
import { EspecificPokemon } from "../types/useEspcificPokemon";
export default function GetPokById(id: number) {
  const [data, setData] = useState<EspecificPokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPokById() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        const pokemonInfos: EspecificPokemon = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          types: data.types.map((t: any) => t.type.name),
          weight: data.weight,
          baseExperience: data.base_experience,
        };
       setData(pokemonInfos)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getPokById();
  }, [id]);
  return { data, loading };
}
