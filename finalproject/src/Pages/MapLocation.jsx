import React from "react";
import Map from "../Comp/Map";


const MapLocation = (props) => {

  

  return (
    <div className="bg-black opacity-75 h-screen ">
      <div className="w-[1200px] min-h-[1000px] m-auto pt-[90px]">
        <Map width="100%" height="100%" position={props.position}/>
      </div>
    </div>
  );
};

export default MapLocation;
