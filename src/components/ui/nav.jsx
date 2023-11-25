import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={""}>Главная</NavLink>
        </li>
        <li>
          <NavLink to={"heroes"}>Герои</NavLink>
        </li>
        <li>
          <NavLink to={"locations"}>Локации</NavLink>
        </li>
        <li>
          <NavLink to={"episodes"}>Эпизоды</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
