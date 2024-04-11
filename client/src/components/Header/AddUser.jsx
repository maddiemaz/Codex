import { useContext, useEffect, useState } from 'react';
import userContext from '../../userContext';
import axios from 'axios';

export default function AddUser ({toggleAddUser}) {
    const {loggedIn, setLoggedIn} = useContext(userContext)
    const {user, setUser} = useContext(userContext)

    const formInitialState = {
        username: '',
        email: '',
        password: '',
        full_name: '',
        banner: '',
        // tags: []
    }
    // worlds_owned & characters_owned are blank for now

    const [formState, setFormState] = useState(formInitialState)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [usernameMessage, setUsernameMessage] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [signupMessage, setSignupMessage] = useState('')

    const handleChange = (event) => {
        const {id, value} = event.target
        setFormState({...formState, [id]: value})
    }

    const handlePassword = () => {
        if (formState.password === confirmPassword) {
            setPasswordMessage(<div className="add-account-handle-msg-valid">&#x2713; Passwords match</div>)
        } else {
            setPasswordMessage(<div className="add-account-handle-msg-invalid">&times; Passwords do not match</div>)
        }
    }

    const handleUsername = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.get('http://localhost:3001/users')
            const user = response.data.find(user => user.username === formState.username)
            if (user) {
                setUsernameMessage(<div className="add-account-handle-msg-invalid">&times; Username taken</div>)
            }
        } catch (e) {
            console.error('Error', error)
        }
    }

    const handleEmail = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.get('http://localhost:3001/users')
            const user = response.data.find(user => user.email === formState.email)
            if (user) {
                setEmailMessage(<div className="add-account-handle-msg-invalid">&times; Email already in use</div>)
            }
        } catch (e) {
            console.error('Error', error)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const formDataJson = {
                username: formState.username,
                email: formState.email,
                password: formState.password,
                full_name: formState.full_name,
                banner: formState.banner,
                // tags: formState.tags,
                tags: [],
                worlds_owned: [],
                characters_owned: [],
            }

            const response = await axios.post('http://localhost:3001/users', formDataJson)
            console.log('User added', response.data)
            setSignupMessage(<div className="add-account-handle-msg-valid" onClick={toggleAddUser}>Account created! Click here to log in.</div>)
        } catch (e) {
            console.error('Sign up error', error)
        }
    }

    return (
        <div className="form-add-user">
            <form className="form-add-user-container" onSubmit={handleSubmit}>
                <div className="form-title-add-user">Create Account</div>
                <div className="form-input-container">
                    <input className="form-input-field-add-user" type="text" id="username" placeholder="username" minLength={3} value={formState.username} onChange={handleChange} onBlur={handleUsername} required/>
                    <input className="form-input-field-add-user" type="email" id="email" placeholder="email" value={formState.email} onChange={handleChange} onBlur={handleEmail} required/>
                    <input className="form-input-field-add-user" type="text" id="full_name" placeholder="name (optional)" value={formState.full_name} onChange={handleChange} />
                    <input className="form-input-field-add-user" type="text" id="banner" placeholder="image URL (optional)" value={formState.banner} onChange={handleChange} />
                    {/* <input className="form-input-field-add-user" type="text" id="tags" placeholder="tags (optional)" value={formState.tags} onChange={handleChange} /> */}
                    <input className="form-input-field-add-user" type="password" id="password" placeholder="password" minLength={5} value={formState.password} onChange={handleChange} required/>
                    <input className="form-input-field-add-user" type="password" id="passwordConfirm" placeholder="confirm password" minLength={5} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} onBlur={handlePassword} required/>
                </div>
                <div className="form-error-messages">
                    {passwordMessage}
                    {emailMessage}
                    {usernameMessage}
                    {signupMessage}
                </div>
                <div className="form-input-confirmation-buttons">
                    <button className="form-add-user-submit-button" type="submit">sign up</button>
                    <div className="form-add-user-cancel-button" onClick={toggleAddUser}>Cancel</div>
                </div>
            </form>

        </div>
    )
}