import { GrHome } from "react-icons/gr";
import RecipeCard from "./components/RecipeCard";
import Link from "next/link";

async function fetchRecipes() {
  const res = await fetch('https://dummyjson.com/recipes');
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  const data = await res.json();
  return data.recipes;
}

export default async function Home() {
  const recipes = await fetchRecipes();

  return (
    <main className="bg-[#E6E3E3]">
      <div className="container">
        <div className="wrapper flex justify-center">
          <div className="sider max-w-[126px] w-full flex flex-col items-center  gap-[120px] bg-[#ffffff57] ">
            <img className="mt-12" src="o.svg" alt="" />
            <div className="routes flex items-center flex-col gap-[40px]">
              <Link href="/">
                <GrHome className="text-2xl text-[#525252]" />
              </Link>
              <Link href="/page1">
                <img src="2.svg" alt="" />
              </Link>
              <Link href="/page2">
                <img src="3.svg" alt="" />
              </Link>
              <Link href="/page3">
                <img src="4.svg" alt="" />
              </Link>
              <Link href="/page4">
                <img src="5.svg" alt="" />
              </Link>
              <Link href="/page5">
                <img src="6.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="content ml-[42px]">
            <div className="flex items-center mt-[20px]">
              <div className="hero-text mr-[300px]">
                <h2 className="flex">
                  Welcome, Ali <img src="hand.svg" alt="" />
                </h2>
                <p>Discover whatever you need</p>
              </div>
              <div>
                <input
                  className="bg-[#f8f1f1a5] w-[300px] h-[46px]"
                  type="text"
                  placeholder=" Search"
                />
              </div>
            </div>
            <div className="header flex items-center justify-between h-[278px]">
              <div className="max-w-[440px] ml-[65px]">
                <h2 className="hero-title">
                  It’s not just Food, it’s an Experience{" "}
                </h2>
                <p>Order Your Favourite food & enjoy your day</p>
              </div>
              <img className="max-w-[500px]" src="image.png" alt="" />
            </div>
            <div className="flex items-center justify-between mt-[32px] w-full">
              <div className="category">
                <img src="nod.svg" alt="" />
                <p>Noodles</p>
              </div>
              <div className="category">
                <img src="burger.svg" alt="" />
                <p>Burger</p>
              </div>
              <div className="category">
                <img src="drink.svg" alt="" />
                <p>Drink</p>
              </div>
              <div className="category">
                <img src="desert.svg" alt="" />
                <p>Desert</p>
              </div>
            </div>
            <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-11">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
