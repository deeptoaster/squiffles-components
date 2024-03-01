import * as React from 'react';

import './Tooltip.css';

export default function Tooltip(props: {
  children: React.ReactNode;
  message: string;
}): JSX.Element {
  const { children, message } = props;

  return (
    <div className="tooltip">
      {children}
      <span className="tooltip-message">{message}</span>
    </div>
  );
}
