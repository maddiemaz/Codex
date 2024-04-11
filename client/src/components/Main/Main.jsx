import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import AccountPage from './AccountPage'
import SearchResults from './SearchResults'
import UserList from './UserList'
import UserPage from './UserPage'
import WorldList from './WorldList'
import WorldPage from './WorldPage'
import CharacterList from './CharacterList'
import CharacterPage from './CharacterPage'
import OwnedCharacters from './OwnedCharacters'
// Possibly include separate pages for owned worlds/characters, liked, etc.

export default function Main () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/search/results' element={<SearchResults/>}/>
                <Route path='/account/:id' element={<AccountPage/>}/>
                <Route path='/users' element={<UserList/>}/>
                <Route path='/users/:id' element={<UserPage/>}/>
                <Route path='/worlds' element={<WorldList/>}/>
                <Route path='/worlds/:id' element={<WorldPage/>}/>
                <Route path='/characters' element={<CharacterList/>}/>
                <Route path='/characters/:id' element={<CharacterPage/>}/>
                <Route path='/users/:id/characters' element={<OwnedCharacters/>}/>
            </Routes>
        </div>
    )
}