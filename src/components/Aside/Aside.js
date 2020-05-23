import React from "react";
import Article from "../Section/Article/Article";
import Burger from "./Burger/Burger";

import "./style.css";

const Aside = (props) => {
  return (
    <aside>
      <div className="wrapper">
        <div className="flex">
          <Burger />
          <span>Favourite</span>
        </div>

        <div className="favourite-joke">
          {props.data.map((joke) => (
            <Article
              joke={joke}
              key={joke.id}
              handleHeart={() => props.deleteFavoriteJokes(joke)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};
export default Aside;
