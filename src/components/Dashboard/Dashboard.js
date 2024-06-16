import { useAuth } from "../../hooks/AuthProvider";
import { useState, useEffect } from "react";
import StationList from '../StationList/StationList';
import StationSite from '../../util/StationSite';

import { PanelMenu } from 'primereact/panelmenu';
import { PrimeIcons } from 'primereact/api';



import './Dashboard.css';

const Dashboard = () => {
    const auth = useAuth();
    const menuItems = [];
    const [stationResults, setStationResults] = useState([]);
    const [stations, setStations] = useState(localStorage.getItem("station") || []);
    const [activeStation, setActiveStation] =  useState(null);

    // logout button
    menuItems.push({
        label: 'Sign Out',
        icon: PrimeIcons.SIGN_OUT,
        command: (e) => {
            auth.handleLogout();
        }
    });
    
    return  (
        <div>
            <div className="flex nested-grid">
                <nav className="col-fixed bg-primary-reverse h-screen" >
                    <PanelMenu model={menuItems} className="w-full md:w-20rem p-3"  /> 
                </nav>
                <div className="col">
                 { activeStation ? '' :  <StationList stations={stations}  />}  
                </div>
            </div>
        </div>
    )
}

export default Dashboard;