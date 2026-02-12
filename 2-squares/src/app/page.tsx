import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <div className="grid">

        <div className="card white">
          AYŞE SUDE<br />ÖZDEN
        </div>

        <Link href="/team-handbook" className="card pink">
          Team Handbook
          <span className="arrow">→</span>
        </Link>

        <Link href="/careers" className="card pink">
          Careers
          <span className="arrow">→</span>
        </Link>

        <Link href="/company-updates" className="card blue">
          Company Updates
          <span className="arrow">→</span>
        </Link>

        <Link href="/report-of-the-year" className="card blue">
          Report of the Year
          <span className="arrow">→</span>
        </Link>

        <Link href="/company-culture" className="card blue">
          Company Culture
          <span className="arrow">→</span>
        </Link>

        <Link href="/new-services" className="card pink">
          New Services
          <span className="arrow">→</span>
        </Link>

        <Link href="/project-reports" className="card pink">
          Project Reports
          <span className="arrow">→</span>
        </Link>

        <Link href="/contact-info" className="card pink">
          Contact Info
          <span className="arrow">→</span>
        </Link>

      </div>
    </div>
  );
}
