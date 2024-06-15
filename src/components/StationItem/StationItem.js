
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const StationItem = (props) => {
  if (props.key > 0) {
    return (
      <Card className="col-3 text-center">
        
      </Card>
    );
  } else {
    return (
      <Card className="col-3 text-center">
        <Button icon="pi pi-plus" rounded aria-label="Filter" size="large" />
        {[]} <div className="text-3xl mt-3">Create Station</div>
      </Card>
    );
  }
};

export default StationItem;