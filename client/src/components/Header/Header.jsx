import {useState} from 'react'
import NavSidebar from './NavSidebar'
import UserSidebar from './UserSidebar'
// import userContext from '../../userContext'
import SearchBar from './SearchBar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faUser} from '@fortawesome/free-solid-svg-icons'


export default function Header() {
    // const {loggedIn} = useContext(userContext)

    const [navBar, openNavBar] = useState(false)
    const [userBar, openUserBar] = useState(false)

    const toggleNavBar = () => openNavBar(!navBar)
    const toggleUserBar = () => openUserBar(!userBar)

    return (
        <div className="header">
            <div className="header-primary">
                <FontAwesomeIcon icon={faBars} className="navbar-button" onClick={toggleNavBar}/>
                    {navBar ? <NavSidebar toggleNavBar={toggleNavBar}/> : null}
                <div className="header-app-logo">codex</div>
                <div className="userbar-button" onClick={toggleUserBar}>
                    <FontAwesomeIcon icon={faUser} className="userbar-icon-placeholder"/>
                </div>
                    {userBar ? <UserSidebar toggleUserBar={toggleUserBar}/> : null}
            </div>

            <div className="header-search">
                <SearchBar/>
            </div>
        </div>
    )
}