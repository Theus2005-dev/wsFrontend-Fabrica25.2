"use client";
import GetPokById from "@/app/hooks/useGetPokById";
import { useData } from "@/context/dataContext";
import Listicon from "@/icons/listIcon";
import GridIcon from "@/icons/gridIcon";
import React from "react";
export default function PokemonPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = React.use(params);
  const { data, loading } = GetPokById(id);
  const { viewMode } = useData();
  console.log(data);
  console.log(viewMode);
  
    return (
      <main className=" relative flex  bg-whiteitems-center justify-center">
        <div className="absolute top-4 flex right-4 gap-3">
          <GridIcon />
          <Listicon />
        </div>
        {loading && <p>Carregando...</p>}
        <div className="bg-blue-400 rounded-sm mt-2 text-center" key={data?.id}>
          <img
            src={data?.image}
            alt="imagem pokemon"
            className="w-30 h-50 rounded-sm ml-5 sm:ml-30"
          />

          <strong>Nome: {data?.name}</strong>
          <p>Id: {data?.id}</p>
          <p>Peso: {data?.weight}</p>
          <p>Tipos: {data?.types}</p>
          <p>Experiência Base: {data?.baseExperience}</p>
        </div>
      </main>
    );
}
