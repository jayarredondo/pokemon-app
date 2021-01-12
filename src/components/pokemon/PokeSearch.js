import React, {useState, useContext} from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import pokemonContext from '../context/pokedex/pokemonContext'

const PokeSearch = () => {
    const PokemonContext = useContext(pokemonContext)
    const [text, setText] = useState('');
    
    const {searchPokemon} = PokemonContext;

    const onSubmit = e => {
        e.preventDefault();
        searchPokemon(text);
        setText(''); 
        
    }
    const onChange = e => setText(e.target.value)  

    return (
        <div>
            <Form inline onSubmit={onSubmit}>
                <FormControl 
                    type="text" 
                    placeholder="Search Pokedex" 
                    className=" mr-sm-2" 
                    name='text'
                    value={text} 
                    onChange={onChange}/>
                <Button type="submit" variant="outline-light">Search</Button>
            </Form>
        </div>
    )
}

export default PokeSearch
