import React from "react";

function Contact() {
  return (
    <section id="contact" className="section section--signal">
      <div className="container contact__grid">
        <div className="signal-copy">
          <h2 className="section__title fade-up">Signal</h2>
          <p className="lead">
            Bring me hard problems.
          </p>
        </div>
        <div className="contact__box signal-panel">
          <div className="signal-orbit" aria-hidden="true">
            <div className="signal-orbit__ring signal-orbit__ring--outer" />
            <div className="signal-orbit__ring signal-orbit__ring--inner" />
            <div className="signal-orbit__core" />
          </div>
          <div className="contact__row">
            <a className="icon-link" href="mailto:srinivas.harish@nyu.edu" aria-label="Email">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 0 8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="icon-link__label">srinivas.harish@nyu.edu</span>
            </a>
            <a
              className="icon-link"
              href="https://github.com/srinivas-harish"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02 0 2.04.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z" />
              </svg>
              <span className="icon-link__label">github.com/srinivas-harish</span>
            </a>
            <a
              className="icon-link"
              href="https://www.linkedin.com/in/srinivasharish"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5H4.5v15H.5v-15zM8.5 8.5H12v2.1h.05c.49-.93 1.68-1.9 3.45-1.9 3.69 0 4.37 2.43 4.37 5.6v6.3h-4v-5.59c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.68h-4v-12z" />
              </svg>
              <span className="icon-link__label">linkedin.com/in/srinivasharish</span>
            </a>
            <a
              className="icon-link"
              href="https://x.com/SrinivasSHarish"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3 3h4.6l4.3 6.1L16.2 3H21l-6.8 9.3L21 21h-4.6l-4.6-6.5L7.8 21H3l7.2-9.7L3 3z" />
              </svg>
              <span className="icon-link__label">x.com/SrinivasSHarish</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
