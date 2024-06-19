
import { Card } from 'primereact/card';
import {Button } from 'primereact/button';


const StationItem = (props) => {
    return (
        <Card className="col-3 text-center" key={props.key}>
          <Button icon="pi pi-folder" rounded aria-label="Filter" size="large"  />
          <div className="text-3xl mt-3">{props.station.name}</div>
        </Card>
    )
};

export default StationItem;