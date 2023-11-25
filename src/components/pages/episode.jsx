import React from "react";
import location from "../../api/episode.json";
import { useParams } from "react-router-dom";
import Card from "../common/card";
const Episode = () => {
  const { id } = useParams();
  const currentEpisode = location.filter((h) => h.id === +id)[0];
  return (
    <Card
      episode={currentEpisode.episode}
      name={currentEpisode.name}
      air_date={currentEpisode.air_date}
    />
  );
};
export default Episode;
