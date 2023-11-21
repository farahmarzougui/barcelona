import React from "react";
import Player from "./player";
import playersData from "./players";

const PlayersList = () => {
  return (
    

<div className="row">
      {playersData.map((player, index) => (
        <div key={index} className="col-md-4">
          <Player {...player} />
        </div>
      ))}
    </div>
  );
};

export default PlayersList;