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
                    <div className="text-title-18">Search your codex</div>
                    <div className="navbar-links-owned-links"> 
                    {/* Add Links */}
                        <div className="text-title-14 text-links-navbar-owned" onClick={toggleNavBar}>Your Worlds</div>
                        <div className="text-title-14 text-links-navbar-owned" onClick={toggleNavBar}>Your Works</div>
                        <div className="text-title-14 text-links-navbar-owned" onClick={toggleNavBar}>Your Characters</div>
                    </div>
                </div>
                <div className="navbar-links-all">
                    <div className="text-title-18">Search all codices</div>
                    <div className="navbar-links-all-links"> 
                    {/* Add Routes */}
                        {/* <Link to="/worlds" className="text-title-14 text-links-navbar-all" onClick={toggleNavBar}>All Worlds</Link>
                        <Link to="/works" className="text-title-14 text-links-navbar-all" onClick={toggleNavBar}>All Works</Link>
                        <Link to="/characters" className="text-title-14 text-links-navbar-all" onClick={toggleNavBar}>All Characters</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}