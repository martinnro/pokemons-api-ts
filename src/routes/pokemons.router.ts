import { Request, Response, Router } from "express";
import pokemonData from '../data/pokemon.json'
import { getPokemonsController } from "../controller/pokemons/getPokemons.controller";
import { getPokemonsByNameController } from "../controller/pokemons/getPokemonsByName.controller";
import { createPokemonController } from "../controller/pokemons/createPokemon.controller";

export const router = Router();

//basepath ---> /pokemons

router.get('/', getPokemonsController)

router.get('/:name', getPokemonsByNameController)

router.post('/', createPokemonController)