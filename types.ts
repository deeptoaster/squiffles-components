import { MouseEvent, ReactNode } from 'react';

type ButtonClickableProps = {
  readonly onClick: (event: MouseEvent) => void;
};

export type ClickableProps = CommonClickableProps &
  (ButtonClickableProps | LinkClickableProps);

type CommonClickableProps = {
  readonly children?: ReactNode;
};

type LinkClickableProps = {
  readonly download?: string;
  readonly external?: boolean;
  readonly href: string;
  readonly onClick?: (event: MouseEvent) => void;
};

export type SpreadableClickableProps = CommonClickableProps &
  Partial<ButtonClickableProps & LinkClickableProps>;
