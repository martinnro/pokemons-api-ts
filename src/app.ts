import express from 'express'
import pokemonData from './data/pokemon.json'
import { router as pokemonsRouter } from './routes/pokemons.router'
import { router as digimonsRouter } from './routes/digimons.router'

const app = express()
const PORT = 3000

app.use(express.json()) //Middleware que me permite trabajar con JSON el body

app.use('/pokemons', pokemonsRouter) //Montar Router. El basepath /pokemon se va a encargar el router pokemonsRouter
app.use('/digimons', digimonsRouter) //Montar otro Router

app.listen(PORT, () => {
    console.log('Servidor express iniciado en', PORT)
})