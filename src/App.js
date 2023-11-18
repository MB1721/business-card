import React from 'react';
import './assets/styles/App.css';
import Profile from './components/Profile/Profile';
import Summary from './components/Summary/Summary';
import LinkBox from './components/LinkBox/LinkBox';

export default function App() {
  return (
    <div id="app">
      <Profile/>
      <Summary/>
      <LinkBox/>
    </div>
  );
}