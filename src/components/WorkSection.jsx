import React, { useState } from 'react';
import { ExternalLink, Eye, X, ArrowRight } from 'lucide-react';

export default function WorkSection({ t, language }) {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { key: 'All', label: t.categories.all },
    { key: 'React Projects', label: t.categories.react },
    { key: 'JavaScript Applications', label: t.categories.js },
    { key: 'HTML/CSS Websites', label: t.categories.html },
    { key: 'WordPress Websites', label: t.categories.wp },
    { key: 'UI/UX Front-End Designs', label: t.categories.ui }
  ];

  const projects = [
    {
      id: 1,
      title: t.projects.zenith.title,
      category: "React Projects",
      categoryLabel: t.categories.react,
      description: t.projects.zenith.description,
      longDescription: t.projects.zenith.longDescription,
      image: "/images/hero_banner_three.png",
      tech: ["React", "CSS3", "Vite", "Lucide Icons"],
      demoLink: "https://zenith-dashboard-demo.netlify.app",
      githubLink: "https://github.com/muthudev/zenith-dashboard"
    },
    {
      id: 2,
      title: t.projects.nova.title,
      category: "HTML/CSS Websites",
      categoryLabel: t.categories.html,
      description: t.projects.nova.description,
      longDescription: t.projects.nova.longDescription,
      image: "/images/hero_banner_two.png",
      tech: ["HTML5", "CSS3", "Responsive Design", "Flexbox"],
      demoLink: "https://nova-fashion-demo.netlify.app",
      githubLink: "https://github.com/muthudev/nova-ecommerce"
    },
    {
      id: 3,
      title: t.projects.taskflow.title,
      category: "JavaScript Applications",
      categoryLabel: t.categories.js,
      description: t.projects.taskflow.description,
      longDescription: t.projects.taskflow.longDescription,
      image: "/images/hero_banner_one.png",
      tech: ["JavaScript (ES6)", "HTML5", "CSS Grid", "LocalStorage"],
      demoLink: "https://taskflow-app-demo.netlify.app",
      githubLink: "https://github.com/muthudev/taskflow"
    },
    {
      id: 4,
      title: t.projects.apex.title,
      category: "WordPress Websites",
      categoryLabel: t.categories.wp,
      description: t.projects.apex.description,
      longDescription: t.projects.apex.longDescription,
      image: "/images/about_developer.png",
      tech: ["WordPress", "PHP", "theme.json", "CSS Grid"],
      demoLink: "https://apex-studio-demo.wp",
      githubLink: "https://github.com/muthudev/apex-wp-theme"
    },
    {
      id: 5,
      title: t.projects.vivid.title,
      category: "UI/UX Front-End Designs",
      categoryLabel: t.categories.ui,
      description: t.projects.vivid.description,
      longDescription: t.projects.vivid.longDescription,
      image: "/images/hero_banner_two.png",
      tech: ["React", "CSS Transitions", "Figma Design", "Mobile First"],
      demoLink: "https://vivid-agency-demo.netlify.app",
      githubLink: "https://github.com/muthudev/vivid-portfolio"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="section" id="work">
      <div className="section-header">
        <span className="section-subtitle">{t.subtitle}</span>
        <h2 className="section-title">{t.title}</h2>
      </div>

      {/* Filter Tabs */}
      <div className="work-filters">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`filter-btn ${filter === cat.key ? 'active' : ''}`}
            onClick={() => setFilter(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <div className="card-img-wrapper" onClick={() => setSelectedProject(project)}>
              <img
                src={project.image}
                alt={project.title}
                className="card-img"
              />
              <div className="card-overlay">
                <span className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>
                  <Eye size={16} style={{ marginInlineEnd: '6px' }} />
                  {t.buttons.viewDetails}
                </span>
              </div>
            </div>
            <div className="card-body">
              <span className="project-category">{project.categoryLabel}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
              <button 
                className="card-btn"
                onClick={() => setSelectedProject(project)}
              >
                {t.buttons.viewProject}
                <ArrowRight size={14} style={{ transform: language === 'ar' ? 'rotate(180deg)' : 'none', transition: 'transform var(--transition-fast)' }} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className={`modal-overlay ${selectedProject ? 'active' : ''}`} onClick={() => setSelectedProject(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <X size={20} />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <div className="modal-content">
              <span className="modal-category">{selectedProject.categoryLabel}</span>
              <h3 className="modal-title">{selectedProject.title}</h3>
              
              <div className="modal-tech">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="tag" style={{ padding: '6px 12px', fontSize: '12px' }}>{t}</span>
                ))}
              </div>

              <p className="modal-description">{selectedProject.longDescription}</p>

              <div className="modal-footer">
                <a 
                  href={selectedProject.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  <ExternalLink size={16} style={{ marginInlineEnd: '6px' }} />
                  {t.buttons.livePreview}
                </a>
                <a 
                  href={selectedProject.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginInlineEnd: '6px' }}>
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  {t.buttons.codebase}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
