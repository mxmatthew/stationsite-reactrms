
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';


const StationItem = (props) => {
  const handleStationClick = (e) => { props.onStationClick(props.station); }

  return (
      <Card className="col-3 text-center">
        <Button icon="pi pi-folder" rounded aria-label="Filter" size="large" severity="secondary" onClick={handleStationClick}  />
        <div className="text-3xl mt-3">{props.station.name}</div>
      </Card>
  )
};

export default StationItem;