import React from "react";
import characters from "../../api/characters.json";
import { useParams } from "react-router-dom";
import Card from "../common/card";
const Hero = () => {
  const { id } = useParams();
  const currentHero = characters.filter((h) => h.id === +id)[0];
  return (
    <Card
      image={currentHero.image}
      gender={currentHero.gender}
      name={currentHero.name}
      species={currentHero.species}
      status={currentHero.status}
      type={currentHero.type}
    />
  );
};
export default Hero;
