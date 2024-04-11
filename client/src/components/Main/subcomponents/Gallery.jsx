import {React, useRef, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function WorldGallery() {
    const [world, setWorld] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const getWorld = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/worlds/${id}`)
                setWorld(response.data)
                console.log(response)
            } catch (error) {
                console.error('Error retrieving World')
            }
        }
        getWorld()
    }, [id])

    if (!world) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className="gallery-container-world">

            </div>
        )
    }
}