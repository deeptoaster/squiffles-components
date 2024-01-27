import * as React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useEffect, useRef } from 'react';

import { ERROR_DURATION, TRANSITION_DURATION } from './defs';

import './Footer.css';

export default function Footer(props: {
  children: React.ReactNode;
  error: Error | null;
  setError: (error: Error | null) => void;
  visible: boolean;
}): JSX.Element {
  const { children, error, setError, visible } = props;
  const errorTimeout = useRef<number>();

  useEffect((): void => {
    if (error != null) {
      window.clearTimeout(errorTimeout.current);

      errorTimeout.current = window.setTimeout(
        () => setError(null),
        ERROR_DURATION
      );
    }
  }, [error, setError]);

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
