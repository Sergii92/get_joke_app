import React from "react";

import { disabledButton } from "../../helpers";

import "./style.css";
const Main = ({
  addJoke,
  onChecked,
  checkedVariantJoke,
  setSelectCategory,
  selectCategory,
  search,
  setSearch,
  categories,
}) => {
  const disabled = disabledButton(checkedVariantJoke, selectCategory, search);

  return (
    <main>
      <h1>Hey!</h1>
      <h2>Let’s try to find a joke htmlFor you:</h2>

      <p>
        <input
          className="custom-checkbox"
          type="checkbox"
          name="random"
          id="random"
          checked={checkedVariantJoke === "random"}
          onChange={() => onChecked("random")}
        />
        <label htmlFor="random"> Random</label>
      </p>
      <p>
        <input
          className="custom-checkbox"
          type="checkbox"
          name="caterogies"
          id="caterogies"
          checked={checkedVariantJoke === "caterogies"}
          onChange={() => onChecked("caterogies")}
        />
        <label htmlFor="caterogies"> From caterogies</label>
      </p>
      {checkedVariantJoke === "caterogies" ? (
        <ul className="categories">
          {categories.map((category) => {
            return (
              <li
                onClick={() => setSelectCategory(category)}
                className={selectCategory === category ? "active" : null}
                key={category}
              >
                {category}
              </li>
            );
          })}
        </ul>
      ) : null}

      <p>
        <input
          className="custom-checkbox"
          type="checkbox"
          name="search"
          id="search"
          checked={checkedVariantJoke === "search"}
          onChange={() => onChecked("search")}
        />
        <label htmlFor="search"> Search</label>
      </p>
      {checkedVariantJoke === "search" ? (
        <p>
          <input
            type="text"
            name="text"
            placeholder=" Free text search... "
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </p>
      ) : null}

      <button id="button" onClick={addJoke} disabled={disabled}>
        Get a joke
      </button>
    </main>
  );
};
export default Main;
