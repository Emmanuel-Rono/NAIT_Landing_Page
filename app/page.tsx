"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
//...
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav>
        <a className="nav-logo" href="#">
          <img
            src="https://naitcommunity.vercel.app/nait-logo.png"
            alt="NAIT logo"
          />
          <span>NAIT</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#activities">Activities</a>
          </li>
          <li>
            <a href="#unique">Key Differentiator</a>
          </li>
          <li>
            <a href="#sabbath">NAITSababth#01</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a
          className="nav-cta"
          href="https://qrco.de/bgq4Gx"
          target="_blank"
          rel="noopener"
        >
          Join NAIT
        </a>
        <button className="nav-hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <section id="hero">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span>Network of Adventists in Technology (NAIT)</span>
          </div>
          <h1 className="hero-title">The Network of Adventists in Technology (NAIT)</h1>
          <p className="hero-subtitle">
            The Network of Adventists in Technology (NAIT) is an initiative aimed at creating A vibrant
            community of Adventist professionals, students, and enthusiasts in the technology space.
          </p>
          <div className="hero-actions">
            <a
              className="btn-primary"
              href="https://qrco.de/bgq4Gx"
              target="_blank"
              rel="noopener"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Join NAIT
            </a>
            <a className="btn-ghost" href="#about">
              2. Aim ↓
            </a>
          </div>
          <div className="hero-stat-row">
            <div className="hero-stat">
              <div className="hero-stat-num">2026</div>
              <div className="hero-stat-label">First Milestone</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">May 30</div>
              <div className="hero-stat-label">NAITSababth#01</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">4</div>
              <div className="hero-stat-label">Core Activities</div>
            </div>
          </div>
        </div>
        <div className="hero-divider"></div>
      </section>

      <section id="about">
        <div className="about-inner">
          <div>
            <span className="section-eyebrow reveal">1. Introduction</span>
            <h2 className="section-title reveal">
              A vibrant community of Adventist professionals, students, and enthusiasts
            </h2>
            <div className="divider-line reveal"></div>
            <p className="section-body reveal">
              NAIT seeks to provide a platform where Adventists in technology can build members' capacities,
              collaborate on projects, organize annual summits, and leverage their God-given skills for the
              advancement of the Church and society at large.
            </p>
            <ul className="values-list reveal">
              <li>build members' capacities</li>
              <li>collaborate on projects</li>
              <li>organize annual summits</li>
              <li>leverage their God-given skills for the advancement of the Church and society at large</li>
            </ul>
          </div>
          <div className="about-visual reveal">
            <div className="about-ring">
              <div className="about-orbit">
                <div className="about-dot"></div>
                <div className="about-dot about-dot-2"></div>
              </div>
              <div className="about-icon-center">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="#071f4d"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                >
                  <circle cx="32" cy="32" r="28" />
                  <path d="M32 10 L32 54 M10 32 L54 32" />
                  <path d="M32 10 Q46 20 46 32 Q46 44 32 54 Q18 44 18 32 Q18 20 32 10" />
                </svg>
                <p>
                  Adventist Tech
                  <br />
                  Network
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="activities">
        <div className="section-wrapper">
          <span className="section-eyebrow reveal">3. Core Activities</span>
          <h2 className="section-title reveal">Core Activities</h2>
          <p className="section-body reveal">
            Annual Summits (NAITSummit), Capacity-Building Meetups, Community Building & Opportunity
            Sharing, and Project Development for the Church for the Church.
          </p>
          <div className="activities-grid reveal">
            <div className="activity-card">
              <div className="activity-num">01</div>
              <div className="activity-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
              </div>
              <div className="activity-title">Annual Summits (NAITSummit)</div>
              <p className="activity-desc">
                Bringing together Adventist tech thought leaders, enthusiasts, church leaders, and
                innovators on identified themes.
              </p>
            </div>
            <div className="activity-card">
              <div className="activity-num">02</div>
              <div className="activity-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="activity-title">Capacity-Building Meetups</div>
              <p className="activity-desc">
                Focused on practical themes such as: Job searching and career mentorship, CV and
                portfolio development, project reviews and feedback sessions, technical bootcamps and
                workshops.
              </p>
            </div>
            <div className="activity-card">
              <div className="activity-num">03</div>
              <div className="activity-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="activity-title">Community Building & Opportunity Sharing</div>
              <p className="activity-desc">
                An active community space (online + offline) where members can: Share job opportunities,
                collaborate on open-source and commissioned projects, exchange resources and expertise.
              </p>
            </div>
            <div className="activity-card">
              <div className="activity-num">04</div>
              <div className="activity-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="activity-title">Project Development for the Church</div>
              <p className="activity-desc">
                Collaborative initiatives (either contracted or voluntary open-source) to solve real
                challenges within the Church.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="unique">
        <div className="diff-inner">
          <div>
            <span className="section-eyebrow reveal">4. Key Differentiator</span>
            <h2 className="section-title reveal">NAIT is not just another tech group.</h2>
            <div className="divider-line reveal"></div>
            <blockquote className="diff-quote reveal">
              It is a faith-centered professional community grounded in Adventist values.
            </blockquote>
          </div>
          <div className="diff-pillars">
            <div className="pillar reveal">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z" />
                </svg>
              </div>
              <div>
                <div className="pillar-title">Church's mission</div>
                <p className="pillar-text">
                  Technological projects, solutions, or initiatives NAIT members work on are designed with
                  the Church's mission in mind.
                </p>
              </div>
            </div>
            <div className="pillar reveal">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 4.354a4 4 0 1 1 0 5.292M15 21H3v-1a6 6 0 0 1 12 0v1zm0 0h6v-1a6 6 0 0 0-9-5.197M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                </svg>
              </div>
              <div>
                <div className="pillar-title">trusted network</div>
                <p className="pillar-text">
                  Offering a trusted network of like-minded professionals who balance faith and innovation.
                </p>
              </div>
            </div>
            <div className="pillar reveal">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="pillar-title">professional capacity</div>
                <p className="pillar-text">
                  Strengthening professional capacity while reinforcing spiritual identity.
                </p>
              </div>
            </div>
            <div className="pillar reveal">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <div className="pillar-title">Adventist values</div>
                <p className="pillar-text">
                  NAIT is not just another tech group. It is a faith-centered professional community
                  grounded in Adventist values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sabbath">
        <div className="section-wrapper" style={{ textAlign: "center" }}>
          <span className="section-eyebrow reveal">5. First Milestone: NAITSababth#01</span>
          <h2 className="section-title reveal">NAITSababth#01 2026</h2>
          <p className="section-body reveal">Officially inaugurate NAIT and set its agenda public.</p>
          <div className="event-card reveal">
            <div className="event-header">
              <span className="event-header-title">Inaugural NAITSababth#01</span>
              <span className="event-tag">30 May 2026</span>
            </div>
            <div className="event-body">
              <div style={{ textAlign: "left" }}>
                <div className="event-date">
                  30 May <span>2026</span>
                </div>
                <div className="event-meta">
                  <div className="event-meta-item">
                    <svg viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                      <circle cx="12" cy="11" r="3" />
                    </svg>
                    Zetech University SDA Church
                  </div>
                  <div className="event-meta-item">
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    Date: 30 May 2026
                  </div>
                  <div className="event-meta-item">
                    <svg viewBox="0 0 24 24">
                      <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                    Adventist tech professionals and students
                  </div>
                </div>
                <div className="event-desc">
                  Be part of history at the inaugural NAITSababth#01 — a day of fellowship, worship, and
                  conversation at the intersection of faith and technology. Connect with Adventist
                  professionals from across the region, hear inspiring talks, and be part of building
                  something that lasts.
                </div>
                <div className="event-cta">
                  <a
                    className="btn-primary"
                    href="https://whatsapp.com/channel/0029Vb6l6qg9mrGW7Onnet40"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Follow updates
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact-inner">
          <span className="section-eyebrow reveal">Get In Touch</span>
          <h2 className="section-title reveal">Let's Connect</h2>
          <div className="divider-line reveal" style={{ margin: "1.5rem auto" }}></div>
          <p className="section-body reveal" style={{ margin: "0 auto" }}>
            Reach out for inquiries, partnerships, collaboration opportunities, or just to say hello.
            We'd love to hear from you.
          </p>
          <div className="contact-links reveal">
            <a
              className="contact-link"
              href="https://qrco.de/bgq4Gx"
              target="_blank"
              rel="noopener"
            >
              <svg viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
              </svg>
              Join NAIT
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <strong>NAIT</strong> — Network of Adventists in Technology &copy; 2026
        </div>
        <div className="footer-pills">
          <span className="footer-pill">Adventist values</span>
          <span className="footer-pill">Church</span>
          <span className="footer-pill">community</span>
        </div>
        <div className="footer-motto">30 May 2026</div>
      </footer>
    </>
  );
}
