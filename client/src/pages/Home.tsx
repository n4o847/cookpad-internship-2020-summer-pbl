import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';

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
              <dt>
                <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                {' by '}
                <Link to={`/users/${recipe.user.id}`}>{recipe.user.name}</Link>
              </dt>
              <dd>
                <p>{recipe.description}</p>
                {typeof recipe.image_id === 'number' && (
                  <img
                    src={`//localhost:3001/api/images/${recipe.image_id}`}
                    alt={recipe.title}
                    className="recipe-image"
                  />
                )}
              </dd>
            </React.Fragment>
          ))
        }
      </dl>
    </div>
  );
}

export default Home;
