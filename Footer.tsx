import * as React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { TRANSITION_DURATION } from './defs';

import './Footer.css';

export default function Footer(props: {
  children: React.ReactNode;
  error?: Error | null;
  visible?: boolean;
}): JSX.Element {
  const { children, error = null, visible = true } = props;

  return (
    <TransitionGroup component={null}>
      {error != null ? (
        <CSSTransition
          classNames="error"
          key="error"
          timeout={TRANSITION_DURATION.exit}
        >
          <p className="error">{error.message}</p>
        </CSSTransition>
      ) : null}
      {visible ? (
        <CSSTransition
          classNames="stage"
          key="pager"
          timeout={TRANSITION_DURATION.exit}
        >
          <footer>{children}</footer>
        </CSSTransition>
      ) : null}
    </TransitionGroup>
  );
}
