import './Login.css';
import { useState } from "react";
import { useAuth } from "../../hooks/AuthProvider";

const Login = () => {

    const [input, setInput] = useState({ email: "", password: ""});
    const auth = useAuth();

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        console.log(e);
        if (input.email !== "" && input.password !== "") {
          auth.handleLogin(input);
        } else {
            alert("please provide a valid input");
        }
      };

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInput((prev) => ({...prev,[name]: value}));
    }

    return (
        <form onSubmit={handleSubmitEvent}>
            <label htmlFor="user-email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                aria-describedby="user-email"
                aria-invalid="false"
                onChange={handleInput}
            />

            <label htmlFor="password">Password:</label>
             <input
                type="password"
                id="password"
                name="password"
                aria-describedby="user-password"
                aria-invalid="false"
                onChange={handleInput}
            />

            <button>Submit</button>
        </form>
    )
}

export default Login;