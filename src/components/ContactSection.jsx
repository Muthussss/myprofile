import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactSection({ t, language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorMsg(t.form.errorFields);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg(t.form.errorEmail);
      return;
    }

    setIsSubmitting(true);

    // Simulate server request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Auto-dismiss success alert
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="section" id="contact">
      <div className="section-header">
        <span className="section-subtitle">{t.subtitle}</span>
        <h2 className="section-title">{t.title}</h2>
      </div>

      <div className="contact-container">
        {/* Info Column */}
        <div className="contact-info-panel">
          <div className="contact-info-details">
            <h3>{t.heading}</h3>
            <p>{t.description}</p>
          </div>

          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">
                <Mail size={20} />
              </div>
              <div>
                <span className="info-label">{t.info.email}</span>
                <p className="info-val">muthu@muthusapp.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <Phone size={20} />
              </div>
              <div>
                <span className="info-label">{t.info.phone}</span>
                <p className="info-val">+1 (555) 234-5678</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={20} />
              </div>
              <div>
                <span className="info-label">{t.info.location}</span>
                <p className="info-val">{t.info.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div>
          {submitSuccess && (
            <div className="success-alert">
              <CheckCircle size={20} style={{ marginInlineEnd: '8px' }} />
              <span>{t.form.success}</span>
            </div>
          )}

          {errorMsg && (
            <div className="success-alert" style={{ backgroundColor: '#fef2f2', borderColor: '#fca5a5', color: '#991b1b' }}>
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">{t.form.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.form.placeholderName}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">{t.form.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.form.placeholderEmail}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">{t.form.subject}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t.form.placeholderSubject}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">{t.form.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.form.placeholderMessage}
                className="form-input"
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
              style={{ width: '100%', marginTop: '10px' }}
            >
              {isSubmitting ? (
                <span>{t.form.sending}</span>
              ) : (
                <>
                  <span>{t.form.send}</span>
                  <Send size={16} style={{ marginInlineStart: '8px', transform: language === 'ar' ? 'scaleX(-1)' : 'none' }} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
