import {Link} from 'react-router-dom'
import {useContext, useState} from 'react'
import userContext from '../../userContext'

export default function NavSidebar({toggleNavBar}) {
    const {user} = useContext(userContext)
    const {loggedIn} = useContext(userContext)

    const [userCodex, showUserCodex] = useState(false)
    const toggleUserCodex = () => showUserCodex(!userCodex)

    return (
        <div className="navbar">
            <div className="navbar-header">
                <div className="navbar-header-placeholder">0</div>
                <div className="navbar-header-title">codex</div>
                <div className="navbar-button-close" onClick={toggleNavBar}>&times;</div>
            </div>
            <div className="navbar-links">
                {loggedIn ? 
                <div className="navbar-links-owned" toggleUserCodex={toggleUserCodex}>
                    <div className="text-title-22">Your Codex</div>
                    <div className="navbar-links-owned-links"> 
                    {/* Add Links */}
                        <div className="text-body-20 text-links-navbar-owned" onClick={toggleNavBar}>Worlds</div>
                        <div className="text-body-20 text-links-navbar-owned" onClick={toggleNavBar}>Works</div>
                        <div className="text-body-20 text-links-navbar-owned spacing-20" onClick={toggleNavBar}>Characters</div>
                        <div className="text-body-20 text-links-navbar-owned" onClick={toggleNavBar}>Favorites</div>
                        <div className="text-body-20 text-links-navbar-owned" onClick={toggleNavBar}>Following</div>
                        <div className="text-body-20 text-links-navbar-owned" onClick={toggleNavBar}>Works</div>
                        <div className="text-body-20 text-links-navbar-owned" onClick={toggleNavBar}>Collaborators</div>
                    </div>
                </div>
                : null}
                <div className="navbar-links-all">
                    <div className="text-title-22">All Codices</div>
                    <div className="navbar-links-all-links"> 
                        <Link to="/worlds" className="text-body-20 text-links-navbar-all" onClick={toggleNavBar}>Worlds</Link>
                        {/* <Link to="/works" className="text-body-20 text-links-navbar-all" onClick={toggleNavBar}>All Works</Link> */}
                        <Link className="text-body-20 text-links-navbar-all">Works</Link>
                        <Link to="/characters" className="text-body-20 text-links-navbar-all" onClick={toggleNavBar}>Characters</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}