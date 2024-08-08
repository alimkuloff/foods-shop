import React from 'react';
import Link from 'next/link';

function RecipeCard({ recipe }) {
  // Yulduzchalarni ko'rsatish uchun funksiya
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    return stars;
  };

  return (
    <Link href={`/recipe/${recipe.id}`}>
      <div className="recipe-card border rounded p-4 shadow-md cursor-pointer">
        <div className="image flex justify-center">
          <img className="w-[150px] rounded-full" src={recipe.image} alt={recipe.name} />
        </div>
        <h2 className="text-center mt-4 text-xl font-bold">{recipe.name}</h2>
        <p className="mt-2"><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
        <div className="rating flex justify-center mt-2">
          {renderRating(recipe.rating)}
        </div>
        <b className="text-xl font-medium mt-2">${recipe.cookTimeMinutes}</b>
      </div>
    </Link>
  );
}

export default RecipeCard;
