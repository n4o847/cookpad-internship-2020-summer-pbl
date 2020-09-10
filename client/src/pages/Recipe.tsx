import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import * as api from '../api';

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params> {}

function Recipe({ match }: Props) {
  const [recipe, setRecipe] = useState<api.Recipe | null>(null);
  useEffect(() => {
    (async () => {
      const recipe = await api.getRecipe(match.params.id);
      setRecipe(recipe);
    })();
  }, [match.params.id]);

  return (
    <div>
      <h1>{recipe?.title}</h1>
      <p>{recipe?.description}</p>
      <p>
        {' by '}
        <Link to={`/users/${recipe?.user.id}`}>{recipe?.user.name}</Link>
      </p>
      {typeof recipe?.image_id === 'number' && (
        <img
          src={`//localhost:3001/api/images/${recipe.image_id}`}
          alt={recipe.title}
          className="recipe-image"
        />
      )}
    </div>
  );
}

export default Recipe;
