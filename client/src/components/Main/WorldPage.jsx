import {Link, useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function WorldPage () {
    let {id} = useParams()
    const [world, setWorld] = useState([])

    useEffect(() => {
        const getWorlds = async() => {
            const response = await axios.get(`http://localhost:3001/worlds/${id}`)
            setWorld(response.data)
        }
        getWorlds()
    }, [world])

    const navigate = useNavigate()
    
    if (!world) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className='world-detail-page'>
                <div className="detail-list-grid">
                    <div className="search-list-card">
                        <div className="list-card-image-container">
                            <img src={world.banner} alt={world.name} className="list-card-image"/>
                        </div>
                        <div className="list-card-info">
                            <div className="text-title-20">{world.name}</div>
                            {/* <div className="text-body-14">{character.world[0].name}</div>
                            <div className="text-body-12">{character.owner[0].username}</div> */}
                            <div className="world-tag-bubble-container">
                                {world.tags.map((tag, index) => {
                                    return <div className="world-tag-bubble" key={index}>{tag}</div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}