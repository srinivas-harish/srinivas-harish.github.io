import React, { useEffect, useRef, useState } from "react";
import gargantuaVideo from "../gargantua.mp4";

function Hero() {
  const rootRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    setMounted(true);

    const handleMove = (event) => {
      const rect = root.getBoundingClientRect();
      const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
      const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;

      root.style.setProperty("--mouse-x", x.toString());
      root.style.setProperty("--mouse-y", y.toString());
    };

    root.addEventListener("mousemove", handleMove);
    return () => root.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className={`cosmic-hero${mounted ? " cosmic-hero--visible" : ""}`}
      aria-label="Hero — Engineering the Sublime"
    >
      <div className="cosmic-hero__background">
        <video
          className="cosmic-hero__video"
          src={gargantuaVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="cosmic-hero__veil" />
      </div>

      <div className="cosmic-hero__content container">
        <div className="cosmic-hero__identity fade-in-up">
          <p className="cosmic-hero__eyebrow">
            Deep Learning Systems &amp; Architectures
          </p>
          <h1 className="cosmic-hero__title">Engineering the Sublime</h1>
          <p className="cosmic-hero__subtitle">
            I design expressive neural architectures and high-performance inference systems.
          </p>
          <div className="cosmic-hero__cta">
            <a href="#about" className="cosmic-hero__button cosmic-hero__button--primary">
              <span>View Work</span>
            </a>
            <a
              href="/public/resume.pdf"
              className="cosmic-hero__button cosmic-hero__button--ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        <aside className="cosmic-hero__meta fade-in-up">
          <div className="cosmic-hero__meta-grid">
            <div className="cosmic-hero__meta-card">
              <span className="cosmic-hero__meta-label">Toolchain</span>
              <ul className="cosmic-hero__meta-list">
                <li>PyTorch</li>
                <li>TensorRT</li>
                <li>CUDA Graphs</li>
                <li>cuDNN / cuBLAS</li>
                <li>NCCL</li>
                <li>ONNX</li>
                <li>Nsight Systems / Nsight Compute</li>
                <li>Open3D</li>
                <li>Celery + Redis</li>
                <li>FastAPI</li>
                <li>Docker</li>
              </ul>
            </div>
            <div className="cosmic-hero__meta-card">
              <span className="cosmic-hero__meta-label">Focus</span>
              <p className="cosmic-hero__meta-text">
                Efficient deep-learning systems, expressive neural architectures, and high-fidelity perception models.
              </p>
              <p className="cosmic-hero__meta-text">
  Deterministic. Profiled.
  <br />
  Stress-tested.
</p>

            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
