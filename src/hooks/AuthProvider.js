import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Message } from 'primereact/message';
import StationSite from '../util/StationSite';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [token, setToken] = useState(localStorage.getItem("at") || "");
    const navigate = useNavigate();

    const handleLogin = async (data) => {
        try {
            const response = await fetch('https://api.stationsite.co.uk/user/login', { 
                method: 'POST',
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(data)
            });
    
            const res = await response.json();

            if (res.error) {
                return <Message severity="error" text={res.error} className="mb-3 w-full" />;
            } else {
                setUser(res.user);
                setToken(res.accessToken);
                localStorage.setItem("at", res.accessToken);
                localStorage.setItem("user", JSON.stringify(res.user));

                StationSite.GetStationList(false);
                navigate("/");
            }
        } catch(err) {
            console.log(err);
        }
    }

    const handleLogout = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("at");
        localStorage.removeItem("user");
        navigate("/login");
    }

    const handleRegister = async (data) => {
        try {
            const response = await fetch('https://api.stationsite.co.uk/user/register', { 
                method: 'POST',
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(data)
            });
    
            const res = await response.json();

            if (res.error) {
                return res.error;
            } else {
                navigate("/login");
            }
        } catch(err) {
            console.log(err);
        }
    }

    return <AuthContext.Provider value={{ token, user, handleLogin, handleLogout, handleRegister }} >{children}</AuthContext.Provider>;
}

export default AuthProvider;
export const useAuth = () => { return useContext(AuthContext); }