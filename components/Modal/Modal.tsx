import React from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '../../exports/exports';

interface Backdrop {
  onConfirm: () => void;
}
interface ModalOverlay {
  onConfirm: () => void;
  title: string;
  children: React.ReactNode;
}

type Props = {
  onConfirm: () => void;
  title: string;
  children: React.ReactNode;
};

const Backdrop = (props: Backdrop) => {
  return (
    <motion.div
      className="modal-backdrop"
      onClick={props.onConfirm}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
    />
  );
};

const ModalOverlay = (props: ModalOverlay) => {
  return (
    <AnimatePresence>
      <motion.div
        className="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          ease: 'easeIn',
        }}
      >
        <header className="modal__header">
          <button className="modal__close" onClick={props.onConfirm}>
            &times;
          </button>
          <h2>{props.title}</h2>
        </header>

        <div className="modal__content">
          <main>{props.children}</main>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const Modal: React.FC<Props> = props => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} onConfirm={props.onConfirm}>
          {props.children}
        </ModalOverlay>,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </React.Fragment>
  );
};

export default React.memo(Modal);
