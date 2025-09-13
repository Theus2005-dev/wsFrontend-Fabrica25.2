export type EspecificPokemon ={
    name: string,
    id:number,
    image: string,
    types: string[],
    weight: number,
    baseExperience: number

}
export interface PokemonType {
  type: {
    name: string;
  };
}