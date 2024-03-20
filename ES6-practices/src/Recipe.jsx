const Recipe = ({ recipe, handleCookBtn }) => {
  return (
    <div>
      <div className="w-96 border border-solid border-[#89373621] p-6 rounded-xl h-[600px]">
        <img
          className="w-96 rounded-xl h-[200px]"
          src={recipe.recipe_image}
          alt=""
        />
        <h3 className="text-[20px] font-semibold text-[#282828]">
          {recipe.recipe_name}
        </h3>
        <p className="text-[#878787] font font-normal">
          {recipe.short_description}
        </p>
        <hr />
        <h4>Ingredients: </h4>
        <ul className="font text-[#878787] text-[18px]">
          <li>{recipe.ingredients[0]} </li>
          <li>{recipe.ingredients[1]}</li>
          <li>{recipe.ingredients[2]}</li>
          <li>{recipe.ingredients[3]}</li>
        </ul>
        <hr />
        <div className="flex items-center gap-20">
          <div className="flex items-center gap-2">
            <div>
              <img className="w-5" src="/images/icons8-time-32.png" alt="" />
            </div>
            <p className="text-[#282828CC]">{recipe.preparing_time}</p>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <img
                className="w-5"
                src="/images/icons8-burn-calories-64.png"
                alt=""
              />
            </div>
            <p className="text-[#282828CC]">{recipe.calories}</p>
          </div>
        </div>
        <button
          onClick={() => handleCookBtn(recipe)}
          className="bg-[#0BE58A] text-black rounded-3xl border-none py-4 px-6 font-extrabold cursor-pointer hover:bg-slate-200 hover:text-black mt-2"
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
};

export default Recipe;
