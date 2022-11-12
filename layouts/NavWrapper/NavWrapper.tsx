import React from 'react';

import { Nav, Footer } from '../../exports/exports';

type Props = { children: React.ReactNode };

const NavWrapper = (props: Props) => {
  return (
    <div className="app">
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default NavWrapper;
