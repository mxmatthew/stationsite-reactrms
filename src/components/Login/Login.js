import './Login.css';
import { useState } from "react";
import { useAuth } from "../../hooks/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';

const Login = () => {
    const [input, setInput] = useState({ email: "", password: ""});
    const [loginResponse, setLoginResponse] = useState();
    const navigate = useNavigate();
    const auth = useAuth();

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        
        if (input.email !== "" && input.password !== "") {
            auth.handleLogin(input).then(setLoginResponse);
        } else {
            setLoginResponse(<Message severity="error" text="Please enter your email address and password" className="mb-3 w-full" />);
        }
    };

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInput((prev) => ({...prev,[name]: value}));
    }

    const handleRegisterClick = (e) => { navigate("/register"); }

    return (
        <form onSubmit={handleSubmitEvent} >
            <div className="flex align-items-center justify-content-center h-full">
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-3">
                    <div className="text-center mb-5">
                        <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                        <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                        <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer" onClick={handleRegisterClick}>Register </a>
                    </div>
                    <div>
                        {loginResponse}

                        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                        <InputText type="email" name="email" placeholder="Email" aria-describedby="email" onChange={handleInput} className="w-full mb-3 p-inputtext-lg" />

                        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                        <Password type="password" name="password"  aria-describedby="password" onChange={handleInput} toggleMask feedback={false}  inputClassName="w-full" className="p-inputtext-lg mb-3" />
                        
                        <Button label="Sign In" icon="pi pi-user" className="w-full" size="large"  />
                    </div>
                </div>
            </div>
       </form>
    )
}

export default Login;