import React from 'react';
import './Profile.css';
import profileImg from '@images/profile.jpg';

export default function Profile() {
  return (
    <figure className="profile">
      <img src={profileImg} alt='Mason Bennett'/>
    </figure>
  );
}