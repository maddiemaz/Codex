import {React, useRef, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Autoplay, Pagination, Navigation} from 'swiper/modules'

export default function CharacterGallery() {
    const [character, setCharacter] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const getCharacter = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/characters/${id}`)
                setCharacter(response.data)
                console.log(response)
            } catch (error) {
                console.error('Error retrieving Character')
            }
        }
        getCharacter()
    }, [id])

    if (!character) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className="gallery-container">
                <Swiper
                    className="swiper-gallery"
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{clickable: true}}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {character.gallery.map((imageURL, index) => (
                        <SwiperSlide>
                            <img src={imageURL} key={index} alt={`Image ${index}`} className="gallery-image"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )
    }
}