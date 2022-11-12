import React, { useState } from 'react';

import { Modal, Form } from '../../exports/exports';
import AppWrap from '../../components/HOC/AppWrap';
import MotionWrap from '../../components/HOC/MotionWrap';

const OpenAccount: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <>
      {showModal && (
        <Modal
          title="Open an account with us in just 5 minutes"
          onConfirm={closeModalHandler}
        >
          <Form />
        </Modal>
      )}
      <section className="section section--sign-up">
        <div className="section__title">
          <h3 className="section__header">
            The best day to join Bankist was one year ago. Join us today!
          </h3>
        </div>
        <button className="app__btn btn--show-modal" onClick={openModalHandler}>
          Open your free account today!
        </button>
      </section>
    </>
  );
};

// prettier-ignore
export default AppWrap(MotionWrap(OpenAccount, 'app__openAccount'), 'open-account', 'app__bg');
