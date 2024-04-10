import {useState} from 'react'
import {Link} from 'react-router-dom'
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
                <Link to="/" className="header-app-logo text-title-30">codex</Link>
                <div className="userbar-button" onClick={toggleUserBar}>
                    {/* Switch to user.banner if logged in */}
                    <img className="userbar-img-placeholder"/>
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