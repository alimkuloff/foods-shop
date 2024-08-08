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
      <div className="rating flex gap-2 justify-center items-center mt-2">
        {renderRating(recipe.rating)}
        <p className="text-xl font-bold text-yellow-700">{recipe.rating}</p>
      </div>
      <div className="flex gap-2 justify-center items-center mt-2">
      <b className="text-xl font-medium mt-2 mr-20">${recipe.prepTimeMinutes}</b>
      <button className="bg-black hover:bg-gray-700 text-white text-[30px] px-4 py-1 rounded-[50%]">+</button>
      </div>
    </div>
  );
}

export default RecipeCard;
