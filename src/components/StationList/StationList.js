import StationItem from "../StationItem/StationItem";
import React, { useState, useCallback } from "react";

const StationList = (props) => {
  return (
    <div className="grid p-3">
      {props.stations.map((station) => {
        return (
          <StationItem key={station.id} />
        );
      })}
      
       <StationItem key={0}  />
    </div>
  );
};

export default StationList;
