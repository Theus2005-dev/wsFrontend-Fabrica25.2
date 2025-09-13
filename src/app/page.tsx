'use client';
import Image from "next/image";
import GetPokemons from "./hooks/useGetPokemon";
import useGetPokemons from "./hooks/useGetPokemon";
import { useEffect } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import DataProvider, { useData } from "@/context/dataContext";
import DataView from "@/components/DataView";
export default function Home() {
  const {filtered} = useData();
  useEffect(()=>{
    console.log(filtered)
  },[filtered])
  return (
   <>
      <header className="flex bg-blue-200 justify-between">
         <Header/>
         <SearchBar/>
      </header>
      <main>
        <DataView />
      </main>
   </>
  );
}
