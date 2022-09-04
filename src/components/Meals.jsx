import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs";

const Meals = () => {
  const { loading, meal, selectMeal, addToFavorites } = useGlobalContext();

  if (loading === true) {
    return (
      <section className="section">
        <h4>Loading</h4>
      </section>
    );
  }
  if (meal.length < 1) {
    return (
      <section className="section">
        <h4>No items matched your search. Please try again</h4>
      </section>
    );
  }
  return (
    <section className="section-center">
      {meal.map((singleMeal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
        return (
          <article key={idMeal} className="single-meal">
            <img
              src={image}
              alt="/"
              className="img"
              onClick={() => selectMeal(idMeal)}
            ></img>
            <footer>
              <h4>{title}</h4>
              <button
                className="like-btn"
                onClick={() => addToFavorites(idMeal)}
              >
                <BsHandThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};
export default Meals;
