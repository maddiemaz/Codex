import NavSidebar from './NavSidebar'
import UserSidebar from './UserSidebar'
import userContext from '../../userContext'
import LogIn from './LogIn'
import SearchBar from './SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    const {loggedIn} = useContext(userContext)

    const [navBar, openNavBar] = useState(false)
    const [userBar, openUserBar] = useState(false)

    const toggleNavBar = () => openNavBar(!navBar)
    const toggleUserBar = () => openUserBar(!userBar)

    return (
        <div className="header">
            <div className="header-primary"></div>
        </div>
    )
}