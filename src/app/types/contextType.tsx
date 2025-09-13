import { useGeralPokemonType } from "./pokemonType";

export type DataContextType ={
    data: useGeralPokemonType[];
  loading: boolean;
  filtered: useGeralPokemonType[];
  setFiltered: React.Dispatch<React.SetStateAction<useGeralPokemonType[]>>;
  viewMode: string;
  setViewMode: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

}