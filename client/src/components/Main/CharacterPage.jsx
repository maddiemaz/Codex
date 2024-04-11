import {Link, useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import GalleryCharacter from './subcomponents/GalleryCharacter'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp, faCaretDown, faCaretUp, faCirclePlus, faPenToSquare} from '@fortawesome/free-solid-svg-icons'

export default function CharacterPage () {
    let {id} = useParams()
    const [character, setCharacter] = useState([])

    const [roleInfo, hideRoleInfo] = useState(true)
    const toggleRoleInfo = () => hideRoleInfo(!roleInfo)

    const [affiliationsInfo, showAffiliationsInfo] = useState(false)
    const toggleAffiliationsInfo = () => showAffiliationsInfo(!affiliationsInfo)

    const [galleryInfo, hideGalleryInfo] = useState(true)
    const toggleGalleryInfo = () => hideGalleryInfo(!galleryInfo)

    const [worksInfo, showWorksInfo] = useState(false)
    const toggleWorksInfo = () => showWorksInfo(!worksInfo)


    useEffect(() => {
        const getCharacters = async() => {
            const response = await axios.get(`http://localhost:3001/characters/${id}`)
            setCharacter(response.data)
            // console.log(response.data)
        }
        getCharacters()
    }, [character])

    
    if (!character) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className='character-detail-page'>
                <div className="detail-list-grid">
                    <div className="detail-card-primary">
                        <div className="detail-card-image-container">
                            <img src={character.banner} alt={character.name} className="detail-card-image"/>
                        </div>
                        <div className="detail-card-info-header">
                            <div className="text-title-26">{character.name}</div>
                            {/* <div className="text-body-14">{character.world[0].name}</div>
                            <div className="text-body-12">{character.owner[0].username}</div> */}
                            <div className="char-des-bubble-container">
                                {/* {character.designations.map((designation, index) => {
                                    <div className="char-des-bubble" key={index}>{designation}</div>
                                })} */}
                            </div>
                        </div>
                    </div>
                    <div className="detail-card-secondary">
                        <div className="detail-card-secondary-info-container">
                            <div className="detail-card-toggle-header">
                                <div className="text-title-22">Role</div>
                                <div className="detail-card-toggle-icon-set">
                                    <FontAwesomeIcon icon={faPenToSquare} className="toggle-set-icon offset-left-20"/>
                                    <FontAwesomeIcon icon={faChevronDown} onClick={toggleRoleInfo} className="toggle-set-icon offset-left-20"/>
                                </div>
                            </div>
                            {roleInfo ?
                            <div className="detail-card-secondary-info text-body-16">
                                <div className="detail-card-secondary-info-set-row">
                                    <div className="text-underline">Priority:</div>
                                    <div className="text-following-10">{character.priority}</div>
                                </div>
                                <div className="detail-card-secondary-info-set-row">
                                    <div className="text-underline">Role:</div>
                                    <div className="text-following-10">{character.priority_role}</div>
                                </div>
                                <div className="detail-card-secondary-info-set-column">
                                    <div className="text-underline">Featured:</div>
                                    <div className="offset-left-20 offset-top-5">{character.works_featured}</div>
                                    {/* {character.works_featured.map((work_featured, index) => {
                                    <div className="text-body-14 array-list" key={index}>{work_featured}</div>
                                })} */}
                                </div>                                
                            </div>
                            : null}
                        </div>
                    </div>
                    <div className="detail-card-secondary">
                        <div className="detail-card-secondary-info-container">
                            <div className="detail-card-toggle-header">
                                <div className="text-title-22">Affiliations</div>
                                <div className="detail-card-toggle-icon-set">
                                    <FontAwesomeIcon icon={faPenToSquare} className="toggle-set-icon offset-left-20"/>
                                    <FontAwesomeIcon icon={faChevronDown} onClick={toggleAffiliationsInfo} className="toggle-set-icon offset-left-20"/>
                                </div>
                            </div>
                            {affiliationsInfo ?
                            <div className="detail-card-secondary-info text-body-16">
                                <div className="detail-card-secondary-info-set-row">
                                    <div className="text-underline">Priority:</div>
                                    <div className="text-following-10">{character.works[0].abilities}</div>
                                </div>
                                <div className="detail-card-secondary-info-set-row">
                                    <div className="text-underline">Role:</div>
                                    <div className="text-following-10">{character.priority_role}</div>
                                </div>
                                <div className="detail-card-secondary-info-set-column">
                                    <div className="text-underline">Featured:</div>
                                    {/* <div className="offset-left-20 offset-top-5">{character.works_featured}</div> */}
                                    {character.works[0].abilities.map((ability, index) => {
                                        <div className="text-body-14 array-list" key={index}>{ability}</div>
                                    })}
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
                            <GalleryCharacter/>
                            : null}
                        </div>
                    </div>

                    
                </div>
            </div>
        ) 
    }
}