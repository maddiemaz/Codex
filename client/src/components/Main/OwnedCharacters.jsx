import {Link, useParams, useNavigate} from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import userContext from '../../userContext'
import axios from 'axios'
import AddCharacter from './subcomponents/AddCharacter'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlus, faCircleXmark} from '@fortawesome/free-solid-svg-icons'

export default function OwnedCharacters () {
    const {id} = useParams()
    const {user} = useContext(userContext)
    const characters = user[0].characters_owned

    const [addNew, showAddNew] = useState(false)
    const toggleAddNew = () => showAddNew(!addNew)

    const navigate = useNavigate()

    const showCharacter = (character) => {
        navigate(`/characters/${character._id}`)
    }
    
    
        return (
            <div className='owned-character-list-page'>
                <div className="search-list-grid">
                    <div className='text-title-26 search-list-title'>My Characters</div>
                    <div className="list-card-add">
                        <div className="card-add-header">
                            <div className="text-title-20">Add Character</div>
                            <FontAwesomeIcon icon={faCirclePlus} className="card-add-icon" onClick={toggleAddNew}/>
                        </div>
                        {addNew ? <AddCharacter toggleAddNew={toggleAddNew}/> : null}
                    </div>
                    {characters.length === 0 ?
                        <div className="text-body-16">Add a character to your codex!</div> :
                        characters.map(character => (
                            <div className="search-list-card" onClick={() => showCharacter(character)} key={character._id}>
                                <div className="list-card-image-container">
                                    <img src={character.banner} alt={character.name} className="list-card-image"/>
                                </div>
                                <div className="list-card-info">
                                    <div className="text-title-20">{character.name}</div>
                                    {/* <div className="text-body-14">{character.world[0].name}</div> */}
                                    <div className="char-des-bubble-container">
                                        {character.designations.map((designation, index) => (
                                            <div className="char-des-bubble text-title-10" key={index}>{designation}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                    ))}

                    
                </div>
            </div>
        )
}