import React, { useEffect, useState } from 'react';
import * as api from '../api';
import { Link } from 'react-router-dom';

function Home() {
  const [recipes, setRecipes] = useState<api.Recipe[] | null>(null);
  useEffect(() => {
    (async () => {
      const recipes = await api.getRecipes();
      setRecipes(recipes);
    })();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <dl>
        {
          recipes?.map((recipe) => (
            <React.Fragment key={recipe.id}>
              <dt><Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link></dt>
              <dd>{recipe.description}</dd>
            </React.Fragment>
          ))
        }
      </dl>
    </div>
  );
}

export default Home;
