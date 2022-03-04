import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

let loggedIn = false;

export const LoginForm = ({setRole}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleRole = (event) => {
        if (username !== "" && password !== "")
        {
            loggedIn = true;
            if (username === "Admin" && password === "1234")
                setRole("Admin");
            else 
                setRole("User");
        }
        else { 
            alert("Please enter a valid username and password.");
        }
    }
    if (!loggedIn)
    {
        const form = (
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
                <Button variant="success" onClick={handleRole}>Login</Button>
            </div>    
        );
        return form;
    }
    return null;
}