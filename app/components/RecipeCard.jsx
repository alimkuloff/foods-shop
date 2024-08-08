import React from 'react';

function RecipeCard({ recipe }) {
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span  key={i} className="text-yellow-500 text-[30px]">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300 text-[30px]">★</span>);
      }
    }
    return stars;
  };

  return (
    <div className="recipe-card border rounded p-8 shadow-md">
      <img className="w-[200px] rounded-full" src={recipe.image} alt={recipe.name} />
      <h2 className="text-center mt-[180px] text-xl font-bold">{recipe.name}</h2>
      <p className="mt-2 min-h-[140px]"><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
      <div className="rating flex justify-center mt-2">
        {renderRating(recipe.rating)}
      </div>
      <b className="text-xl font-medium mt-2">${recipe.prepTimeMinutes}</b>
    </div>
  );
}

export default RecipeCard;
