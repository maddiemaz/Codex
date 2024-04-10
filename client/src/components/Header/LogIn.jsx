import { useContext, useState } from 'react'
import userContext from '../../userContext'
import axios from 'axios'

export default function LogIn({toggleLogin}) {
    const {setLoggedIn} = useContext(userContext)
    const {setUser} = useContext(userContext)
    const [errorMessage, setErrorMessage] = useState()

    const initialState = {
        email: '',
        password: ''
    }
    const [formState, setFormState] = useState(initialState)
    
    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }
    const handleLogIn = async (event) => {
        event.preventDefault()
        const response = await axios.get(`http://localhost:3001/users/email/${formState.email}`)
        let userLogIn

        if (response) {
            setErrorMessage('')
            userLogIn = response.data
        } else {
            setErrorMessage('Account not found')
        }

        if (userLogIn[0].password === formState.password) {
            setUser(userLogIn)
            setErrorMessage('')
            setLoggedIn(true)
        } else {
            setErrorMessage('Incorrect password')
        }
    }

    return (
        <div className="login-form">
            <form className="login-form-form" onSubmit={handleLogIn}>
                <div className="login-form-container">
                    <div className="login-form-title">
                        <div className="text-body-30 login-form-title-body">welcome to</div>
                        <div className="text-title-36">codex</div>
                    </div>
                    <div className="login-form-fields">
                        <input className="login-input-field" type='text' id='email' placeholder='email' value={formState.email} onChange={handleChange} required/>
                        <input className="login-input-field" type='password' id='password' placeholder='password' value={formState.password} onChange={handleChange} required/>
                    </div>
                    <div className="login-button-container">
                        <button type='submit' className="login-button-submit" onClick={toggleLogin}>log in</button>
                    </div>
                    <div className="login-error">
                        {errorMessage !== '' ? errorMessage : null}
                    </div>
                </div>
            </form>
        </div>
    )
}