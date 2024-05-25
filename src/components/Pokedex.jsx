import { useState, useEffect } from "react"
import logo from '../../public/image.png'

export default function Pokedex() {
    const [id, setID] = useState(1)
    const [pokemon, setPokemon] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemon(data);
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [id])

    const nextPokemon = () => {
        setID(id + 1)
    }

    const beforePokemon = () => {
        setID(id - 1)
    }

    return (
        <div>
            <h1 style={{ 
                backgroundColor: '#ef5350', 
                width: '100%', 
                margin: 0, 
                padding: 0, 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center' 
            }}>
                <img 
                    src={logo} 
                    alt="Logo" 
                    style={{
                        height: '40px',
                        margin: '0',
                        padding: '.25em .5em',
                        zIndex: 2,
                        display: 'flex',
                        alignItems: 'center'
                    }} 
                />
            </h1>
            {pokemon && (
                <div className="pokemon">
                    <p>{pokemon.name}</p>
                    <p>Peso: {pokemon.weight}g</p>
                    <img src={pokemon.sprites.front_default} alt="Pokemon" />
                    <button onClick={beforePokemon}>Anterior</button>
                    <button onClick={nextPokemon}>Próximo</button>
                </div>
            )}
        </div>
    )
}
