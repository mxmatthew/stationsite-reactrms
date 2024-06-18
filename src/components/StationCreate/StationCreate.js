
import { Dialog } from 'primereact/dialog';
import {Button } from 'primereact/button';

function StationCreate (props) {

  const handleSaveClick = () => {

    props.onHide();
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
      
      
    </Dialog>
  );
};

export default StationCreate;
