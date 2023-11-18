import React from 'react';
import './LinkBox.css';
import discordIco from '@images/icons/discord.svg';
import githubIco from '@images/icons/github.svg';
import facebookIco from '@images/icons/facebook.svg';

export default function LinkBox() {
  return (
    <footer className="link-box">
      <figure className="icon">
        <img src={discordIco}/>
      </figure>
      <figure className="icon">
        <img src={githubIco}/>
      </figure>
      <figure className="icon">
        <img src={facebookIco}/>
      </figure>
    </footer>
  );
}