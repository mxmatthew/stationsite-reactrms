import { useState} from "react";

import { PanelMenu } from 'primereact/panelmenu';
import { Dropdown } from 'primereact/dropdown';

function StationMenu (props) {
    const [changeStationIndex, setChangeStationIndex] = useState();

    const menuItems = [
        {
           label:props.station.name,
           expanded:true,
           items:[
              {label:'Manage Station', icon:'pi pi-fw pi-wrench'},
              {label:'Schedule', icon:'pi pi-fw pi-calendar'},
              {label:'Programmes', icon:'pi pi-fw pi-box'},
              {label:'Users', icon:'pi pi-fw pi-user'},
           ]
        }
     ];

     const stationDropdownOptions = (props.stationList && props.stationList.length > 0 ? props.stationList.map((station,index) => {
        return {label: station.name, val: index}
     }) : []);

  return ( 
    <div>
        <PanelMenu model={menuItems} className="p-3"  /> 
        <div className="p-3">
        <Dropdown value={changeStationIndex} variant="filled" onChange={props.onStationChange}  options={stationDropdownOptions}  placeholder="Change Station" />
        </div>
    </div>
  );
};
 
export default StationMenu;
