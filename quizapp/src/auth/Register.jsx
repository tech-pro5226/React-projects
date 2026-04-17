import React,{useState} from 'react'
import styles from './Register.module.css'
import CustomeButton from '../components/CustomeButton'
import { useNavigate, Link } from 'react-router-dom'
export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const onChangeHandler = (e) => {
        const {name, value} = e.target
        switch(name){
            case 'username':
                setUsername(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break
            case 'confirmPassword':
                setConfirmPassword(value)
                break
            default:
                break
        }
    }
    const handleRegister = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            setError('Passwords do not match')
            return
        }
        if(!username || !email || !password || !confirmPassword){
            setError('All fields are required')
            return
        }
        // store details in local storage
        let user = {
            username,
            email,
            password
        }
        localStorage.setItem('user', JSON.stringify(user))
        setError('User registered successfully')
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        navigate('/login')
    }
  return (
    <div className={styles.register}>
        <h1>Register</h1>
        {error && <p className={styles.error}>{error}</p>}
        <form className={styles.form}>
            <input className={styles.input} type="text" placeholder='Username' name='username' onChange={onChangeHandler}  value={username} />
            <input className={styles.input} type="email" placeholder='Email' name='email' onChange={onChangeHandler} value={email} />
            <input className={styles.input} type="password" placeholder='Password' name='password' onChange={onChangeHandler} value={password} />
            <input className={styles.input} type="password" placeholder='Confirm Password' name='confirmPassword' onChange={onChangeHandler} value={confirmPassword} />
            <CustomeButton btnTxt='Register' style={styles.button} handleClick={handleRegister} />
        </form>
        <p className={styles.loginLink}>
            Already have an account? <Link to="/login" className={styles.link}>Login here</Link>
        </p>
    </div>
  )
}