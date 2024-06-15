import './Register.css';
import { useState } from "react";
import { useAuth } from "../../hooks/AuthProvider";

const Register = () => {

    const [input, setInput] = useState({fullName: "", email: "", password: "", role: "admin"});
    const [registerResponse, setRegisterResponse] = useState();

    const auth = useAuth();

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        
        if (input.email !== "" && input.password !== "") {
            auth.handleRegister(input).then(setRegisterResponse);
        } else {
            setRegisterResponse("please provide a valid input");
        }
      };

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInput((prev) => ({...prev,[name]: value}));
    }

    return (
        <form onSubmit={handleSubmitEvent}>
            <h3>{registerResponse}</h3>

            <label htmlFor="fullName">Name:</label>
            <input type="text" id="fullName" name="fullName" placeholder="Name" aria-describedby="fullName" aria-invalid="false" onChange={handleInput} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" aria-describedby="email" aria-invalid="false" onChange={handleInput} />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" aria-describedby="user-password" aria-invalid="false" onChange={handleInput} />

            <input type="hidden" name="role" value="admin"  />

            <button>Submit</button>
        </form>
    )
}

export default Register;