import {Link, useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CharacterPage () {
    let {id} = useParams()
    const [character, setCharacter] = useState([])

    useEffect(() => {
        const getCharacters = async() => {
            const response = await axios.get(`http://localhost:3001/characters/${id}`)
            setCharacter(response.data)
        }
        getCharacters()
    }, [character])

    const navigate = useNavigate()
    
    if (!character) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className='character-detail-page'>
                <div className="detail-list-grid">
                    <div className="search-list-card">
                        <div className="list-card-image-container">
                            <img src={character.banner} alt={character.name} className="list-card-image"/>
                        </div>
                        <div className="list-card-info">
                            <div className="text-title-20">{character.name}</div>
                            {/* <div className="text-body-14">{character.world[0].name}</div>
                            <div className="text-body-12">{character.owner[0].username}</div> */}
                            <div className="char-des-bubble-container">
                                {/* {character.designations.map((designation, index) => {
                                    return <div className="char-des-bubble" key={index}>{designation}</div>
                                })} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}