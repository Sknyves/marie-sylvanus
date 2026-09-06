'use client';

import React, { useState } from 'react';
import BrandWaves from '@/components/ui/BrandWaves';
import BrandSignature from '@/components/ui/BrandSignature';

export default function DiagnosticSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'Commerce / PME',
    need: 'Automatisation de tâches répétitives',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Format message for WhatsApp direct option
    const text = `Bonjour Marie Sylvanus, je souhaite réserver un Diagnostic Gratuit (15 min).%0A%0A*Nom:* ${formData.name}%0A*Email:* ${formData.email}%0A*Activité:* ${formData.businessType}%0A*Besoin:* ${formData.need}%0A*Message:* ${formData.message}`;
    
    setTimeout(() => {
      setStatus('success');
      window.open(`https://wa.me/22943655721?text=${text}`, '_blank');
    }, 600);
  };

  return (
    <section className="diagnostic-section" id="diagnostic">
      <div className="diagnostic-container">
        
        {/* Visual 1 Card Container */}
        <div className="diagnostic-main-card">
          <div className="card-grid">
            
            {/* Left Content */}
            <div className="card-left">
              <div className="tag-header">
                <span className="tag-text">PRENONS 15 MINUTES</span>
                <div className="tag-bar" />
              </div>

              <h2 className="card-title">
                Diagnostic<br />
                <span className="title-highlight">gratuit<span className="dot-orange">.</span></span>
              </h2>

              <p className="card-subtitle">
                Des conseils clairs pour des solutions qui vous font <span className="text-turquoise-bold">gagner du temps.</span>
              </p>

              {/* 3 Pillars */}
              <div className="pillars-list">
                
                {/* Item 1 */}
                <div className="pillar-item">
                  <div className="pillar-icon icon-teal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 14 14" />
                    </svg>
                  </div>
                  <div className="pillar-content">
                    <h3 className="pillar-title title-teal">15 minutes</h3>
                    <p className="pillar-desc">Un échange rapide et efficace pour comprendre vos besoins et vos blocages.</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="pillar-item">
                  <div className="pillar-icon icon-navy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m11 17 2 2a1 1 0 0 0 1.42 0l4.24-4.24a1 1 0 0 0 0-1.42l-2-2a1 1 0 0 0-1.42 0L11 15.58" />
                      <path d="m7 13 2 2" />
                      <path d="M18 11V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
                    </svg>
                  </div>
                  <div className="pillar-content">
                    <h3 className="pillar-title title-navy">Sans engagement</h3>
                    <p className="pillar-desc">Vous décidez librement de la suite à donner à nos recommandations.</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="pillar-item">
                  <div className="pillar-icon icon-orange">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                    </svg>
                  </div>
                  <div className="pillar-content">
                    <h3 className="pillar-title title-orange">Des conseils concrets</h3>
                    <p className="pillar-desc">Des pistes d'amélioration immédiatement adaptées à votre activité et à vos outils.</p>
                  </div>
                </div>

              </div>

              {/* Bottom Pill Bar */}
              <div className="navy-pill-bar">
                <div className="pill-entry">
                  <span className="pill-dot dot-cyan">📅</span>
                  <span>Diagnostic gratuit</span>
                </div>
                <div className="pill-divider" />
                <div className="pill-entry">
                  <span className="pill-dot dot-teal">⏱️</span>
                  <span>15 minutes</span>
                </div>
                <div className="pill-divider" />
                <div className="pill-entry">
                  <span className="pill-dot dot-org">🤝</span>
                  <span>Sans engagement</span>
                </div>
              </div>

              {/* Signature stamp */}
              <div className="left-signature">
                <BrandSignature theme="light" />
              </div>
            </div>

            {/* Right Interactive Booking Form */}
            <div className="card-right">
              <div className="form-box">
                <div className="form-header">
                  <span className="form-tag">RÉSERVEZ VOTRE CRÉNEAU</span>
                  <h3 className="form-title">Discutons de votre projet</h3>
                  <p className="form-desc">Remplissez ce formulaire court ou écrivez-moi directement sur WhatsApp pour convenir d'un rendez-vous.</p>
                </div>

                <form onSubmit={handleSubmit} className="booking-form">
                  <div className="form-field">
                    <label>Votre Nom complet</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="field-row">
                    <div className="form-field">
                      <label>Email</label>
                      <input
                        type="email"
                        required
                        placeholder="jean@entreprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label>WhatsApp / Téléphone</label>
                      <input
                        type="tel"
                        placeholder="+229 00 00 00 00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Votre activité / secteur</label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    >
                      <option value="Commerce / Restaurant">Commerce / Restaurant</option>
                      <option value="Cabinet comptable / Juridique">Cabinet comptable / Juridique</option>
                      <option value="PME / Entreprise de services">PME / Entreprise de services</option>
                      <option value="Startup / Tech">Startup / Tech</option>
                      <option value="Autre secteur">Autre secteur</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>Votre besoin principal</label>
                    <select
                      value={formData.need}
                      onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                    >
                      <option value="Automatisation de tâches répétitives">Automatisation de tâches répétitives (factures, saisie, relances)</option>
                      <option value="Création d'un assistant IA sur mesure">Création d'un assistant IA sur mesure (WhatsApp / Client)</option>
                      <option value="Digitalisation & Développement d'application">Digitalisation & Développement de solution web</option>
                      <option value="Audit global & Optimisation de workflows">Audit global & Optimisation de workflows</option>
                    </select>
                  </div>

                  <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Ouverture...' : 'Valider & Lancer sur WhatsApp ↗'}
                  </button>

                  <div className="alternative-contact">
                    <span>Ou par email direct : </span>
                    <a href="mailto:mariesyl321@gmail.com">mariesyl321@gmail.com</a>
                  </div>
                </form>
              </div>
            </div>

          </div>
          <BrandWaves position="bottom-right" opacity={0.7} />
        </div>

      </div>

      <style jsx>{`
        .diagnostic-section {
          width: 100%;
          background: #FAF8F5;
          padding: 6rem 2rem;
          position: relative;
          z-index: 30;
        }

        .diagnostic-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .diagnostic-main-card {
          background: #FFFFFF;
          border: 1px solid #EAE4DA;
          border-radius: 32px;
          padding: 4rem;
          box-shadow: 0 20px 50px rgba(9, 30, 58, 0.07);
          position: relative;
          overflow: hidden;
        }

        .card-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 4rem;
          position: relative;
          z-index: 5;
        }

        /* Left Column */
        .tag-header {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .tag-text {
          font-family: var(--font-display, sans-serif);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.22em;
          color: #091E3A;
          text-transform: uppercase;
        }

        .tag-bar {
          width: 42px;
          height: 3px;
          background: #FF6B35;
          border-radius: 999px;
        }

        .card-title {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 800;
          color: #091E3A;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 1.25rem;
        }

        .dot-orange {
          color: #FF6B35;
        }

        .card-subtitle {
          font-size: 1.15rem;
          color: #091E3A;
          line-height: 1.5;
          margin-bottom: 2.5rem;
        }

        .text-turquoise-bold {
          color: #00A896;
          font-weight: 700;
        }

        /* Pillars List */
        .pillars-list {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          margin-bottom: 2.5rem;
        }

        .pillar-item {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
        }

        .pillar-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-icon svg {
          width: 24px;
          height: 24px;
        }

        .icon-teal {
          background: #E6F7F5;
          color: #00A896;
          border: 1.5px solid rgba(0, 168, 150, 0.35);
        }

        .icon-navy {
          background: #EEF2F6;
          color: #091E3A;
          border: 1.5px solid rgba(9, 30, 58, 0.3);
        }

        .icon-orange {
          background: #FFF2EB;
          color: #FF6B35;
          border: 1.5px solid rgba(255, 107, 53, 0.35);
        }

        .pillar-title {
          font-family: var(--font-display, sans-serif);
          font-size: 1.1rem;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .title-teal { color: #00A896; }
        .title-navy { color: #091E3A; }
        .title-orange { color: #FF6B35; }

        .pillar-desc {
          font-size: 0.92rem;
          color: #54667D;
          line-height: 1.5;
        }

        /* Navy Pill Bar */
        .navy-pill-bar {
          background: #091E3A;
          color: #FFFFFF;
          padding: 0.9rem 1.6rem;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          font-size: 0.82rem;
          font-weight: 700;
          box-shadow: 0 8px 24px rgba(9, 30, 58, 0.2);
        }

        .pill-entry {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pill-divider {
          width: 1px;
          height: 18px;
          background: rgba(255, 255, 255, 0.2);
        }

        .left-signature {
          margin-top: 1rem;
        }

        /* Right Form Box */
        .form-box {
          background: #FAF8F5;
          border: 1px solid #EAE4DA;
          border-radius: 24px;
          padding: 2.5rem;
        }

        .form-header {
          margin-bottom: 2rem;
        }

        .form-tag {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #FF6B35;
          text-transform: uppercase;
        }

        .form-title {
          font-family: var(--font-display, sans-serif);
          font-size: 1.7rem;
          font-weight: 800;
          color: #091E3A;
          margin-top: 0.3rem;
          margin-bottom: 0.5rem;
        }

        .form-desc {
          font-size: 0.88rem;
          color: #54667D;
          line-height: 1.5;
        }

        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-field label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #091E3A;
        }

        .form-field input, .form-field select {
          padding: 0.85rem 1rem;
          border-radius: 12px;
          border: 1px solid #DCD5C9;
          background: #FFFFFF;
          font-family: var(--font-main, sans-serif);
          font-size: 0.9rem;
          color: #091E3A;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-field input:focus, .form-field select:focus {
          border-color: #00A896;
          box-shadow: 0 0 0 3px rgba(0, 168, 150, 0.15);
        }

        .submit-btn {
          background: #FF6B35;
          color: #FFFFFF;
          font-family: var(--font-main, sans-serif);
          font-size: 0.95rem;
          font-weight: 700;
          padding: 1.1rem;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
          margin-top: 0.5rem;
        }

        .submit-btn:hover {
          background: #F2571D;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(255, 107, 53, 0.4);
        }

        .alternative-contact {
          text-align: center;
          font-size: 0.82rem;
          color: #64748B;
        }

        .alternative-contact a {
          color: #00A896;
          font-weight: 700;
          text-decoration: underline;
        }

        @media (max-width: 1024px) {
          .card-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .diagnostic-main-card {
            padding: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .diagnostic-main-card {
            padding: 1.5rem;
            border-radius: 24px;
          }
          .field-row {
            grid-template-columns: 1fr;
          }
          .navy-pill-bar {
            flex-direction: column;
            gap: 0.6rem;
            border-radius: 18px;
            padding: 1rem;
          }
          .pill-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
