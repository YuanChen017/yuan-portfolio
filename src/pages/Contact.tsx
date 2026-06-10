import { useState } from "react";
import { profile } from "../data/profile";
import { CONTACT } from "../data/content";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(CONTACT.form.successMsg);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="contact-page">
      <section className="contact-header">
        <div className="contact-header-inner">
          <p className="eyebrow">{CONTACT.eyebrow}</p>
          <h1 className="section-heading">{CONTACT.heading}</h1>
          <div className="ink-divider" />
        </div>
      </section>

      <section className="contact-content dark-ink-section">
        <div className="contact-content-inner">
          {/* Left: Info */}
          <div className="contact-info">
            <h2 className="contact-info-heading">{CONTACT.subheading}</h2>
            <p className="contact-info-cn">{CONTACT.bodyCn}</p>
            <p className="contact-info-en">{CONTACT.bodyEn}</p>

            <div className="contact-details">
              <a href={`mailto:${profile.email}`} className="contact-detail-item">
                <span className="contact-detail-icon">{CONTACT.details.email.icon}</span>
                <div>
                  <span className="contact-detail-label">{CONTACT.details.email.label}</span>
                  <span className="contact-detail-value">{profile.email}</span>
                </div>
              </a>

              <div className="contact-detail-item">
                <span className="contact-detail-icon">{CONTACT.details.location.icon}</span>
                <div>
                  <span className="contact-detail-label">{CONTACT.details.location.label}</span>
                  <span className="contact-detail-value">{profile.location}</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="contact-detail-icon">{CONTACT.details.status.icon}</span>
                <div>
                  <span className="contact-detail-label">{CONTACT.details.status.label}</span>
                  <span className="contact-detail-value">{CONTACT.details.status.value}</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href={profile.twitter} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Resume">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrapper">
            <div className="contact-ink-sword" />
            <div className="contact-form-card">
              <h2 className="contact-form-title">
                <span className="cn-deco">{CONTACT.form.titleCn}</span>
                <span>{CONTACT.form.titleEn}</span>
              </h2>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">{CONTACT.form.fields.name.label}</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder={CONTACT.form.fields.name.placeholder}
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{CONTACT.form.fields.email.label}</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder={CONTACT.form.fields.email.placeholder}
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{CONTACT.form.fields.subject.label}</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-input"
                    placeholder={CONTACT.form.fields.subject.placeholder}
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{CONTACT.form.fields.message.label}</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder={CONTACT.form.fields.message.placeholder}
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-seal form-submit">
                  {CONTACT.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer quote */}
        <div className="contact-footer-quote">
          <p className="contact-quote-cn">{CONTACT.quote.cn}</p>
          <p className="contact-quote-en">{CONTACT.quote.en}</p>
          <p className="contact-quote-author">{CONTACT.quote.author}</p>
        </div>
      </section>
    </main>
  );
}
