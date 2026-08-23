import React from 'react';
import {
  BadgeCheck,
  Briefcase,
  Building2,
  Calculator,
  Coins,
  Copyright,
  Factory,
  FileCog,
  FileSearch,
  Globe,
  Home,
  KeySquare,
  Landmark,
  MapPin,
  Scale,
  Ship,
  ShieldCheck,
  Stamp,
} from 'lucide-react';
import { SERVICES } from '../data';

const ICON_MAP = {
  Building2,
  Calculator,
  MapPin,
  BadgeCheck,
  Ship,
  Coins,
  FileCog,
  Scale,
  Home,
  FileSearch,
  ShieldCheck,
  Landmark,
  Stamp,
  KeySquare,
  Factory,
  Globe,
  Copyright,
  Briefcase,
};

const HOT = new Set(['公司注册', '记账报税', '税务筹划', '财务外包']);

export default function ServiceMatrix() {
  return (
    <section className="section section-alt" id="matrix" data-component="service-matrix">
      <div className="container" data-reveal>
        <div className="sec-head">
          <span className="eyebrow">业务范围</span>
          <h2>18 项财税业务，一站式全覆盖</h2>
          <p className="sec-lead">从公司设立、日常记账到资质办理、税务规划，均有专业团队跟进</p>
        </div>

        <ul className="matrix-grid">
          {SERVICES.map((svc) => {
            const Icon = ICON_MAP[svc.icon];
            return (
              <li className="matrix-item" key={svc.name} data-component="service-item">
                <span className="matrix-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div className="matrix-text">
                  <p className="matrix-name">
                    {svc.name}
                    {HOT.has(svc.name) && <span className="matrix-hot">热门</span>}
                  </p>
                  <p className="matrix-desc">{svc.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
