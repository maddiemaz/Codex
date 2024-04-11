import {Link, useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import GalleryWorld from './subcomponents/GalleryWorld'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp, faCaretDown, faCaretUp, faCirclePlus, faPenToSquare} from '@fortawesome/free-solid-svg-icons'

export default function WorldPage () {
    let {id} = useParams()
    const [world, setWorld] = useState([])

    const [aboutInfo, hideAboutInfo] = useState(true)
    const toggleAboutInfo = () => hideAboutInfo(!aboutInfo)

    const [galleryInfo, hideGalleryInfo] = useState(true)
    const toggleGalleryInfo = () => hideGalleryInfo(!galleryInfo)

    const [worksInfo, showWorksInfo] = useState(false)
    const toggleWorksInfo = () => showWorksInfo(!worksInfo)

    
    useEffect(() => {
        const getWorlds = async() => {
            const response = await axios.get(`http://localhost:3001/worlds/${id}`)
            setWorld(response.data)
        }
        getWorlds()
    }, [world])

    
    if (!world) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className='world-detail-page'>
                <div className="detail-list-grid">
                    <div className="detail-card-primary">
                        <div className="detail-card-image-container">
                            <img src={world.banner} alt={world.name} className="detail-card-image"/>
                        </div>
                        <div className="detail-card-info-header">
                            <div className="text-title-26">{world.name}</div>
                            {/* <div className="text-body-14">{character.world[0].name}</div>
                            <div className="text-body-12">{character.owner[0].username}</div> */}
                            <div className="world-tag-bubble-container">
                                {/* {world.tags.map((tag, index) => {
                                    return <div className="world-tag-bubble" key={index}>{tag}</div>
                                })} */}
                            </div>
                        </div>
                    </div>

                        <div className="detail-card-secondary">
                            <div className="detail-card-secondary-info-container">
                                <div className="detail-card-toggle-header">
                                    <div className="text-title-22">About</div>
                                    <div className="detail-card-toggle-icon-set">
                                        <FontAwesomeIcon icon={faPenToSquare} className="toggle-set-icon offset-left-20"/>
                                        <FontAwesomeIcon icon={faChevronDown} onClick={toggleAboutInfo} className="toggle-set-icon offset-left-20"/>
                                    </div>
                                </div>
                                {aboutInfo ?
                                <div className="detail-card-secondary-info text-body-16">
                                    <div className="detail-card-secondary-info-set-row">
                                        <div className="text-body-12">{world.about}</div>
                                    </div>
                                    <div className="detail-card-secondary-tags">
                                        <div className="world-tag-bubble">{world.tags}</div>
                                        {/* {world.tags.map((tag, index) => {
                                        <div className="world-tag-bubble" key={index}>{tag}</div>
                                    })} */}
                                    </div>                                
                                </div>
                                : null}
                            </div>
                        </div>

                        <div className="detail-card-secondary">
                            <div className="detail-card-secondary-info-container">
                                <div className="detail-card-toggle-header">
                                    <div className="text-title-22">Works</div>
                                    <div className="detail-card-toggle-icon-set">
                                        <FontAwesomeIcon icon={faPenToSquare} className="toggle-set-icon offset-left-20"/>
                                        <FontAwesomeIcon icon={faChevronDown} onClick={toggleWorksInfo} className="toggle-set-icon offset-left-20"/>
                                    </div>
                                </div>
                                {worksInfo ?
                                <div className="detail-card-secondary-info text-body-16">
                                    <div className="detail-card-secondary-info-set-row">
                                        <div className="text-body-12">{world.works[0].title}</div>
                                    </div>
                                    <div className="detail-card-secondary-tags">
                                        <div className="world-tag-bubble">{world.tags}</div>
                                        {/* {world.tags.map((tag, index) => {
                                        <div className="world-tag-bubble" key={index}>{tag}</div>
                                    })} */}
                                    </div>                                
                                </div>
                                : null}
                            </div>
                        </div>

                        <div className="detail-card-secondary">
                            <div className="detail-card-secondary-info-container">
                                <div className="detail-card-toggle-header">
                                    <div className="text-title-22">Gallery</div>
                                    <div className="detail-card-toggle-icon-set">
                                        <FontAwesomeIcon icon={faPenToSquare} className="toggle-set-icon offset-left-20"/>
                                        <FontAwesomeIcon icon={faChevronDown} onClick={toggleGalleryInfo} className="toggle-set-icon offset-left-20"/>
                                    </div>
                                </div>
                                {galleryInfo ?
                                <GalleryWorld/>
                                : null}
                            </div>
                        </div>
                        
                        

                </div>
            </div>
        ) 
    }
}