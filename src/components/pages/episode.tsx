import location from "../../api/episode.json";
import { useParams } from "react-router-dom";
import Card from "../common/card";
import { EpisodeData } from "../types/data";
const Episode = () => {
  const { id } = useParams<{ id?: string }>();
  if (!id) return "Эпизод не найден";
  const currentEpisode: EpisodeData | undefined = location.filter(
    (h) => h.id === +id
  )[0];
  return (
    <Card
      episode={currentEpisode.episode}
      name={currentEpisode.name}
      air_date={currentEpisode.air_date}
    />
  );
};
export default Episode;
