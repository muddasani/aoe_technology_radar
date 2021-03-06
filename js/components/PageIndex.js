import React from 'react';
import HeroHeadline from './HeroHeadline';
import QuadrantGrid from './QuadrantGrid';
import Fadeable from './Fadeable';
import SetTitle from './SetTitle';

export default function PageIndex({ leaving, onLeave, items, navigate, ...props }) {
  return (
    <Fadeable leaving={leaving} onLeave={onLeave}>
      <SetTitle {...props} title="Technology Radar" />
      <div className="headline-group">
        <HeroHeadline alt="March 2017">AOE Technology Radar</HeroHeadline>
      </div>
      <QuadrantGrid items={items} />
    </Fadeable>
  );
}
