"use client";
import { useEffect } from "react";
import Loader from "./components/Loader";

export default function Home() {
  useEffect(() => {
    // Initial animation for hero section
    const panels = document.querySelectorAll<HTMLElement>('.slide-up');
    panels.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('show');
      }, index * 500);
    });

    // Intersection Observer for scroll animations in the new section
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) observer.observe(aboutContent);

    return () => observer.disconnect();
  }, []);

  const handleExplore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <Loader />
      <div className="waterContainer"></div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="content slide-up">
          <h1>Background Wave Effect</h1>
          <p>A simple, dynamic and modern full-page wave animation example.</p>
          <button className="btn" onClick={handleExplore}>Explore</button>
        </div>
      </section>

      {/* New "About" Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <h2>Welcome to the Next Level</h2>
          <p>
            Experience a seamless transition from the vibrant energy of the waves to a clean,
            minimalist workspace. This design demonstrates the power of contrasting elements
            creating a balanced user experience.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Modern Design</h3>
              <p>Clean lines and typography focused on readability and elegance.</p>
            </div>
            <div className="feature-card">
              <h3>Smooth Motion</h3>
              <p>Fluid animations that guide the user's eye naturally through the content.</p>
            </div>
            <div className="feature-card">
              <h3>Responsive</h3>
              <p>Perfectly adapted for every device, from mobile phones to large desktops.</p>
            </div>
          </div>
        </div>

        <footer className="slide-up" style={{ marginTop: 'auto', paddingBottom: '2rem', color: '#7a0303' }}>
          &copy; 2025 Ayşe Sude Özden. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
