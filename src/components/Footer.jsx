import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { COMPANY, NAV_LINKS } from '../data';

export default function Footer() {
  return (
    <footer className="footer" data-component="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo gid="ftr" />
          <p className="footer-slogan">{COMPANY.slogan}</p>
          <p className="footer-desc">
            {COMPANY.fullName}，经财政局批准的专业代理记账机构，
            为珠三角创业者提供一站式财税服务。
          </p>
        </div>

        <div className="footer-col">
          <h3>快速导航</h3>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>联系方式</h3>
          <ul>
            <li>
              <Phone size={15} aria-hidden="true" />
              <a href={`tel:${COMPANY.phoneRaw}`}>
                {COMPANY.phone}（{COMPANY.contactPerson}）
              </a>
            </li>
            <li>
              <MapPin size={15} aria-hidden="true" />
              {COMPANY.address}
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>服务城市</h3>
          <ul className="footer-cities">
            {COMPANY.cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} {COMPANY.fullName}（达富财务）· 保留所有权利</p>
        </div>
      </div>
    </footer>
  );
}
