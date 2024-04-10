import {Link, useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function UserPage () {
    let {id} = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        const getUsers = async() => {
            const response = await axios.get(`http://localhost:3001/users/${id}`)
            setUser(response.data)
        }
        getUsers()
    }, [user])

    const navigate = useNavigate()
    
    if (!user) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className='user-detail-page'>
                <div className="detail-list-grid">
                    <div className="search-list-card">
                        <div className="list-card-image-container">
                            <img src={user.banner} alt={user.username} className="list-card-image"/>
                        </div>
                        <div className="list-card-info">
                            <div className="text-title-20">{user.username}</div>
                            {/* <div className="text-body-14">{character.world[0].name}</div>
                            <div className="text-body-12">{character.owner[0].username}</div> */}
                            <div className="user-tag-bubble-container">
                                {user.tags.map((tag, index) => {
                                    return <div className="user-tag-bubble" key={index}>{tag}</div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}