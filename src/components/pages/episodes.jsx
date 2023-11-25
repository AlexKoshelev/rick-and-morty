import React from "react";
import episode from "../../api/episode.json";
import { NavLink } from "react-router-dom";
import { useSorted } from "../../hooks/useSorted";
import SortedButtons from "../ui/sorted-buttons";
const Episodes = () => {
  const [sortedData, val, setSearchParams] = useSorted(episode);
  return (
    <section className="list _container">
      <h1>Эпизоды</h1>
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
export default Episodes;
