import React from 'react';
import { MapPin, Phone, User } from 'lucide-react';
import { COMPANY } from '../data';

export default function Contact() {
  return (
    <section className="section contact" id="contact" data-component="contact-section">
      <div className="container contact-grid" data-reveal>
        <div className="contact-info">
          <span className="eyebrow eyebrow-light">联系我们</span>
          <h2>
            需要财税服务？<span className="grad-text">马上联系达富财务</span>
          </h2>
          <p className="contact-lead">
            无论是新公司注册还是日常记账报税，直接来电或扫码加微信，专业顾问为您一对一解答。
          </p>

          <ul className="contact-list">
            <li>
              <span className="contact-ico">
                <User size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="contact-label">业务联系人</p>
                <p className="contact-value">{COMPANY.contactPerson}</p>
              </div>
            </li>
            <li>
              <span className="contact-ico">
                <Phone size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="contact-label">咨询电话</p>
                <a className="contact-value contact-tel" href={`tel:${COMPANY.phoneRaw}`}>
                  {COMPANY.phone}
                </a>
              </div>
            </li>
            <li>
              <span className="contact-ico">
                <MapPin size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="contact-label">公司地址</p>
                <p className="contact-value">{COMPANY.address}</p>
              </div>
            </li>
          </ul>

          <div className="contact-cities">
            <span className="contact-label">服务城市</span>
            <div className="city-chips">
              {COMPANY.cities.map((city) => (
                <span className="city-chip" key={city}>
                  {city}
                </span>
              ))}
            </div>
          </div>

          <a className="btn btn-primary btn-lg" href={`tel:${COMPANY.phoneRaw}`}>
            <Phone size={18} aria-hidden="true" />
            拨打 {COMPANY.phone}
          </a>
        </div>

        <div className="contact-qr-wrap">
          <figure className="contact-qr">
            <img src="/assets/images/qr-wechat.jpg" alt="达富财务微信咨询二维码" />
            <figcaption>扫码添加微信，一对一咨询</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
