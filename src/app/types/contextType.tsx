import { usePokemonType } from "./pokemonType";

export type DataContextType ={
    data: usePokemonType[];
  loading: boolean;
  filtered: usePokemonType[];
  setFiltered: React.Dispatch<React.SetStateAction<usePokemonType[]>>;
  viewMode: string;
  setViewMode: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

}