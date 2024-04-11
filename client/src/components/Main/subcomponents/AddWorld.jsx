import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function AddWorld ({toggleAddNew}) {

    let { id } = useParams()

    const initialState = {
        name: '',
        about: '',
        banner: '',
        public: '',
        owner: id
    }
    // Pared down; minus Tags and Works and other arrays

    const [formState, setFormState] = useState(initialState)
    const [submit, setSubmit] = useState(false)

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
        setSubmit(false)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/worlds', formState)
        setFormState(initialState)
        setSubmit(true)
    }

    return (
        <div className="sub-add-world">
            <form className="form-add-new" onSubmit={handleSubmit}>
                <div className="form-add-fields-container">
                    <input className="add-form-input" type="text" id="name" placeholder="Name" onChange={handleChange} value={formState.name}/>
                    <input className="add-form-input" type="text" id="about" placeholder="Description" onChange={handleChange} value={formState.priority}/>
                    <input className="add-form-input" type="text" id="banner" placeholder="Banner Image URL" onChange={handleChange} value={formState.banner}/>
                    <div className="radio-button-container">
                        <label><input id='public' type='radio' name='public' value='true' required ></input>Public</label>
                        <label> <input type='radio' name='public' value='false' required ></input>Private</label>
                    </div>
                </div>
                <button className="add-new-submit-button" type="submit" onClick={toggleAddNew}>add</button>
                
            </form>
        </div>
    )
}