import * as React from 'react';
import classNames from 'classnames';

import './Card.css';

export default function Card(props: {
  children: React.ReactNode;
  padded?: boolean;
  width?: 20 | 30 | 40 | null;
}): JSX.Element {
  const { children, padded = true, width = null } = props;

  return (
    <article
      className={classNames({
        'card-no-padding': !padded,
        'card-width-20': width === 20,
        'card-width-30': width === 30,
        'card-width-40': width === 40
      })}
    >
      {children}
    </article>
  );
}
