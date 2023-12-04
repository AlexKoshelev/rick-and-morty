import location from "../../api/location.json";
import { NavLink } from "react-router-dom";
import { useSorted } from "../../hooks/useSorted";
import SortedButtons from "../ui/sorted-buttons";
import { LocationData } from "../types/data";
const Locations = () => {
  const [sortedData, val, setSearchParams] = useSorted<LocationData>(location);
  return (
    <section className="list _container">
      <h1>Локации</h1>
      <SortedButtons val={val} setSearchParams={setSearchParams} />
      <ul>
        {sortedData.map((e: LocationData) => (
          <li key={e.id}>
            <NavLink to={`${e.id}`}>{e.name}</NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Locations;
