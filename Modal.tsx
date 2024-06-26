import * as React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames';

import Button from './Button';
import { TRANSITION_DURATION } from './defs';

import './Modal.css';

type ModalAction = {
  label: string;
  onClick: () => void;
};

export default function Modal(props: {
  actions: ReadonlyArray<ModalAction>;
  centered?: boolean;
  children: React.ReactNode;
  visible: boolean;
}): JSX.Element {
  const { actions, centered = false, children, visible } = props;

  return (
    <TransitionGroup component={null}>
      {visible ? (
        <CSSTransition classNames="overlay" timeout={TRANSITION_DURATION.exit}>
          <aside className={classNames({ 'modal-centered': centered })}>
            {children}
            <div className="modal-actions">
              {actions.map(
                ({ label, onClick }: ModalAction): JSX.Element => (
                  <Button key={label} onClick={onClick} variant="stub">
                    {label}
                  </Button>
                )
              )}
            </div>
          </aside>
        </CSSTransition>
      ) : null}
    </TransitionGroup>
  );
}
