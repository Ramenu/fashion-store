import React, {useState} from "react";

let loggedIn = false;

export const LoginForm = ({setRole}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleRole = (event) => {
        loggedIn = true;
        if (username === "Admin" && password === "1234")
            setRole("Admin");
        else 
            setRole("User");
    }
    if (!loggedIn)
    {
        return (
            <div className="login-form">
                <h1>Login</h1>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
                <br/>
                <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <button onClick={handleRole}>Login</button>
            </div>    
        );
    }
    return null;
}