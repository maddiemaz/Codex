import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Account from './Account'
import SearchResults from './SearchResults'
import UserList from './UserList'
import UserPage from './UserPage'
import WorldList from './WorldList'
import WorldPage from './WorldPage'
import CharacterList from './CharacterList'
import CharacterPage from './CharacterPage'
// Possibly include separate pages for owned worlds/characters, liked, etc.

export default function Main () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/search/results' element={<SearchResults/>}/>
                <Route path='/account/:id' element={<Account/>}/>
                <Route path='/users' element={<UserList/>}/>
                <Route path='/user/:id' element={<UserPage/>}/>
                <Route path='/worlds' element={<WorldList/>}/>
                <Route path='/worlds/:id' element={<WorldPage/>}/>
                <Route path='/characters' element={<CharacterList/>}/>
                <Route path='/characters/:id' element={<CharacterPage/>}/>
            </Routes>
        </div>
    )
}