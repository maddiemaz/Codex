import {Link} from 'react-router-dom'
import {useContext, useState} from 'react'
import userContext from '../../userContext'
import UserAccount from './UserAccount'
import LogIn from './LogIn'
import AddUser from './AddUser'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faGear} from '@fortawesome/free-solid-svg-icons'

export default function UserSidebar ({toggleUserBar}) {
    const {user} = useContext(userContext)
    const {loggedIn} = useContext(userContext)

    const [userAccount, showAccount] = useState(false)
    const [userLogin, showLogin] = useState(true)
    const [addUser, showAddUser] = useState(false)

    const toggleAccount = () => showAccount(!userAccount)
    const toggleLogin = () => showLogin(!userLogin)
    const toggleAddUser = () => showAddUser(!addUser)
    
    return (
        <div className="userbar">
            <div className="userbar-header">
                <div className="userbar-button-close" onClick={toggleUserBar}>&times;</div>
                <div className="userbar-button-settings-container">
                    {loggedIn ? <Link to={`/account/${user[0]._id}`} icon={faGear} className="userbar-button-settings-link" onClick={toggleUserBar}>
                        <FontAwesomeIcon icon={faGear} className="userbar-button-settings"/>
                    </Link> : null}
                </div>
            </div>

            <div className="userbar-account-container">
                {loggedIn ? <UserAccount toggleAccount={toggleAccount}/> : null}
                {!loggedIn ? <div className="login-container">
                    <LogIn/>
                    <div className="login-signup-link text-body-16" onClick={toggleAddUser}>New to Codex? Sign up!</div>
                        {addUser ? <AddUser toggleAddUser={toggleAddUser}/> : null}
                    </div>
                    : null}
            </div>

        </div>
    )
}

