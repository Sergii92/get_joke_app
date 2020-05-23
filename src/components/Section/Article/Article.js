import React from "react";
import moment from "moment";

import "./style.css";

const Article = (props) => {
  return (
    <article>
      <div
        className={props.joke.like ? "heart like" : "heart"}
        onClick={props.handleHeart}
      ></div>
      <div className="joke">
        <div className="joke-icon">
          <img src={props.joke.icon_url} />
        </div>
        <div className="joke-info">
          <div className="joke-id">
            <span>ID:</span>
            <a href={props.joke.url} target="_blank">
              {props.joke.id}
            </a>
          </div>
          <div className="joke-content">{props.joke.value}</div>
          <div className="joke-data">
            <div className="joke-update">
              Last update:
              {Math.abs(
                moment(props.joke.updated_at, "YYYY-MM-DD h:mm:ss").diff(
                  Date.now(),
                  "hours"
                )
              )}{" "}
              hours ago
            </div>
            <div className="joke-category">
              {props.joke.categories.length > 0
                ? props.joke.categories[0]
                : "NO CATEGORY"}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Article;
