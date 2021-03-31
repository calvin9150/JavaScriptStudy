import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>i like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

const foodLike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://img.hankyung.com/photo/201910/01.20660060.1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "galbi",
    image:
      "https://homecuisine.co.kr/files/attach/images/140/519/096/3f4c87159f02e10a302861d0e847d86a.JPG",
    rating: 4.6,
  },
];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

function App() {
  return (
    <div>
      <h1>Hi</h1>
      {foodLike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
