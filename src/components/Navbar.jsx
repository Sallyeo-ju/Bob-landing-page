import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import './Navbar.css';

const LINKS = [
  { label: 'Fitur', href: '#features' },
  { label: 'AI Chat', href: '#chat' },
  { label: 'Cara Kerja', href: '#how' },
  { label: 'Download', href: '#download' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <Logo />
        </a>

        <div className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/CristianPhi/SectorsHackhaton/releases/latest/download/app-release.apk"
            className="btn btn-primary nav-cta"
            onClick={() => setOpen(false)}
          >
            Download APK
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? 'x' : ''} />
          <span className={open ? 'x' : ''} />
          <span className={open ? 'x' : ''} />
        </button>
      </div>
    </nav>
  );
}
