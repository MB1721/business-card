import React from 'react';
import './Synopsis.css';
const skills = require.context('/src/assets/images/icons/skills/', false, /.svg$/);

export default function Synopsis() {

  const skillItems = skills.keys().map(path => {
      const title = path.replace('./', '').replace('.svg', '');
      return (
        <figure className="skills_item" key={path} title={title.replace('-js', '.js')}>
          <img src={skills(path)} alt={title}/>
        </figure>
      );
    }
  );

  return (
    <div className="synopsis">
      <section className="about">
        <h2>About</h2>
        <p>I am a full-stack web developer based in Pennsylvania. My passion for programming stems from a deep appreciation for systems and constant pursuit of challenges. I enjoy opportunities to craft innovative systems aimed at solving persistent issues or devising methodologies to address future occurrences in a sustainable manner.</p>
      </section>
      <section className="values">
        <h2>My Values</h2>
        <p>When I look for a company to work with, I am searching for someone with a strong identity, a clear purpose, and the determination to see their goals through. I promise to do the utmost to help your company realize its vision.</p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills_container">
          {skillItems}
        </div>
      </section>
    </div>
  );
}