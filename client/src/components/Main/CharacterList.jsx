import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AddCharacter from './subcomponents/AddCharacter'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlus, faCircleXmark, faFilter, faSort} from '@fortawesome/free-solid-svg-icons'

export default function Characters () {
    const [addNew, showAddNew] = useState(false)
    const toggleAddNew = () => showAddNew(!addNew)

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const getCharacters = async() => {
            const response = await axios.get('http://localhost:3001/characters')
            setCharacters(response.data)
        }
        getCharacters()
    }, [])
    console.log(characters)

    const navigate = useNavigate()

    const showCharacter = (character) => {
        navigate(`${character._id}`)
    }
    
    if (!characters) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className='character-list-page'>
                <div className="search-list-grid">
                    <div className="search-list-header">
                        <div className="text-title-26 search-list-title">Characters</div>
                        <div className="search-list-header-icon-set">
                            <FontAwesomeIcon icon={faSort} className="search-list-header-icon"/>
                            <FontAwesomeIcon icon={faFilter} className="search-list-header-icon"/>
                        </div>
                    </div>
                    {characters.map((character) => (
                        <div className="search-list-card" onClick={() => showCharacter(character)} key={character._id}>
                            <div className="list-card-image-container">
                                <img src={character.banner} alt={character.name} className="list-card-image"/>
                            </div>
                            <div className="list-card-info">
                                <div className="text-title-20">{character.name}</div>
                                {/* <div className="text-body-14">{character.world[0].name}</div> */}
                                {/* <div className="text-body-12">{character.owner[0].username}</div> */}
                                <div className="char-des-bubble-container">
                                    {character.designations.map((designation, index) => (
                                        <div className="char-des-bubble text-title-10" key={index}>{designation}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="list-card-add">
                        <div className="card-add-header">
                            <div className="text-title-20">Add Character</div>
                            <FontAwesomeIcon icon={faCirclePlus} className="card-add-icon" onClick={toggleAddNew}/>
                        </div>
                        {addNew ? <AddCharacter toggleAddNew={toggleAddNew}/> : null}
                    </div>
                </div>
            </div>
        ) 
    }
}