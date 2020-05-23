export const actualApi = (type, category, search) => {
  if (type === "random") {
    return "https://api.chucknorris.io/jokes/random";
  } else if (type === "caterogies") {
    return `https://api.chucknorris.io/jokes/random?category=${category}`;
  } else {
    return `https://api.chucknorris.io/jokes/search?query=${search}`;
  }
};

export const disabledButton = (checkedVariantJoke, selectCategory, search) => {
  if (checkedVariantJoke === "caterogies" && selectCategory) {
    return false;
  } else if (checkedVariantJoke === `search` && search.length > 3) {
    return false;
  } else if (checkedVariantJoke === "random") {
    return false;
  } else {
    return true;
  }
};
