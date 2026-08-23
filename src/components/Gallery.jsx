import React from 'react';

const SHOTS = [
  {
    src: '/assets/images/brand-dinner.jpg',
    alt: '达富财务 723 财税创新晚宴活动现场',
    caption: '723 财税创新晚宴 — 与行业伙伴共话财税创新',
  },
  {
    src: '/assets/images/flyer-info.jpg',
    alt: '达富财务公司宣传单，含服务范围与资质信息',
    caption: '公司宣传资料 — 服务与资质一览',
  },
];

export default function Gallery() {
  return (
    <section className="section" id="gallery" data-component="atmosphere">
      <div className="container" data-reveal>
        <div className="sec-head">
          <span className="eyebrow">公司实况</span>
          <h2>真实的服务现场</h2>
          <p className="sec-lead">专注财税，持续深耕——用心服务每一位客户</p>
        </div>

        <div className="gallery-grid">
          {SHOTS.map((shot) => (
            <figure className="gallery-figure" key={shot.src}>
              <img src={shot.src} alt={shot.alt} loading="lazy" />
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
