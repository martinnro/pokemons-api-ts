import pokemonData from '../../data/pokemon.json'
import { Request, Response, Router } from "express";


export async function getPokemonsByNameController (req: Request, res: Response) {
    const name = req.params.name
    const pokemon = pokemonData.find((pokemon) => pokemon.name === name)
    if(!pokemon) {
        res.status(404).json({
            error: 'POKEMON_NOT_FOUND',
            message: `Pokemon ${name} not found in the database`
        })
    }
    res.status(200).json(pokemon)
}