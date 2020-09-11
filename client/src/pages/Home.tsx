import React, { useEffect, useState } from 'react';
import Recipes from '../components/Recipes';
import * as api from '../api';
import shuffle from 'lodash/shuffle';

function Home() {
  const [recipes, setRecipes] = useState<api.Recipe[]>();
  useEffect(() => {
    (async () => {
      let recipes = await api.getRecipes();
      recipes = shuffle(recipes);
      setRecipes(recipes);
    })();
  }, []);
  return (
    <div className="content">
      <h1>みんなのレシピ</h1>
      <Recipes recipes={recipes}/>
    </div>
  );
}

export default Home;
