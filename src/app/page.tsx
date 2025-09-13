"use client";
import Image from "next/image";
import GetPokemons from "./hooks/useGetPokemon";
import useGetPokemons from "./hooks/useGetPokemon";
import { useEffect } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import DataProvider, { useData } from "@/context/dataContext";
import DataView from "@/components/DataView";
import GridIcon from "@/icons/gridIcon";
import Listicon from "@/icons/listIcon";
export default function Home() {
  const { filtered } = useData();
  useEffect(() => {
    console.log(filtered);
  }, [filtered]);
  return (
    <>
       <SearchBar></SearchBar>
      <main className=" relative flex items-center justify-center">
       
        <div className="absolute top-4 flex right-4 gap-3">
          <GridIcon />
          <Listicon />
        </div>

        <DataView />
      </main>
    </>
  );
}
