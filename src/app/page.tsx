'use client';
import Image from "next/image";
import GetPokemons from "./hooks/useGetPokemon";
import useGetPokemons from "./hooks/useGetPokemon";
import { useEffect } from "react";
import Header from "@/components/Header";


export default function Home() {
  const {data, loading} = useGetPokemons();
  useEffect(()=>{
    console.log(data)
  })
  return (
   <>
      <header>
         <Header/>
      </header>
   </>
  );
}
