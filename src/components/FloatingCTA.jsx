import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY } from '../data';

export default function FloatingCTA() {
  return (
    <div className="floating-cta" data-component="floating-cta">
      <a className="floating-btn floating-phone" href={`tel:${COMPANY.phoneRaw}`}>
        <Phone size={18} aria-hidden="true" />
        电话咨询
      </a>
      <a className="floating-btn floating-wechat" href="#contact">
        <MessageCircle size={18} aria-hidden="true" />
        微信咨询
      </a>
    </div>
  );
}
