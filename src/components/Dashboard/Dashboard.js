import { useAuth } from "../../hooks/AuthProvider";
import { useState } from "react";

import StationSite from '../../util/StationSite';

import StationList from '../StationList/StationList';
import StationCreate  from '../StationCreate/StationCreate';
import StationMenu from '../StationMenu/StationMenu';

import { PanelMenu } from 'primereact/panelmenu';
import { PrimeIcons } from 'primereact/api';

import './Dashboard.css';

const Dashboard = () => {
    const auth = useAuth();
    const [stations, setStations] = useState(JSON.parse(localStorage.getItem("stations")) || []);
    const [activeStation, setActiveStation] =  useState(null);
    const [stationCreateVisible, setStationCreateVisible] = useState(false);

    const menuItems = [
        {label: 'Sign Out', icon: PrimeIcons.SIGN_OUT, command: auth.handleLogout}
    ];
    
    const handleStationCreateClick = (e) => { setStationCreateVisible(true); }
    const handleStationCreateHide = () => { setStationCreateVisible(false); }
    const handleStationClick = (station) => { setActiveStation(station); }
    const handleStationChange = (e) => { setActiveStation(stations[e.value.val]); }

    const handleStationCreateRegistered = () => {
        StationSite.GetStationList().then( (res) => {
            setStations(res);
            localStorage.setItem("stations", JSON.stringify(res));
            setStationCreateVisible(false);
        });
    }

    return  (
        <div>
            <div className="flex nested-grid">
                <nav className="col-fixed bg-primary-reverse h-screen" >
                    { activeStation ? <StationMenu station={activeStation} stationList={stations} onStationChange={handleStationChange} /> : '' }
                    <PanelMenu model={menuItems} className="w-full md:w-20rem p-3"  /> 
                </nav>
                <div className="col">
                     { activeStation ? '' :  <StationList stations={stations} onStationCreateClick={handleStationCreateClick} onStationClick={handleStationClick} />}  
                </div>
            </div>
            <StationCreate visible={stationCreateVisible} onHide={handleStationCreateHide} onRegistered={handleStationCreateRegistered} />
        </div>
    )
}

export default Dashboard;