import React from "react";
import GridIcon from "../assets/GridIcon";
import ListIcon from "../assets/ListIcon";


const ToggleListToGrid = ({ listView ,setListView }) => {
  
    const toggleListView = () => setListView(!listView);

    const iconContainer = {
        padding: 8,
        display: "flex",
        justifyContent: "end",
        borderRadius: 8,
        border: "solid 1px grey",
        gap: 10,
        cursor: "pointer",
      };

  return (
    <span style={iconContainer} onClick={toggleListView}>


      {listView ?
       <ListIcon show={true} /> : <ListIcon show={false}/>}
        
      {listView? <GridIcon show={false}/> : <GridIcon show={true}/>}


    </span>
  );
};

export default ToggleListToGrid;
