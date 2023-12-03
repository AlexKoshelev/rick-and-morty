import React from "react";
import characters from "../../api/characters.json";
import { useParams } from "react-router-dom";
import Card from "../common/card";
import { HeroData } from "../types/data";
const Hero: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  if (!id) return "Персонаж не найден";
  const currentHero: HeroData | undefined = characters.filter(
    (h) => h.id === +id
  )[0];
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
