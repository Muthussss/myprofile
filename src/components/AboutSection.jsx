import React from 'react';
import { Code2, Layout, Terminal, Cpu, Globe, Smartphone, Sparkles } from 'lucide-react';

export default function AboutSection({ t, language }) {
  const skills = [
    { name: t.skills.html, icon: <Code2 size={16} /> },
    { name: t.skills.css, icon: <Layout size={16} /> },
    { name: t.skills.js, icon: <Terminal size={16} /> },
    { name: t.skills.react, icon: <Cpu size={16} /> },
    { name: t.skills.wp, icon: <Globe size={16} /> },
    { name: t.skills.responsive, icon: <Smartphone size={16} /> },
    { name: t.skills.ui, icon: <Sparkles size={16} /> }
  ];

  return (
    <section className="section" id="about">
      <div className="section-header">
        <span className="section-subtitle">{t.subtitle}</span>
        <h2 className="section-title">{t.title}</h2>
      </div>

      <div className="about-grid">
        <div className="about-image-card">
          <img
            src="/images/about_developer.png"
            alt="Front-End Developer Working"
            className="about-image"
          />
          <div className="about-experience-badge">
            <span className="exp-num">{t.experienceVal}</span>
            <span className="exp-text" style={{ whiteSpace: 'pre-line' }}>
              {t.experienceText}
            </span>
          </div>
        </div>

        <div className="about-content">
          <h3>{t.heading}</h3>
          <p>{t.p1}</p>
          <p>{t.p2}</p>

          <div className="skills-wrapper">
            <h4 className="skills-title">{t.skillsTitle}</h4>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
