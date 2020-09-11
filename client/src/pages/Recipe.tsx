import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import * as api from '../api';

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params> {}

function Recipe({ match }: Props) {
  const [recipe, setRecipe] = useState<api.Recipe>();
  useEffect(() => {
    (async () => {
      const recipe = await api.getRecipe(match.params.id);
      setRecipe(recipe);
    })();
  }, [match.params.id]);

  return (
    <div className="content">
      <h1>{recipe?.title}</h1>
      <p>
        {
          recipe?.tags.map((tag) => (
            <React.Fragment key={tag.id}>
              <Link to={`/tags/${tag.id}`} className="tag">#{tag.name}</Link>
              {" "}
            </React.Fragment>
          ))
        }
      </p>
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
