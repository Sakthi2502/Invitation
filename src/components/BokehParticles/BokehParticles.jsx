import './BokehParticles.css';

const BokehParticles = ({ count = 40 }) => {
  const dots = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    opacity: Math.random() * 0.5 + 0.2,
    delay: Math.random() * 5,
    duration: Math.random() * 6 + 4,
  }));

  return (
    <div className="bokeh-particles" aria-hidden="true">
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="bokeh-dot"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
            animationDelay: `${dot.delay}s`,
            animationDuration: `${dot.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BokehParticles;
