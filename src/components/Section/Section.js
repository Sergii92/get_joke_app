import React from "react";

import Article from "./Article/Article";

const Section = (props) => {
  return (
    <section>
      {props.data.map((joke) => (
        <Article
          joke={joke}
          key={joke.id}
          handleHeart={() => props.handelFavoriteJokes(joke)}
        />
      ))}
    </section>
  );
};
export default Section;
