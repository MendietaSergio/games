import React from "react";

export const Attempts = ({ player, machine, cant }) => {
  if (player) {
    return <div className="player-circle"></div>;
  }
  if (machine) {
    return <div className="machine-circle"></div>;
  }
};
