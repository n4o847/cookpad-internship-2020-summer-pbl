import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';

interface Props {
  recipes?: api.Recipe[];
  keyTag?: api.Tag;
}

function Recipes({ recipes, keyTag }: Props) {
  return (
    <div className="recipe-list">
      {
        recipes?.map((recipe) => (
          <dl
            key={recipe.id}
            className={['recipe-item', ...(keyTag && recipe.tags.some(({ id }) => id === keyTag.id) ? ['recipe-item-tagged'] : [])].join(' ')}
          >
            <dt>
              <Link to={`/recipes/${recipe.id}`} className="recipe-title">{recipe.title}</Link>
              {' by '}
              <Link to={`/users/${recipe.user.id}`}>{recipe.user.name}</Link>
            </dt>
            <dd>
              <p>{recipe.description}</p>
              {typeof recipe.image_id === 'number' && (
                <Link to={`/recipes/${recipe.id}`}>
                  <img
                    src={`//localhost:3001/api/images/${recipe.image_id}`}
                    alt={recipe.title}
                    className="recipe-image"
                  />
                </Link>
              )}
              <p>
                {
                  recipe.tags.map((tag) => (
                    <React.Fragment key={tag.id}>
                      <Link
                        to={`/tags/${tag.id}`}
                        className={['tag', ...(keyTag && tag.id === keyTag.id ? ['key-tag'] : [])].join(' ')}
                      >
                        #{tag.name}
                      </Link>
                      {" "}
                    </React.Fragment>
                  ))
                }
              </p>
            </dd>
          </dl>
        ))
      }
    </div>
  );
}

export default Recipes;
