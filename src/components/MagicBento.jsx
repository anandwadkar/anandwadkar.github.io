import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const MagicBento = ({ children, className = '', enableStars = true, enableSpotlight = true, enableBorderGlow = true, particleCount = 12, enableTilt = true, enableMagnetism = true, clickEffect = true }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 200 });
  const springConfig = { damping: 15, stiffness: 150 };
  const magnetX = useSpring(0, springConfig);
  const magnetY = useSpring(0, springConfig);

  useEffect(() => {
    if (enableStars) setParticles(Array.from({ length: particleCount }, () => ({ id: Math.random(), x: Math.random() * 100, y: Math.random() * 100, size: Math.random() * 2 + 1, duration: Math.random() * 2 + 1 })));
  }, [enableStars, particleCount]);

  const handleMouseMove = (event) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x); mouseY.set(y);
    if (enableMagnetism) { magnetX.set(x * 10); magnetY.set(y * 10); }
  };
  const handleMouseLeave = () => {
    setIsHovered(false); mouseX.set(0); mouseY.set(0);
    if (enableMagnetism) { magnetX.set(0); magnetY.set(0); }
  };

  return <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={handleMouseLeave} whileTap={clickEffect ? { scale: 0.98 } : {}} style={{ rotateX: enableTilt && isHovered ? rotateX : 0, rotateY: enableTilt && isHovered ? rotateY : 0, x: enableMagnetism ? magnetX : 0, y: enableMagnetism ? magnetY : 0, transformStyle: 'preserve-3d' }} className={`relative rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50 overflow-hidden transition-shadow duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 ${className}`}>
    {enableSpotlight && isHovered && <motion.div className="pointer-events-none absolute -inset-px rounded-3xl" style={{ background: `radial-gradient(400px circle at calc(${mouseX.get() * 100 + 50}%) calc(${mouseY.get() * 100 + 50}%), rgba(79, 70, 229, 0.08), transparent 40%)`, opacity: 1 }} />}
    {enableBorderGlow && isHovered && <motion.div className="absolute inset-0 z-0 border-2 border-transparent bg-clip-border mix-blend-overlay rounded-3xl" style={{ background: `radial-gradient(circle at calc(${mouseX.get() * 100 + 50}%) calc(${mouseY.get() * 100 + 50}%), rgba(79, 70, 229, 0.4), transparent 50%)`, WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />}
    {enableStars && isHovered && <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">{particles.map(p => <motion.div key={p.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: [0, 1, 0], y: -20 }} transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut' }} className="absolute bg-indigo-400 rounded-full blur-[1px]" style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }} />)}</div>}
    <div className="relative z-10 h-full w-full p-6 text-gray-800" style={{ transform: 'translateZ(20px)' }}>{children}</div>
  </motion.div>;
};
export default MagicBento;
