import * as React from 'react';

import { ClickableProps, SpreadableClickableProps } from './types';

import './Link.css';

export default function Link(props: ClickableProps): JSX.Element {
  const {
    children,
    download,
    external = false,
    isSubmit = false,
    href,
    onClick
  } = props as SpreadableClickableProps;

  return href != null ? (
    <a
      download={download}
      href={href}
      onClick={onClick}
      rel={external ? 'noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {children}
    </a>
  ) : isSubmit ? (
    <input onClick={onClick} type="submit" value={children as string} />
  ) : (
    <button className="button-link" onClick={onClick}>
      {children}
    </button>
  );
}
