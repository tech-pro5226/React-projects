import React,{useState} from 'react'
import styles from './Login.module.css'
import CustomeButton from '../components/CustomeButton'
import { useNavigate, Link } from 'react-router-dom'
export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const onChangeHandler = (e) => {
        const {name, value} = e.target
        switch(name){
            case 'username':
                setUsername(value)
                break
            case 'password':
                setPassword(value)
                break
            default:
                break
        }
    }
    const handleLogin = (e) => {
        e.preventDefault()
        if(!username || !password){
            setError('All fields are required')
            return
        }
        // check if user is registered
        let user = JSON.parse(localStorage.getItem('user'))
        if(user){
            if(user.username === username && user.password === password){
                // Set logged in status
                localStorage.setItem('isLoggedIn', 'true')
                localStorage.setItem('currentUser', JSON.stringify({ username: user.username, email: user.email }))
                navigate('/')
            }else{
                setError('Invalid username or password')
            }
        }else{
            setError('User not registered')
        }
    }
  return (
    <div className={styles.login}>
        <h1>Login</h1>
        {error && <p className={styles.error}>{error}</p>}
        <form className={styles.form}>
            <input className={styles.input} type="text" placeholder='Username' name='username' onChange={onChangeHandler} value={username} />
            <input className={styles.input} type="password" placeholder='Password' name='password' onChange={onChangeHandler} value={password} />
            <CustomeButton btnTxt='Login' style={styles.button} handleClick={handleLogin} />
        </form>
        <p className={styles.registerLink}>
            Don't have an account? <Link to="/register" className={styles.link}>Register here</Link>
        </p>
    </div>
  )
}