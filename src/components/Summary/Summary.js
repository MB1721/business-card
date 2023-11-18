import React from 'react';
import './Summary.css';
import Abstract from '../Abstract/Abstract';
import Contact from '../Contact/Contact';
import Synopsis from '../Synopsis/Synopsis';

export default function Summary() {
  return (
    <main class="summary">
      <Abstract/>
      <Contact/>
      <Synopsis/>
    </main>
  );
}