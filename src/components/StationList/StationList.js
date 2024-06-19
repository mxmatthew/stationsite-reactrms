import StationItem from "../StationItem/StationItem";
import React, { useState, useCallback } from "react";
import { Card } from 'primereact/card';
import {Button } from 'primereact/button';

const StationList = (props) => {
  return (
    <div className="grid p-3 row-gap-2 column-gap-2" >
      {props.stations.map((station) => {
        return (
          <StationItem key={station.id} station={station} />
        );
      })}

      <Card className="col-3 text-center">
          <Button icon="pi pi-plus" rounded aria-label="Filter" size="large" onClick={props.onStationCreateClick} />
          <div className="text-3xl mt-3">Create Station</div>
      </Card>
    </div>
  );
};

export default StationList;
