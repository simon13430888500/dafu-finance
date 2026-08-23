import React from 'react';
import { ArrowRight, Building2, Calculator, CheckCircle2, Phone } from 'lucide-react';
import { COMPANY, CORE_SERVICES } from '../data';

const ICONS = { register: Building2, bookkeeping: Calculator };

export default function CoreServices() {
  return (
    <section className="section" id="services" data-component="core-services">
      <div className="container" data-reveal>
        <div className="sec-head">
          <span className="eyebrow">核心服务</span>
          <h2>
            从 <span className="grad-text">注册公司</span> 到{' '}
            <span className="grad-text">记账报税</span>，一步到位
          </h2>
          <p className="sec-lead">覆盖企业从设立到日常经营的全周期财税需求</p>
        </div>

        <div className="core-grid">
          {CORE_SERVICES.map((svc, idx) => {
            const Icon = ICONS[svc.key];
            return (
              <article
                className={`core-card ${idx % 2 === 1 ? 'core-card-alt' : ''}`}
                key={svc.key}
                data-component="core-service-card"
              >
                <div className="core-card-head">
                  <span className="core-icon">
                    <Icon size={30} aria-hidden="true" />
                  </span>
                  <div>
                    <span className="core-tag">{svc.tag}</span>
                    <h3>{svc.title}</h3>
                  </div>
                </div>
                <p className="core-lead">{svc.lead}</p>
                <ul className="core-points">
                  {svc.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={17} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="core-note">{svc.note}</p>
                <a className="core-cta" href={`tel:${COMPANY.phoneRaw}`}>
                  咨询{svc.title}
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
