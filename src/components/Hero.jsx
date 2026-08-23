import React from 'react';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import LogoMark from './Logo';
import { COMPANY } from '../data';

export default function Hero() {
  return (
    <section className="hero" id="home" data-component="hero">
      <div className="hero-deco" aria-hidden="true">
        <span className="bar bar-1" />
        <span className="bar bar-2" />
        <span className="bar bar-3" />
        <span className="bar bar-4" />
        <span className="bar bar-5" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="chip chip-outline">
            <CheckCircle2 size={15} aria-hidden="true" />
            财政局批准 · 代理记账资质
          </span>
          <h1 className="hero-title">
            为每个创业者提供
            <span className="grad-text">最专业的财税服务</span>
          </h1>
          <p className="hero-lead">
            注册公司、记账报税、税务筹划、财务外包——广深莞佛一站式财税服务。
            把财务交给我们，把时间留给生意。
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href={`tel:${COMPANY.phoneRaw}`}>
              <Phone size={18} aria-hidden="true" />
              免费咨询 · {COMPANY.phone}
            </a>
            <a className="btn btn-outline btn-lg" href="#services">
              了解服务
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <ul className="hero-trust">
            <li>
              <CheckCircle2 size={16} aria-hidden="true" />
              18 项财税业务全覆盖
            </li>
            <li>
              <CheckCircle2 size={16} aria-hidden="true" />
              2020 广东省守合同重信用企业
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="false">
          <div className="hero-card">
            <div className="hero-card-top">
              <LogoMark size={92} gid="hero" />
              <div>
                <p className="hero-card-name">达富财务</p>
                <p className="hero-card-sub">财税咨询 · 代理记账</p>
              </div>
            </div>
            <div className="hero-tags">
              <span className="tag">注册公司</span>
              <span className="tag">记账报税</span>
            </div>
            <p className="hero-card-note">一站式财税服务 · 珠三角 6 城上门</p>
          </div>
        </div>
      </div>
    </section>
  );
}
