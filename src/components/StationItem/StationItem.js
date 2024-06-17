
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { StationCreate } from '../StationCreate/StationCreate'

const StationItem = (props) => {

  const handleStationCreateClick = (e) => {

  }

  if (props.key > 0) {
    return (
      <div>
        <Card className="col-3 text-center">
          
        </Card>
      </div>
    );
  } else {
    return (
      <div>
        <Card className="col-3 text-center">
          <Button icon="pi pi-plus" rounded aria-label="Filter" size="large" onClick={handleStationCreateClick} />
          <div className="text-3xl mt-3">Create Station</div>
        </Card>
        <StationCreate></StationCreate>
      </div>
      
    );
  }

};

export default StationItem;