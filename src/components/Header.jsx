import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

export default function Header({ language, setLanguage, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: t.home, target: 'home' },
    { label: t.about, target: 'about' },
    { label: t.work, target: 'work' },
    { label: t.contact, target: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navItems.map(item => document.getElementById(item.target));
      const scrollPosition = window.scrollY + 100;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[i].target);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language]); // Depend on language because item offsets might change on RTL shift

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(target);
    const element = document.getElementById(target);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="logo">
          <Code size={24} />
          MuthusApp
          <span className="logo-dot"></span>
        </a>

        {/* Desktop and Mobile Menu */}
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.target}>
              <a
                href={`#${item.target}`}
                onClick={(e) => handleNavClick(e, item.target)}
                className={`nav-link ${activeSection === item.target ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions (Language Toggle & Menu Drawer trigger) */}
        <div className="nav-actions">
          <button 
            className="lang-btn"
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            aria-label={language === 'en' ? "Switch to Arabic" : "التغيير للغة الإنجليزية"}
          >
            {language === 'en' ? "العربية" : "English"}
          </button>

          <button 
            className="menu-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
