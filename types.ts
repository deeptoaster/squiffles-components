import type { MouseEvent, ReactNode } from 'react';

export type ClickableProps =
  | LinkClickableProps
  | NonsubmitButtonClickableProps
  | SubmitButtonClickableProps;

type LinkClickableProps = {
  readonly children?: ReactNode;
  readonly download?: string;
  readonly external?: boolean;
  readonly href: string;
  readonly onClick?: (event: MouseEvent) => void;
};

type NonsubmitButtonClickableProps = {
  readonly children?: ReactNode;
  readonly isSubmit?: false;
  readonly onClick?: (event: MouseEvent) => void;
};

export type SpreadableClickableProps = Partial<
  LinkClickableProps &
    (NonsubmitButtonClickableProps | SubmitButtonClickableProps)
>;

type SubmitButtonClickableProps = {
  readonly children: string;
  readonly isSubmit: true;
  readonly onClick?: (event: MouseEvent) => void;
};
