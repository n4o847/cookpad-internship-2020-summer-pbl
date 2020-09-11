import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Recipes from '../components/Recipes';
import * as api from '../api';

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params> {}

function User({ match }: Props) {
  const [user, setUser] = useState<api.UserWithRecipes>();
  useEffect(() => {
    (async () => {
      const user = await api.getUser(match.params.id);
      setUser(user);
    })();
  }, [match.params.id]);

  return (
    <div className="content">
      <h1>{user?.name}</h1>
      <p>
        {
          user?.tags.map((tag) => (
            <React.Fragment key={tag.id}>
              <Link to={`/tags/${tag.id}`} className="tag">#{tag.name}</Link>
              {" "}
            </React.Fragment>
          ))
        }
      </p>
      <Recipes recipes={user?.recipes} />
    </div>
  );
}

export default User;
