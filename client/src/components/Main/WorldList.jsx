import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function World () {
    const [worlds, setWorlds] = useState([])

    useEffect(() => {
        const getWorlds = async() => {
            const response = await axios.get('http://localhost:3001/worlds')
            setWorlds(response.data)
        }
        getWorlds()
    }, [])

    const navigate = useNavigate()

    const showType = (world) => {
        navigate(`${world._id}`)
    }
    
    if (!worlds) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className='world-list-page'>
                <div className='search-list-title'>Worlds</div>
                <div className="search-list-grid">
                    {worlds.map((world) => (
                        <div className="search-list-card" onClick={() => showType(world)} key={world._id}>
                            <div className="list-card-image-container">
                                <img src={world.banner} alt={world.name} className="list-card-image"/>
                            </div>
                            <div className="list-card-info">
                                <div className="text-title-20">{world.name}</div>
                                <div className="world-tag-bubble-container">
                                    {world.tags.map((tag) => (
                                        <div className="world-tag-bubble">{world.tag}</div>
                                    ))}
                                </div>
                                <div className="list-card-primary-info">
                                    <div className="world-list-primary-set">
                                        <div className="world-list-primary-set-icon">#</div>
                                        <div className="text-body-14">Works</div>
                                    </div>
                                    <div className="world-list-primary-set">
                                        <div className="world-list-primary-set-icon">#</div>
                                        <div className="text-body-14">Characters</div>
                                    </div>
                                </div>
                                <div className="list-card-secondary-info">
                                    <div className="world-list-secondary-set">
                                        <div className="world-list-secondary-set-icon">#</div>
                                        <div className="text-body-10">Owners</div>
                                    </div>
                                    <div className="world-list-secondary-set">
                                        <div className="world-list-secondary-set-icon">#</div>
                                        <div className="text-body-10">Editors</div>
                                    </div>
                                    <div className="world-list-secondary-set">
                                        <div className="world-list-secondary-set-icon">#</div>
                                        <div className="text-body-10">Private</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) 
    }
}