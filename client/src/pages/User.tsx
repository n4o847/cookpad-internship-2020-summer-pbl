import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as api from '../api';

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params> {}

function User({ match }: Props) {
  const [user, setUser] = useState<api.User | null>(null);
  useEffect(() => {
    (async () => {
      const user = await api.getUser(match.params.id);
      setUser(user);
    })();
  }, [match.params.id]);

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>
        {
          user?.tags.map((tag) => (
            <React.Fragment key={tag.id}>
              <span>#{tag.name}</span>
              {" "}
            </React.Fragment>
          ))
        }
      </p>
    </div>
  );
}

export default User;
