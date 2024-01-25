import * as React from 'react';
import { useMemo } from 'react';

import classNames from 'classnames';

import { ClickableProps, SpreadableClickableProps } from './types';

import './Button.css';

type OtherButtonProps = {
  hidden?: boolean;
  variant?: 'add' | 'close' | 'default' | 'primary' | 'stub';
};

export default function Button(
  props: ClickableProps & OtherButtonProps
): JSX.Element {
  const {
    children,
    download,
    external = false,
    hidden = false,
    href,
    isSubmit = false,
    onClick,
    variant = 'default'
  } = props as OtherButtonProps & SpreadableClickableProps;

  const classNameMap = useMemo(
    (): { [className: string]: boolean } => ({
      'button-stub': variant === 'add' || variant === 'close',
      'button-symbolic': variant === 'add' || variant === 'close',
      hidden,
      [`button-${variant}`]: variant !== 'default'
    }),
    [hidden, variant]
  );

  return href != null ? (
    <a
      className={classNames('button', classNameMap)}
      download={download}
      href={href}
      onClick={onClick}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {children}
    </a>
  ) : isSubmit ? (
    <input
      className={classNames('button', classNameMap)}
      onClick={onClick}
      type="submit"
      value={children as string}
    />
  ) : (
    <button className={classNames(classNameMap)} onClick={onClick}>
      {children}
    </button>
  );
}
