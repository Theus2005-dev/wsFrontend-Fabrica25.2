import useGetPokemons from "@/app/hooks/useGetPokemon";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { usePokemonType } from "@/app/types/pokemonType";
import { ChildrenType } from "@/app/types/childrenContextProvider";
import { DataContextType }  from "@/app/types/contextType"

const DataContext = createContext<DataContextType | undefined>(undefined);

export default function DataProvider({ children }: ChildrenType) {
  const { data, loading } = useGetPokemons();
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<usePokemonType[]>([]);
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    if (!loading) {
      const filterResults = data.filter((item) => {
        item.name.toLowerCase().includes(search.toLowerCase());
      });
      setFiltered(filterResults);
    }
  }, [data, search, loading]);

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        filtered,
        setFiltered,
        viewMode,
        setViewMode,
        search,
        setSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData(){
    return useContext(DataContext);
}
