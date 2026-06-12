import React, { useMemo } from 'react';

const PokeBallsBackground = React.memo(({ count = 12 }) => {
  const balls = useMemo(() => Array.from({ length: count }).map((_, i) => {
    const size = 22 + Math.random() * 42;
    const style = {
      width: `${size}px`,
      height: `${size}px`,
      left: `${Math.random() * 93}%`,
      top: `${Math.random() * 93}%`,
      animationDuration: `${5 + Math.random() * 9}s`,
      animationDelay: `${Math.random() * 6}s`,
    };

    return (
      <div key={i} className="pb-float" style={style}>
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="47" fill="#e63946" stroke="#fff" strokeWidth="3"/>
          <rect x="3" y="47" width="94" height="6" fill="#fff"/>
          <circle cx="50" cy="53" r="47" fill="#edf2f4" clipPath={`url(#pb-${i})`}/>
          <clipPath id={`pb-${i}`}><rect x="0" y="50" width="100" height="50"/></clipPath>
          <circle cx="50" cy="50" r="12" fill="#fff" stroke="#333" strokeWidth="2.5"/>
        </svg>
      </div>
    );
  }), [count]);

  return (
    <div className="pb-scatter">
      {balls}
    </div>
  );
});

export default PokeBallsBackground;
