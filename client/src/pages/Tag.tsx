import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import * as api from '../api';

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params> {}

function Tag({ match }: Props) {
  const [tag, setTag] = useState<api.DetailedTag | null>(null);
  useEffect(() => {
    (async () => {
      const tag = await api.getTag(match.params.id);
      setTag(tag);
    })();
  }, [match.params.id]);

  return (
    <div>
      <h1>#{tag?.name}</h1>
      <dl>
        {
          tag?.recipes.map((recipe) => (
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

export default Tag;
