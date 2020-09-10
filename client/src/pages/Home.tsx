import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Recipes from '../components/Recipes';
import * as api from '../api';

function Home() {
  const [recipes, setRecipes] = useState<api.Recipe[]>();
  useEffect(() => {
    (async () => {
      const recipes = await api.getRecipes();
      setRecipes(recipes);
    })();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <Recipes recipes={recipes}/>
    </div>
  );
}

export default Home;
