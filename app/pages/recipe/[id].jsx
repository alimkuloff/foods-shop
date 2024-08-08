import { useRouter } from 'next/router';

async function fetchRecipe(id) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  const data = await res.json();
  return data;
}

export async function getStaticPaths() {
  const res = await fetch('https://dummyjson.com/recipes');
  const data = await res.json();
  const paths = data.recipes.map((recipe) => ({
    params: { id: recipe.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const recipe = await fetchRecipe(params.id);

  return {
    props: {
      recipe,
    },
  };
}

export default function RecipePage({ recipe }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="my-4 w-full h-auto" />
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
      <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
      <div className="rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={index < recipe.rating ? 'text-yellow-500' : 'text-gray-300'}>★</span>
        ))}
      </div>
    </div>
  );
}
