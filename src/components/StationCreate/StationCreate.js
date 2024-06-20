
import { useState } from "react";

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import StationSite from '../../util/StationSite';

function StationCreate (props) {
  const [registerResponse, setRegisterResponse] = useState();
  const [input, setInput] = useState({});

  const handleSaveClick = () => {
    StationSite.RegisterStation(input).then((res) => {
      if (res.error) {
        setRegisterResponse(<Message severity="error" text={res.error} className="mb-3 w-full" />)
      } else {
        props.onRegistered(res);
      }
    });
  }

  const handleInput = (e) => {
    const {name, value} = e.target;
    setInput((prev) => ({...prev,[name]: value}));
  }

  const stationCreateFooter = () => {
    return (
      <div className="border-top-1 border-50 pt-3">
        <Button label="Cancel" onClick={props.onHide} icon="pi pi-times" text  />
        <Button label="Save" onClick={handleSaveClick} icon="pi pi-check"  />
      </div>
    )
  }

  return (
    <Dialog header="Create New Station" visible={props.visible} style={{ width: '50vw' }} onHide={props.onHide} footer={stationCreateFooter}>
      {registerResponse}

      <div className="flex flex-column gap-2">
          <label htmlFor="stationName">Station Name</label>
          <InputText id="stationName" name="name" onChange={handleInput} />
      </div>
    </Dialog>
  );
};

export default StationCreate;
