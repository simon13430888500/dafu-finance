import React, { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import Logo from './Logo';
import { COMPANY, NAV_LINKS } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`} data-component="navbar">
      <div className="container navbar-inner">
        <a className="navbar-brand" href="#home" aria-label="达富财务 首页">
          <Logo />
        </a>

        <nav className="navbar-links" aria-label="主导航">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a className="navbar-phone" href={`tel:${COMPANY.phoneRaw}`} aria-label={`拨打电话 ${COMPANY.phone}`}>
            <Phone size={18} aria-hidden="true" />
            <span>{COMPANY.phone}</span>
          </a>
          <a className="btn btn-primary navbar-cta" href="#contact">
            立即咨询
          </a>
          <button
            type="button"
            className="navbar-toggle"
            aria-label={open ? '关闭菜单' : '打开菜单'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="navbar-mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary" href={`tel:${COMPANY.phoneRaw}`}>
            <Phone size={16} aria-hidden="true" /> 电话咨询 {COMPANY.phone}
          </a>
        </div>
      )}
    </header>
  );
}
