import React from "react";
import location from "../../api/location.json";
import { NavLink } from "react-router-dom";
import { useSorted } from "../../hooks/useSorted";
import SortedButtons from "../ui/sorted-buttons";
const Locations = () => {
  const [sortedData, val, setSearchParams] = useSorted(location);
  return (
    <section className="list _container">
      <h1>Локации</h1>
      <SortedButtons val={val} setSearchParams={setSearchParams} />
      <ul>
        {sortedData.map((e) => (
          <li key={e.id}>
            <NavLink to={`${e.id}`}>{e.name}</NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Locations;
