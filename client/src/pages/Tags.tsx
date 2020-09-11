import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';

function Tags() {
  const [tags, setTags] = useState<api.Tag[]>();
  useEffect(() => {
    (async () => {
      const tags = await api.getTags();
      setTags(tags);
    })();
  }, []);
  return (
    <div className="content">
      <h1>見つける</h1>
      <dl>
        {
          tags?.map((tag) => (
            <React.Fragment key={tag.id}>
              <dt>
                <Link to={`/tags/${tag.id}`} className="tag">#{tag.name}</Link>
              </dt>
            </React.Fragment>
          ))
        }
      </dl>
    </div>
  );
}

export default Tags;
