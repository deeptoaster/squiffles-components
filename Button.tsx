import * as React from 'react';
import { useMemo } from 'react';

import classNames from 'classnames';

import type { ClickableProps, SpreadableClickableProps } from './types';

import './Button.css';

type OtherButtonProps = {
  disabled?: boolean;
  hidden?: boolean;
  variant?: 'add' | 'close' | 'default' | 'primary' | 'stub';
};

export default function Button(
  props: ClickableProps & OtherButtonProps
): JSX.Element {
  const {
    children,
    disabled = false,
    download,
    external = false,
    hidden = false,
    href,
    isSubmit = false,
    onClick,
    variant = 'default'
  } = props as OtherButtonProps & SpreadableClickableProps;

  const classNameMap = useMemo(
    (): Record<string, boolean> => ({
      'button-stub': variant === 'add' || variant === 'close',
      'button-symbolic': variant === 'add' || variant === 'close',
      disabled,
      hidden,
      [`button-${variant}`]: variant !== 'default'
    }),
    [hidden, disabled, variant]
  );

  return href != null ? (
    <a
      className={classNames('button', classNameMap)}
      download={download}
      href={disabled ? undefined : href}
      onClick={disabled ? undefined : onClick}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {children}
    </a>
  ) : isSubmit ? (
    <input
      className={classNames('button', classNameMap)}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      type="submit"
      value={children as string}
    />
  ) : (
    <button
      className={classNames(classNameMap)}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      type="button"
    >
      {children}
    </button>
  );
}
