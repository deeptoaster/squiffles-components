import * as React from 'react';

import './Card.css';

export default function Card(props: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  const { children, className } = props;

  return <article className={className}>{children}</article>;
}
