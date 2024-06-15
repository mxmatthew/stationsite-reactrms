import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';

import "primereact/resources/themes/soho-light/theme.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import './App.css';

import Login from "../Login/Login";
import Register from "../Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import AuthProvider from "../../hooks/AuthProvider";
import PrivateRoute from "../../router/route/PrivateRoute";

function App() {
 
  return (
  <div className="App">
    <PrimeReactProvider>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Dashboard />} />
              </Route>
            </Routes>
          </AuthProvider>
        </Router>
      </PrimeReactProvider>
  </div>
  );
}

export default App;
