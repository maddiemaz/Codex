import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Works () {
    const [works, setWorks] = useState([])

    useEffect(() => {
        const getWorks = async() => {
            const response = await axios.get('http://localhost:3001/works')
            setWorks(response.data)
        }
        getWorks()
    }, [])

    const navigate = useNavigate()

    const showType = (work) => {
        navigate(`${character._id}`)
    }
    
    if (!characters) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className='character-list-page'>
                <div className='search-list-title'>Characters</div>
                <div className="search-list-grid">
                    {characters.map((character) => (
                        <div className="search-list-card" onClick={() => showType(character)} key={character._id}>
                            <div className="list-card-image-container">
                                <img src={character.banner} alt={character.name} className="list-card-image"/>
                            </div>
                            <div className="list-card-info">
                                <div className="text-title-20">{character.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) 
    }
}