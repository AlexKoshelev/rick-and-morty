import characters from "../../api/characters.json";
import { NavLink } from "react-router-dom";
import { useSorted } from "../../hooks/useSorted";
import SortedButtons from "../ui/sorted-buttons";
import { HeroData } from "../types/data";
const Heroes = () => {
  const [sortedData, val, setSearchParams] = useSorted<HeroData>(characters);
  return (
    <section className="list _container">
      <h1>Герои</h1>
      <SortedButtons val={val} setSearchParams={setSearchParams} />
      <ul>
        {sortedData.map((e: HeroData) => (
          <li key={e.id}>
            <NavLink to={`${e.id}`}>{e.name}</NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Heroes;
