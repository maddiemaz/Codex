import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function AddCharacter ({toggleAddNew}) {

    let { id } = useParams()

    const initialState = {
        world: '',
        name: '',
        priority: '',
        priority_role: '',
        banner: '',
        public: '',
        owner: id
    }
    // Pared down; minus Works and other arrays

    const [formState, setFormState] = useState(initialState)
    const [worlds, setWorlds] = useState([])
    const [submit, setSubmit] = useState(false)

    const getWorlds = async() => {
        const response = await axios.get('http://localhost:3001/worlds')
        setWorlds(response.data)
    }
    useEffect(() => {
        getWorlds()
    }, [])

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
        setSubmit(false)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/characters', formState)
        setFormState(initialState)
        setSubmit(true)
    }

    if (!worlds) {
        return <div className="loading">Loading...</div>
    } else {
        return (
        <div className="sub-add-character">
            <form className="form-add-new" onSubmit={handleSubmit}>
                <div className="form-add-fields-container">
                    {/* <div className="form-label-field-pair">
                        <label className="form-label" htmlFor="name">Name:</label>
                        <input className="form-input" type="text" id="name" onChange={handleChange} value={formState.name}/>
                    </div> */}
                    <select className="form-select" id="world" onChange={handleChange} value={formState.world}>
                        <option className="form-select-option" value='' disabled defaultValue>Select a World</option>
                        {worlds.map(world =>
                            <option key={world._id} value={world._id}>{world.name}</option>
                        )}
                    </select>
                    <input className="add-form-input" type="text" id="name" placeholder="Name" onChange={handleChange} value={formState.name}/>
                    <input className="add-form-input" type="text" id="priority" placeholder="Character Priority" onChange={handleChange} value={formState.priority}/>
                    <input className="add-form-input" type="text" id="priority_role" placeholder="Narrative Role" onChange={handleChange} value={formState.priority_role}/>
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
}