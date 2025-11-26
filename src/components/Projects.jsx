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
              <li>
                Developed XLRB, a transformer architecture introducing gated cross‑layer routing of QKV attention and
                HDIM token‑pair messaging to improve expressivity and feature reuse, reducing overfitting across domains.
              </li>
              <li>
                Built deterministic multi‑GPU training and Nsight profiling pipeline (PyTorch + Celery + Redis) for
                ablations.
              </li>
              <li>
                Ran 50+ fully deterministic ablations on GLUE RTE with fixed seeds, early stopping, and reproducible
                logging.
              </li>
              <li>
                Benchmarked on AWS 8×H100 cluster with NCCL; validated via CUDA API summaries and HPC profiling.
              </li>
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
              <li>
                Fine‑tuned YOLOv9c model on broadcast soccer for player/ball detection, optimized with TensorRT/ONNX.
              </li>
              <li>
                Applied cuML‑based KMeans for team clustering and optical flow + Kalman filtering for motion correction.
              </li>
              <li>
                Implemented perspective transforms in OpenCV/NumPy to estimate speed and relative distances from feeds.
              </li>
              <li>
                Integrated DeepSORT + ByteTrack hybrid tracking logic to stabilize multi‑player identities across
                occlusion.
              </li>
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
              <li>
                Simulated Earth–Mars Hohmann transfers using MATLAB and second‑order ODEs in a three‑body model.
              </li>
              <li>
                Applied RKF and Householder/Danby methods to solve Kepler/Lambert equations and compute minimum Δv.
              </li>
              <li>
                Generated 30M+ simulated trajectories to evaluate optimal transfers, validating NASA &apos;24 mission
                parameters.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
