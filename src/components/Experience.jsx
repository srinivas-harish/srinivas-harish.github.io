import React from "react";
import dockwareLogo from "../dw_logo.jpeg";
import nvidiaLogo from "../nv_logo.jpeg";
import nyuLogo from "../nyu_logo.png";

function Experience() {
  return (
    <section id="about" className="section section--experiences">
      <div className="container">
        <header className="experiences-head fade-up">
          <p className="experiences-label">Experiences</p>
          <h2 className="experiences-title">Deep Learning Architecture &amp; Inference Engineering.</h2>
          <p className="experiences-copy">
            Neural dimensioning systems deployed in real warehouses, GPU-accelerated vision pipelines optimized for
            real-time inference, and transformer routing architectures built through controlled research.
          </p>
        </header>

        <div className="experiences-grid">
          <article className="experience-card fade-up" data-parallax="0.04">
            <div className="experience-card__halo" />
            <div className="experience-card__logo">
              <img
                src={dockwareLogo}
                alt="Dockware logo"
                width="80"
                height="80"
                loading="lazy"
              />
            </div>
            <div className="experience-card__body">
              <h3 className="experience-card__title">
                Dockware <span>｜ Deep Learning Engineer (Neural Dimensioning Systems)</span>
              </h3>
              <p className="experience-card__meta">Aug 2025 – Present</p>
              <ul className="experience-card__list">
                <li>
                  Deployed and optimized ViT and 3D CNN inference with tight latency constraints in Home Depot
                  warehouses.
                </li>
                <li>
                  Built and tuned full model execution path including preprocessing, TensorRT optimization, and GPU
                  serving.
                </li>
                <li>
                  Led development of Dockware’s production vision transformer inference stack for Vision V4 system with
                  ex-SpaceX and Waymo founders, driving architecture for model and data workflows, and serving
                  infrastructure.
                </li>
                <li>
                  Engineered multi-stage simulated data pipeline with LiDAR and optical flow, modeling scene dynamics to
                  improve cross-domain perception model generalization across sensor modalities and environmental
                  conditions.
                </li>
              </ul>
            </div>
          </article>

          <article className="experience-card fade-up" data-parallax="0.03">
            <div className="experience-card__halo" />
            <div className="experience-card__logo">
              <img
                src={nvidiaLogo}
                alt="NVIDIA logo"
                width="80"
                height="80"
                loading="lazy"
              />
            </div>
            <div className="experience-card__body">
              <h3 className="experience-card__title">
                NVIDIA <span>｜ Computer Vision Developer (Back-to-School Program)</span>
              </h3>
              <p className="experience-card__meta">Jun 2025 – Jul 2025</p>
              <ul className="experience-card__list">
                <li>
                  Built latency and throughput optimized model execution pipelines for RTX Blackwell GPUs.
                </li>
                <li>
                  Integrated TensorRT, CUDA Graphs, and mixed precision, reducing inference latency from 18.7ms → 9.5ms.
                </li>
                <li>
                  Profiled GPU workloads with Nsight Systems/Compute + NVTX to analyze scheduling, kernels, and
                  utilization.
                </li>
                <li>
                  Reduced CPU–GPU synchronization overhead by restructuring inference into staged CUDA-stream
                  operations.
                </li>
                <li>
                  Featured on NVIDIA.com: Deployed containerized inference with Docker+FastAPI for RTX demos at NVIDIA.
                </li>
              </ul>
            </div>
          </article>

          <article className="experience-card fade-up" data-parallax="0.05">
            <div className="experience-card__halo" />
            <div className="experience-card__logo">
              <img
                src={nyuLogo}
                alt="NYU logo"
                width="80"
                height="80"
                loading="lazy"
              />
            </div>
            <div className="experience-card__body">
              <h3 className="experience-card__title">
                New York University <span>｜ Deep Learning Researcher (Transformer Architectures)</span>
              </h3>
              <p className="experience-card__meta">May 2025 – Aug 2025</p>
              <ul className="experience-card__list">
                <li>
                  Designed ALCNet (Attention-Layer Convolutional Net), a hybrid axis-separable 3D CNN over
                  differentiable attention tensors with modified execution graphs to support the new compute path.
                </li>
                <li>
                  Integrated ALCNet with DeBERTa-v3-large and optimized attention processing with cuBLAS-based GEMMs.
                </li>
                <li>
                  Built training infrastructure for spatial/head/layer ablations, enabling deterministic generalization
                  studies.
                </li>
                <li>
                  Deployed ALCNet for LLM-text classification across student submissions in all NYU departments.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;
