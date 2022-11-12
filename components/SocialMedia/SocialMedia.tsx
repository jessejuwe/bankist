import React from 'react';
import {
  InstagramFilled,
  TwitterCircleFilled,
  GithubFilled,
  LinkedinFilled,
} from '@ant-design/icons';

type Props = {};

const SocialMedia = (props: Props) => {
  return (
    <div className="app__social">
      <div>
        <a href="//twitter.com/iktheenigma" target="_blank" rel="noreferrer">
          <TwitterCircleFilled />
        </a>
      </div>
      <div>
        <a href="//instagram.com/iktheenigma" target="_blank" rel="noreferrer">
          <InstagramFilled />
        </a>
      </div>
      <div>
        <a href="//github.com/jessejuwe" target="_blank" rel="noreferrer">
          <GithubFilled />
        </a>
      </div>
      <div>
        <a href="//linkedin.com/in/juwejesse" target="_blank" rel="noreferrer">
          <LinkedinFilled />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
