import userContext from '../../userContext'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function UserAccount ({toggleAccount}) {
    const {user} = useContext(userContext)
    
    const ownedWorlds = user[0].worlds_owned.length
    // const ownedWorks = user[0].worlds_owned.works[0].length
    const ownedCharacters = user[0].characters_owned.length

    return (
        <div className="sidebar-account-view">
            <div className="sidebar-account-primary-info">
                <div className="sidebar-account-user-img-container">
                    {/* <FontAwesomeIcon className="sidebar-account-user-img-placeholder"/> */}
                    <img src={user[0].banner} className="sidebar-account-user-img"/>
                    {/* Ideally add in an alt image as a basic user icon (not sure if FontAwesome will work as a backup image, so import svg) */}
                </div>
                <div className="sidebar-account-username">{user[0].username}</div>
            </div>
            <div className="sidebar-account-stats">
                <div className="sidebar-owned-stat-set">
                    <div className="sidebar-owned-stat-number">{ownedWorlds}</div>
                    <div className="sidebar-owned-stat-subtitle">Worlds</div>
                </div>
                <div className="sidebar-owned-stat-set">
                    <div className="sidebar-owned-stat-number">{ownedCharacters}</div>
                    <div className="sidebar-owned-stat-subtitle">Characters</div>
                </div>
            </div>
        </div>
    )
}