'use client';
import Image from "next/image";
import GetPokemons from "./hooks/useGetPokemon";
import useGetPokemons from "./hooks/useGetPokemon";
import { useEffect } from "react";
export default function Home() {
  const {data, loading} = useGetPokemons();
  useEffect(()=>{
    console.log(data)
  })
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
      </main>
      
       
    </div>
  );
}
