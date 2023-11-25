import React from "react";
const SortedButtons = ({ val, setSearchParams }) => {
  return (
    <div>
      <h2>Сортировать</h2>
      <div>
        <button
          style={{ backgroundColor: val === "DESC" ? "#e77fd7" : null }}
          onClick={() => setSearchParams({ s: "DESC" })}
        >
          Сперва новые
        </button>
        <button
          style={{ backgroundColor: val === "ASC" ? "#e77fd7" : null }}
          onClick={() => setSearchParams({ s: "ASC" })}
        >
          Сперва старые
        </button>
      </div>
    </div>
  );
};
export default SortedButtons;
