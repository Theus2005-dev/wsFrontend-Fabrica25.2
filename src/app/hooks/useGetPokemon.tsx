"use client";
import { useState, useEffect } from "react";
import { usePokemonType } from "../types/pokemonType";

export default function useGetPokemons() {
  const [data, setData] = useState<usePokemonType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        const pokemonInfo = data.results.map((pokemon: any, index: number) => {
          const PokemonId = pokemon.url.split("/").filter(Boolean).pop();
          return {
            id: Number(PokemonId),
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokemonId}.png`,
          };
        });
        setData(pokemonInfo);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);
  return { data, loading };
}
