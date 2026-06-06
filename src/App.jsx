import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { translations } from './translations';

export default function App() {
  const [language, setLanguage] = useState('en');
  const t = translations[language];

  return (
    <div className={`app-container ${language === 'ar' ? 'rtl' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header language={language} setLanguage={setLanguage} t={t.nav} />
      <main>
        <HeroSlider t={t.hero} language={language} />
        <AboutSection t={t.about} language={language} />
        <WorkSection t={t.work} language={language} />
        <ContactSection t={t.contact} language={language} />
      </main>
      <Footer t={t.footer} />
    </div>
  );
}
