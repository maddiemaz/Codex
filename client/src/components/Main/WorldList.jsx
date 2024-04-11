import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AddWorld from './subcomponents/AddWorld'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp, faCaretDown, faCaretUp, faCirclePlus, faPenToSquare} from '@fortawesome/free-solid-svg-icons'

export default function World () {
    const [addNew, showAddNew] = useState(false)
    const toggleAddNew = () => showAddNew(!addNew)

    const [worlds, setWorlds] = useState([])

    useEffect(() => {
        const getWorlds = async() => {
            const response = await axios.get('http://localhost:3001/worlds')
            setWorlds(response.data)
        }
        getWorlds()
    }, [])
    console.log(worlds)

    const navigate = useNavigate()
    const showType = (world) => {
        navigate(`${world._id}`)
    }
    
    if (!worlds) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className='world-list-page'>
                <div className="search-list-grid">
                    <div className='text-title-26 search-list-title'>Worlds</div>
                    {worlds.map((world) => (
                        <div className="search-list-card" onClick={() => showType(world)} key={world._id}>
                            <div className="list-card-image-container">
                                <img src={world.banner} alt={world.name} className="list-card-image"/>
                            </div>
                            <div className="list-card-info">
                                <div className="text-title-20">{world.name}</div>
                                <div className="world-tag-bubble-container">
                                    {world.tags.map((tag, index) => (
                                        <div className="world-tag-bubble" key={index}>{tag}</div>
                                    ))}
                                </div>
                                <div className="list-card-primary-info">
                                    <div className="world-list-primary-set">
                                        <div className="list-primary-set-icon">{world.works.length}</div>
                                        <div className="text-body-14">Works</div>
                                    </div>
                                    <div className="world-list-primary-set">
                                        <div className="list-primary-set-icon">#</div>
                                        <div className="text-body-14">Characters</div>
                                    </div>
                                </div>
                                <div className="list-card-secondary-info">
                                    <div className="world-list-secondary-set">
                                        <div className="list-secondary-set-icon">{world.owner.length}</div>
                                        <div className="text-body-10">Owners</div>
                                    </div>
                                    <div className="world-list-secondary-set">
                                        <div className="list-secondary-set-icon">{world.editor.length}</div>
                                        <div className="text-body-10">Editors</div>
                                    </div>
                                    <div className="world-list-secondary-set">
                                        <div className="list-secondary-set-icon">#</div>
                                        <div className="text-body-10">Private</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="list-card-add">
                        <div className="card-add-header">
                            <div className="text-title-20">Add World</div>
                            <FontAwesomeIcon icon={faCirclePlus} className="card-add-icon" onClick={toggleAddNew}/>
                        </div>
                        {addNew ? <AddWorld toggleAddNew={toggleAddNew}/> : null}
                    </div>
                </div>
            </div>
        ) 
    }
}