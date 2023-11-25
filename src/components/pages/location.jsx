import React from "react";
import location from "../../api/location.json";
import { useParams } from "react-router-dom";
import Card from "../common/card";
const Location = () => {
  const { id } = useParams();
  const currentLocation = location.filter((h) => h.id === +id)[0];
  return (
    <Card
      dimension={currentLocation.dimension}
      name={currentLocation.name}
      type={currentLocation.type}
    />
  );
};
export default Location;
