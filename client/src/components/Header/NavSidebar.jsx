import {Link} from 'react-router-dom'

export default function NavSidebar({toggleNavBar}) {
    return (
        <div className="navbar">
            <div className="navbar-header">
                <div className="navbar-header-placeholder">0</div>
                <div className="navbar-header-title">codex</div>
                <div className="navbar-button-close" onClick={toggleNavBar}>&times;</div>
            </div>
            <div className="navbar-links">
                <div className="navbar-links-owned">
                    <div className="text-title-22">Your Codex</div>
                    <div className="navbar-links-owned-links"> 
                    {/* Add Links; Toggle Off if not logged in */}
                        <div className="text-body-20 text-links-navbar-owned" onClick={toggleNavBar}>Worlds</div>
                        <div className="text-body-20 text-links-navbar-owned" onClick={toggleNavBar}>Works</div>
                        <div className="text-body-20 text-links-navbar-owned" onClick={toggleNavBar}>Characters</div>
                    </div>
                </div>
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