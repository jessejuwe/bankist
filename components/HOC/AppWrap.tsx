import React from 'react';
import NavigationDots from '../NavigationDots/NavigationDots';
import SocialMedia from '../SocialMedia/SocialMedia';

const AppWrap = (Component: React.FC, idName: string, classNames: string) =>
  function HOC(): JSX.Element {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@2022 Bankist</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
