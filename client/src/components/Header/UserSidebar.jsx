import {Link} from 'react-router-dom'
import {useContext, useState} from 'react'
import UserAccount from './UserAccount'
import LogIn from './LogIn'
import userContext from '../../userContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faGear} from '@fortawesome/free-solid-svg-icons'

export default function UserSidebar ({toggleUserBar}) {
    const {user} = useContext(userContext)
    const {loggedIn} = useContext(userContext)

    const [userAccount, showAccount] = useState(false)
    const [userLogin, showLogin] = useState(true)

    const toggleAccount = () => showAccount(!userAccount)
    const toggleLogin = () => showLogin(!userLogin)
    
    return (
        <div className="userbar">
            <div className="userbar-header">
                <div className="navbar-button-close" onClick={toggleUserBar}>&times;</div>
                <FontAwesomeIcon icon={faGear} className="navbar-header-placeholder">
                    {loggedIn ? <Link to={`/account/${user[0]._id}`} onClick={toggleUserBar}/> : null}
                </FontAwesomeIcon>
            </div>

            <div className="userbar-account-container">
                {loggedIn ? <UserAccount toggleAccount={toggleAccount}/> : null}
                {!loggedIn ? <LogIn/> : null}
            </div>

        </div>
    )
}

