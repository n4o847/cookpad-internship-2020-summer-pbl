import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
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
    </div>
  );
}

export default Recipe;
