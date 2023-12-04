import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth-provider";
const Nav: React.FC = () => {
  const auth = useAuth();
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
      <ul>
        {" "}
        <li>
          <NavLink to={"login"}>
            {auth.user.email ? auth.user.email : "Войти"}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
