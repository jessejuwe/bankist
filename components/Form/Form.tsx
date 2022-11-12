import React from 'react';

const Form: React.FC = () => {
  return (
    <form className="modal__form">
      <label>First Name</label>
      <input type="text" />
      <label>Last Name</label>
      <input type="text" />
      <label>Email Address</label>
      <input type="email" />
      <button className="app__btn">Next step &rarr;</button>
    </form>
  );
};

export default Form;
