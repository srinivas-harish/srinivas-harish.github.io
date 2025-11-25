import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function useScrollProgress() {
  useEffect(() => {
    const bar = document.querySelector(".scroll-progress");
    if (!bar) return;

    const handleScroll = () => {
      const st = document.documentElement.scrollTop || document.body.scrollTop;
      const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = Math.max(0, Math.min(100, (st / h) * 100));
      bar.style.width = `${pct}%`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

function useSectionActiveOnScroll() {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll('.nav__links a[href^="#"]'));
    const sections = links
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    if (!links.length || !sections.length) return;

    const setActive = () => {
      const y = window.scrollY + 120;
      let active = links[0];
      for (let i = 0; i < sections.length; i += 1) {
        if (sections[i].offsetTop <= y) {
          active = links[i];
        }
      }
      links.forEach((link) => link.classList.toggle("active", link === active));
    };

    window.addEventListener("scroll", setActive, { passive: true });
    setActive();
    return () => window.removeEventListener("scroll", setActive);
  }, []);
}

function useInViewAnimations() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("has-io");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up, .section__title").forEach((el) => io.observe(el));

    const workList = document.querySelector(".work-grid");
    if (workList) {
      Array.from(workList.children).forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i * 80, 480)}ms`;
        el.classList.add("fade-up");
      });
    }

    return () => io.disconnect();
  }, []);
}

function useParallaxOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-parallax]"));
    if (!els.length) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const vh = window.innerHeight;
        const st = window.scrollY || 0;
        for (const el of els) {
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2 + st;
          const delta = center - (st + vh / 2);
          const speed = parseFloat(el.getAttribute("data-parallax")) || 0.06;
          const translate = -delta * speed;
          el.style.transform = `translate3d(0, ${translate.toFixed(1)}px, 0)`;
          el.style.willChange = "transform";
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}

function useCardTilt() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card--interactive");
    if (!cards.length) return;

    const max = 8;
    const states = new WeakMap();

    cards.forEach((card) => {
      let raf = null;

      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rx = (0.5 - y) * max;
        const ry = (x - 0.5) * max;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          card.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0)`;
          card.style.transition = "transform 120ms var(--easing)";
        });
        states.set(card, raf);
      };

      const onLeave = () => {
        const rafId = states.get(card);
        if (rafId) cancelAnimationFrame(rafId);
        card.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
        card.style.transition = "transform 260ms var(--easing)";
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.replaceWith(card.cloneNode(true));
      });
    };
  }, []);
}

function App() {
  useScrollProgress();
  useSectionActiveOnScroll();
  useInViewAnimations();
  useParallaxOnScroll();
  useCardTilt();

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
