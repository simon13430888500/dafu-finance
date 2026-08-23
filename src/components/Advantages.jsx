import React from 'react';
import {
  Award,
  Clock,
  Compass,
  GraduationCap,
  PiggyBank,
  ShieldCheck,
  Stamp,
  Users,
} from 'lucide-react';
import { ADVANTAGES, CREDENTIALS } from '../data';

const ICON_MAP = {
  ShieldCheck,
  GraduationCap,
  Compass,
  Users,
  PiggyBank,
  Clock,
  Stamp,
  Award,
};

export default function Advantages() {
  return (
    <section className="section" id="advantages" data-component="trust-factors">
      <div className="container" data-reveal>
        <div className="sec-head">
          <span className="eyebrow">服务优势</span>
          <h2>财务外包服务优势</h2>
          <p className="sec-lead">为什么选择达富财务——六大理由，让您放心托付</p>
        </div>

        <div className="adv-grid">
          {ADVANTAGES.map((adv, i) => {
            const Icon = ICON_MAP[adv.icon];
            return (
              <article className="adv-card" key={adv.title} data-component="advantage-item">
                <span className="adv-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="adv-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>{adv.title}</h3>
                <p>{adv.desc}</p>
              </article>
            );
          })}
        </div>

        <div className="cred-row">
          {CREDENTIALS.map((cred) => {
            const Icon = ICON_MAP[cred.icon];
            return (
              <article className="cred-card" key={cred.title} data-component="credential-card">
                <span className="cred-icon">
                  <Icon size={26} aria-hidden="true" />
                </span>
                <div>
                  <h3>{cred.title}</h3>
                  <p>{cred.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
