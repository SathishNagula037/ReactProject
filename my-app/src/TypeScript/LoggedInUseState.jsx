import { useState } from "react"


export const LoggedIn = () => {
    const [isloggedin, setIsLoggedIn] = useState(false)


    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    
    const handleLogOut = () => {}

    return(
        <div>
            <button onClick={handleLogin}>LogIn </button>
            <button onClick={handleLogOut}>LogOut </button>
            <div>USer {isloggedin ? 'logged in': 'logged out'}</div>
        </div>
    )