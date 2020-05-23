import React, { useEffect, useState } from "react";

import Section from "../../components/Section/Section";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

import { actualApi } from "../../helpers";

import "../../assets/css/style.css";

function App() {
  const [jokes, setJokes] = useState([]);

  const [categories, setCategories] = useState([]);

  const [favoriteJokes, setFavoriteJokes] = useState([]);

  const [checkedVariantJoke, setCheckedVariantJoke] = useState(null);

  const [selectCategory, setSelectCategory] = useState(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const localFavoriteJokes = JSON.parse(
      localStorage.getItem("jsonFavoriteJokes")
    );
    setFavoriteJokes(localFavoriteJokes);
    getCategories();
  }, []);

  useEffect(() => {
    localStorage.setItem("jsonFavoriteJokes", JSON.stringify(favoriteJokes));
  }, [favoriteJokes]);

  const getJokes = async () => {
    try {
      let response = await fetch(
        actualApi(checkedVariantJoke, selectCategory, search)
      );

      let jokesFetch = await response.json();

      if (checkedVariantJoke === `search`) {
        setJokes([...jokes, ...jokesFetch.result]);
      } else {
        setJokes([...jokes, jokesFetch]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      let response = await fetch("https://api.chucknorris.io/jokes/categories");

      let categoriesFetch = await response.json();

      setCategories(categoriesFetch);
    } catch (error) {
      console.log(error);
    }
  };

  const addJoke = (event) => {
    event.preventDefault();
    getJokes();
  };

  const onChecked = (type) => {
    setCheckedVariantJoke(type);
  };

  const handelFavoriteJokes = (joke) => {
    if (favoriteJokes.length === 0) {
      setFavoriteJokes([...favoriteJokes, { ...joke, like: true }]);
    } else {
      if (favoriteJokes.every((item) => item.id !== joke.id)) {
        setFavoriteJokes([...favoriteJokes, { ...joke, like: true }]);
      }
    }
    const updateJoke = jokes.map((item) => {
      if (item.id === joke.id) {
        return {
          ...item,
          like: true,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setJokes(updateJoke);
  };

  const deleteFavoriteJokes = (joke) => {
    let newFavoriteJokes = favoriteJokes.filter((item) => item.id !== joke.id);
    setFavoriteJokes(newFavoriteJokes);

    const updateJoke = jokes.map((item) => {
      if (item.id === joke.id) {
        return {
          ...item,
          like: false,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setJokes(updateJoke);
  };

  return (
    <div className="container-fluid">
      <div className="content">
        <Header />
        <Main
          addJoke={addJoke}
          onChecked={onChecked}
          checkedVariantJoke={checkedVariantJoke}
          setSelectCategory={setSelectCategory}
          selectCategory={selectCategory}
          setSearch={setSearch}
          search={search}
          categories={categories}
        />
        <Section data={jokes} handelFavoriteJokes={handelFavoriteJokes} />
      </div>

      <Aside data={favoriteJokes} deleteFavoriteJokes={deleteFavoriteJokes} />
    </div>
  );
}

export default App;
