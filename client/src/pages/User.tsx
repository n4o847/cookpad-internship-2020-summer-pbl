import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface User {
  id: number;
  name: string;
}

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params> {}

function User({ match }: Props) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    (async () => {
      console.log(`Fetching /api/users/${match.params.id}`);
      const response = await fetch(`//localhost:3001/api/users/${match.params.id}`);
      const user = await response.json();
      console.log(user);
      setUser(user);
    })();
  }, [match.params.id]);

  return (
    <div>
      <h1>{user?.name}</h1>
    </div>
  );
}

export default User;
