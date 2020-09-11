import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Recipes from '../components/Recipes';
import * as api from '../api';

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params> {}

function Tag({ match }: Props) {
  const [tag, setTag] = useState<api.TagWithUsersAndRecipes>();
  useEffect(() => {
    (async () => {
      const tag = await api.getTag(match.params.id);
      setTag(tag);
    })();
  }, [match.params.id]);

  return (
    <div className="content">
      <h1>#{tag?.name}</h1>
      <p>#{tag?.name} を持っているユーザのレシピ</p>
      <Recipes recipes={tag?.recipes} keyTag={tag}/>
    </div>
  );
}

export default Tag;
