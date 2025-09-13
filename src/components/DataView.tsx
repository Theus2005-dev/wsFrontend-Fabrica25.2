'use client';
import { useData } from "@/context/dataContext";
export default function DataView(){
    const {viewMode, setViewMode, filtered, loading} = useData();
    

    if(viewMode === 'grid'){
        return (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {loading && <p>Carregando...</p>}
                {filtered.length > 0 &&(
                    filtered.map((e)=>(
                        <div className="bg-blue-100 rounded-sm mt-2 text-center" key={e.id}>
                            <img src={e.image} alt="imagem pokemon" className="w-30 h-50 rounded-sm ml-5 sm:ml-30" />
                            <strong>Nome: {e.name}</strong>
                            <p>Id: {e.id}</p>
                        </div>
                    ))
                )}
            </div>
        )
    }
    return(
        <div className="flex flex-col">
            {loading && <p>Carregando...</p>}
                {filtered.length > 0 &&(
                    filtered.map((e)=>(
                        <div className="bg-blue-100 rounded-sm mt-2 text-center" key={e.id}>
                            <img src={e.image} alt="imagem pokemon" className="w-30 h-50 rounded-sm ml-5 sm:ml-30" />
                            <strong>Nome: {e.name}</strong>
                            <p>Id: {e.id}</p>
                        </div>
                    ))
                )}
        </div>
    )
}