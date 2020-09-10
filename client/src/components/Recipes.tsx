import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';

interface Props {
  recipes?: api.Recipe[];
}

function Recipes({ recipes }: Props) {
  return (
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
              <p>
                {
                  recipe.tags.map((tag) => (
                    <React.Fragment key={tag.id}>
                      <Link to={`/tags/${tag.id}`}>#{tag.name}</Link>
                      {" "}
                    </React.Fragment>
                  ))
                }
              </p>
            </dd>
          </React.Fragment>
        ))
      }
    </dl>
  );
}

export default Recipes;
