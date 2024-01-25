import { MouseEvent, ReactNode } from 'react';

type ButtonClickableProps = CommonButtonClickableProps &
  (NonsubmitButtonClickableProps | SubmitButtonClickableProps);

type CommonButtonClickableProps = {
  readonly onClick?: (event: MouseEvent) => void;
};

export type ClickableProps = ButtonClickableProps | LinkClickableProps;

type LinkClickableProps = {
  readonly children?: ReactNode;
  readonly download?: string;
  readonly external?: boolean;
  readonly href: string;
  readonly onClick?: (event: MouseEvent) => void;
};

type NonsubmitButtonClickableProps = {
  readonly children: ReactNode;
  readonly isSubmit?: false;
};

export type SpreadableClickableProps = Partial<
  ButtonClickableProps & LinkClickableProps
>;

type SubmitButtonClickableProps = {
  children: string;
  isSubmit: true;
};
