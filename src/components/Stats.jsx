import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { STATS } from '../data';

export default function Stats() {
  return (
    <section className="stats" data-component="stats" aria-label="达富财务关键信息">
      <div className="container stats-inner">
        {STATS.map((stat, i) => (
          <div className="stat" key={stat.label}>
            {stat.value === '资质' ? (
              <BadgeCheck className="stat-icon" size={34} aria-hidden="true" />
            ) : (
              <p className="stat-value">
                {stat.value}
                <span className="stat-unit">{stat.unit}</span>
              </p>
            )}
            <p className="stat-label">{stat.label}</p>
            {i < STATS.length - 1 && <span className="stat-divider" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </section>
  );
}
