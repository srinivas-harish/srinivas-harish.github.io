import React from "react";
import xlrbImg from "../xlrb.png";
import nvProjectImg from "../nv_project.png";
import hohmannImg from "../hohmann.png";

function Projects() {
  return (
    <section id="work" className="section section--systems">
      <div className="container">
        <div className="systems-head fade-up">
          <p className="systems-label">Systems</p>
          <h2 className="systems-title">Designed For Extremes.</h2>
          <p className="systems-copy">
            Three systems that capture how I work: transformer routing extensions, GPU‑accelerated sports analytics,
            and orbital mechanics at simulation scale.
          </p>
        </div>

        <div className="systems-grid">
          <article className="card card--interactive card--system fade-up" data-parallax="0.04">
            <div className="card__glow" />
            <div className="card__image">
              <img src={xlrbImg} alt="XLRB preview" width="640" height="360" loading="lazy" />
            </div>
            <div className="card__head">
              <h3 className="card__title">Cross‑Layer Routing Bridges (XLRB) — Architecture Extension</h3>
              <span className="card__meta">2025</span>
            </div>
            <p className="card__desc">
              Transformer architecture extension introducing gated cross‑layer routing of QKV attention and HDIM
              token‑pair messaging to improve expressivity and feature reuse.
            </p>
            <ul className="card__bullets">
              <li>Built deterministic multi‑GPU training and Nsight‑driven profiling pipeline in PyTorch.</li>
              <li>Ran 50+ fully deterministic GLUE RTE ablations with fixed seeds and reproducible logging.</li>
              <li>Benchmarked on AWS 8×H100 clusters using NCCL and CUDA API summaries.</li>
            </ul>
          </article>

          <article className="card card--interactive card--system fade-up" data-parallax="0.03">
            <div className="card__glow" />
            <div className="card__image">
              <img
                src={nvProjectImg}
                alt="NVIDIA‑accelerated soccer analytics preview"
                width="640"
                height="360"
                loading="lazy"
              />
            </div>
            <div className="card__head">
              <h3 className="card__title">NVIDIA‑Accelerated Soccer Analytics Pipeline</h3>
              <span className="card__meta">2025</span>
            </div>
            <p className="card__desc">
              End‑to‑end sports CV pipeline for broadcast feeds, from YOLOv9 detection to tracking, clustering, and
              tactical metrics rendered in real time.
            </p>
            <ul className="card__bullets">
              <li>Fine‑tuned YOLOv9c and optimized inference with TensorRT / ONNX.</li>
              <li>
                Used cuML KMeans, optical flow, and Kalman filtering to stabilize motion and estimate speed and
                distances.
              </li>
              <li>Integrated DeepSORT + ByteTrack hybrid tracking for identity stability across occlusion.</li>
            </ul>
          </article>

          <article className="card card--interactive card--system fade-up" data-parallax="0.05">
            <div className="card__glow" />
            <div className="card__image">
              <img
                src={hohmannImg}
                alt="Hohmann trajectory optimization preview"
                width="640"
                height="360"
                loading="lazy"
              />
            </div>
            <div className="card__head">
              <h3 className="card__title">Optimizing Interplanetary Trajectories using Hohmann Transfers</h3>
              <span className="card__meta">2024</span>
            </div>
            <p className="card__desc">
              Large‑scale simulation of Earth–Mars Hohmann transfers in a three‑body model, aligning numerical
              predictions with NASA transfer windows.
            </p>
            <ul className="card__bullets">
              <li>Modeled second‑order ODEs in MATLAB for three‑body dynamics.</li>
              <li>Applied RKF and Householder / Danby methods to solve Kepler and Lambert equations and compute Δv.</li>
              <li>Generated 30M+ trajectories across decades to evaluate optimal launch windows.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
