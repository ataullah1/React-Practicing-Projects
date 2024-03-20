import { useEffect } from 'react';
import './App.css';

import { useState } from 'react';

// toast
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Recipe from './Recipe';

function App(recipe) {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch('recipes.json')
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  });
  const [cook, setCook] = useState([]);
  const handleCookBtn = (recipe) => {
    setCook([...cook, recipe]);
  };
  console.log(cook);

  // const handlePrepear =(id)=>{
  //     const newCart = cook.filter(recipe =>recipe.id != id)
  //     setCook(newCart);
  // }
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center gap-5 flex-wrap">
          {recipes.map((recipe, i) => (
            <Recipe
              key={i}
              recipe={recipe}
              handleCookBtn={handleCookBtn}
            ></Recipe>
          ))}
        </div>

        {/* <ToastContainer /> */}
        <div className="border border-solid border-[#89373621] py-6 rounded-xl w-[100%] text-center">
          <h3>Want to cook: {recipe.length}</h3>
          <div>
            <div className="flex justify-start gap-20 pl-16">
              <h4>Name</h4>
              <h4>Time</h4>
              <h4>Calories</h4>
            </div>
            <div className="bg-[#2828284a]">
              {cook.map((recipe, index) => (
                <div
                  className="flex items-center gap-10 m-auto w-[100%] justify-center"
                  key={index}
                >
                  <p>{index + 1}</p>
                  <p>{recipe.recipe_name}</p>
                  <p className="mr-5">{recipe.preparing_time}</p>
                  <p>{recipe.calories}</p>
                  <button className="mt-0 py-2 px-5 bg-[#0BE58A] text-black rounded-3xl border-none  font-extrabold cursor-pointer hover:bg-slate-200 hover:text-black">
                    Preparing
                  </button>
                </div>
              ))}
            </div>
          </div>
          <h3>Currently cooking:</h3>
          <div>
            <div className="flex justify-start gap-20 pl-16">
              <h4>Name</h4>
              <h4>Time</h4>
              <h4>Calories</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
