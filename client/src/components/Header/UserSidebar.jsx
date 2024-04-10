import {Link} from 'react-router-dom'
import {useContext} from 'react'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faUser} from '@fortawesome/free-solid-svg-icons'
import UserAccount from './UserAccount'
import LogIn from './LogIn'
import userContext from '../../userContext'

export default function UserSidebar ({toggleUserBar}) {
    const {user} = useContext(userContext)
    const {loggedIn} = useContext(userContext)

    const toggleAccount = () => showAccount(!userAccount)
    
    return (
        <div className="userbar">
            <div className="userbar-header">
                <div className="navbar-button-close" onClick={toggleUserBar}>&times;</div>
                <div className="navbar-header-placeholder">0</div>
            </div>

            <div className="userbar-login">
                {loggedIn ? <UserAccount toggleAccount={toggleAccount}/> : null}
                {!loggedIn ? <LogIn/> : null}
            </div>

        </div>
    )
}

