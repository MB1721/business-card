import React from 'react';
import './LinkBox.css';
import discordIco from '@images/icons/discord.svg';
import githubIco from '@images/icons/github.svg';
import facebookIco from '@images/icons/facebook.svg';

// Separate component for rendering an icon
const IconFig = ({ icon, link }) => (
  <figure className="icon" key={icon}>
    <a href={link} target="_blank">
      <img src={icon} alt={icon} />
    </a>
  </figure>
);

export default function LinkBox() {
  const icons = [
    { icon: discordIco, link: 'https://discord.com/' },
    { icon: githubIco, link: 'https://github.com/MB1721/business-card' },
    { icon: facebookIco, link: 'https://www.facebook.com/masson.be.23' },
  ].map(({ icon, link }) => <IconFig icon={icon} link={link} key={link} />);

  return <footer className="link-box">{icons}</footer>;
}
