import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function UserList () {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async() => {
            const response = await axios.get('http://localhost:3001/users')
            setUsers(response.data)
        }
        getUsers()
    }, [])
    console.log(users)

    const navigate = useNavigate()
    const showType = (user) => {
        navigate(`${user._id}`)
    }
    
    if (!users) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className='user-list-page'>
                <div className="search-list-grid">
                    <div className='text-title-26 search-list-title'>Users</div>
                    {users.map((user) => (
                        <div className="search-list-card" onClick={() => showType(user)} key={user._id}>
                            <div className="list-card-image-container">
                                <img src={user.banner} alt={user.username} className="list-card-image"/>
                            </div>
                            <div className="list-card-info">
                                <div className="text-title-20">{user.username}</div>
                                <div className="user-tag-bubble-container">
                                    {user.tags.map((tag, index) => (
                                        <div className="user-tag-bubble" key={index}>{tag}</div>
                                    ))}
                                </div>
                                <div className="list-card-primary-info">
                                    <div className="user-list-primary-set">
                                        <div className="list-primary-set-icon">{user.worlds_owned.length}</div>
                                        <div className="text-body-14">Worlds</div>
                                    </div>
                                    <div className="user-list-primary-set">
                                        <div className="list-primary-set-icon">{user.characters_owned.length}</div>
                                        <div className="text-body-14">Characters</div>
                                    </div>
                                </div>
                                <div className="list-card-secondary-info">
                                    <div className="user-list-secondary-set">
                                        <div className="list-secondary-set-icon">#</div>
                                        <div className="text-body-10">Private</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) 
    }
    
}