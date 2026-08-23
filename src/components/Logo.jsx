import React from 'react';

/**
 * 达富财务品牌标识（SVG 还原）
 * 形态：橙红渐变平行四边形 + 白色速度线 + 向上箭头，呼应官方 Logo 的动感语言
 */
export function LogoMark({ size = 40, gid = 'dfg' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="达富财务标志"
      className="logo-mark"
    >
      <defs>
        <linearGradient id={`${gid}-grad`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FF8A00" />
          <stop offset="1" stopColor="#FF2D00" />
        </linearGradient>
      </defs>
      <path
        d="M7 5 H37 L45 43 H3 Z"
        fill={`url(#${gid}-grad)`}
      />
      <path d="M14 17 H34" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M12 25 H37" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M10 33 H32" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
      <path
        d="M36 8 l7 7 -7 7"
        fill="none"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({ size = 40, gid = 'dfg', stacked = false }) {
  return (
    <span className={`brand ${stacked ? 'brand-stacked' : ''}`}>
      <LogoMark size={size} gid={gid} />
      <span className="brand-text">
        <span className="brand-name">达富财务</span>
        {!stacked && <span className="brand-sub">财税咨询 · 代理记账</span>}
      </span>
    </span>
  );
}
