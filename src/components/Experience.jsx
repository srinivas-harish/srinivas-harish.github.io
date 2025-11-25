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
                  Designed and deployed custom PointNet and VoxelNet derived 3D CNN using differentiable voxelization
                  and corner-level geometric supervision, achieving sub-inch dimensioning in 3PL warehouses including
                  Home Depot.
                </li>
                <li>
                  Built Dockware’s production LiDAR-CNN pipeline and ML stack, co-developed with ex-SpaceX and Waymo
                  founders, leading architectural decisions on model design, data and training workflows, and inference
                  strategy.
                </li>
                <li>
                  Engineered a simulated data pipeline combining LiDAR and optical flow data modeling scene dynamics to
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
                NVIDIA <span>｜ Computer Vision Developer (RTX‑Accelerated CV)</span>
              </h3>
              <p className="experience-card__meta">Jun 2025 – Jul 2025</p>
              <ul className="experience-card__list">
                <li>
                  Contracted by NVIDIA to develop GPU-Accelerated computer vision inference pipelines for the RTX 50
                  Series.
                </li>
                <li>
                  Optimized CUDA graphs and asynchronous execution streams to cut frame latency from 18.7 ms to 9.5 ms.
                </li>
                <li>
                  Integrated TensorRT with CUDA Graphs and cuDNN/cuBLAS, extending the pipeline with custom CUDA
                  kernels.
                </li>
                <li>
                  Profiled RTX Blackwell GPUs with Nsight Systems/Compute and NVTX for kernel-level performance tuning,
                  and deployed containerized demos with Docker + FastAPI showcased on NVIDIA.com.
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
                  differentiable attention tensors with residual fusion for spatio-temporal learning; authored
                  manuscript with NYU faculty.
                </li>
                <li>
                  Trained and deployed ALCNet-based model for fine-grained LLM classification in NYU&apos;s writing
                  program.
                </li>
                <li>
                  Integrated ALCNet atop DeBERTa-v3-large and optimized GPU-backed matrix multiplications with cuBLAS.
                </li>
                <li>
                  Conducted controlled ablation studies (spatial, head, and layer components) quantifying model
                  generalization.
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
