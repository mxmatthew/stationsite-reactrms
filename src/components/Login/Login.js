import './Login.css';
import { useState } from "react";

const Login = () => {

    const [input, setInput] = useState({ email: "", password: ""});

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInput((prev) => ({...prev,[name]: value}));
    }

    return (
        <h1 >Login</h1>
    )
}

export default Login;