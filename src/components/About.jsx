import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { COMPANY } from '../data';

const POINTS = [
  '经财政局批准、具备代理记账资质的专业机构',
  '注册会计师、税务师领衔，恪尽职守、保守客户机密',
  '广深莞佛本地团队，可上门对接，服务响应快',
];

export default function About() {
  return (
    <section className="section section-alt" id="about" data-component="about">
      <div className="container about-grid" data-reveal>
        <div className="about-copy">
          <span className="eyebrow">关于我们</span>
          <h2>
            深耕财税，助力每一位<span className="grad-text">创业者</span>轻装上阵
          </h2>
          <p>
            {COMPANY.fullName}（达富财务）是经财政局批准、具备代理记账资质的专业财税服务机构。
            团队由注册会计师、税务师领衔，深耕工商注册与财税服务多年，为珠三角创业者与企业提供
            从注册公司、记账报税，到税务筹划、财务外包的一站式服务。
          </p>
          <p>
            我们坚持「专业、务实、守信」的服务理念，以低成本运作帮助企业把财务交给专业的人，
            把时间留给生意。
          </p>
          <ul className="about-points">
            {POINTS.map((point) => (
              <li key={point}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-visual">
          <figure className="about-figure">
            <img
              src="/assets/images/reception-desk.jpg"
              alt="达富财务深圳办公前台实景"
              loading="lazy"
            />
            <figcaption className="about-chip">
              深圳市龙华区 · 达富财务办公实景
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
