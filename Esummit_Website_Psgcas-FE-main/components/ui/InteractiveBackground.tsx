'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse tracker
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
      isActive: false
    };

    // Responsive particle count
    const isMobile = width < 768;
    const particleCount = prefersReducedMotion ? 25 : isMobile ? 35 : 70;
    const maxLineDistance = isMobile ? 85 : 120;

    // Theme colors: Gold & Soft Tech Blue
    const colors = [
      'rgba(254, 202, 90, ', // Gold accent
      'rgba(212, 175, 55, ', // Deep gold
      'rgba(110, 147, 209, ', // PSG Tech Blue
      'rgba(214, 227, 255, ', // Light blue node
    ];

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 1.8 + 1;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.2 : 0.6),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.2 : 0.6),
        radius,
        baseRadius: radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isActive = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
        mouse.isActive = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.isActive = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    const parent = canvas.parentElement || window;
    parent.addEventListener('mousemove', handleMouseMove as any);
    parent.addEventListener('mouseleave', handleMouseLeave as any);
    parent.addEventListener('touchmove', handleTouchMove as any, { passive: true });
    parent.addEventListener('touchend', handleTouchEnd as any);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle cursor glow if active
      if (mouse.isActive && !prefersReducedMotion && !isMobile) {
        const glowGradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, mouse.radius * 1.2
        );
        glowGradient.addColorStop(0, 'rgba(254, 202, 90, 0.08)');
        glowGradient.addColorStop(0.5, 'rgba(110, 147, 209, 0.04)');
        glowGradient.addColorStop(1, 'rgba(0, 22, 52, 0)');
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Natural movement
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges gently
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction (repel / attract gently)
        if (mouse.isActive && !prefersReducedMotion) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            // Subtle push away
            p.x -= forceDirectionX * force * 1.8;
            p.y -= forceDirectionY * force * 1.8;
            p.radius = p.baseRadius * 1.4;
          } else {
            p.radius = p.baseRadius;
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < maxLineDistance) {
            const lineAlpha = (1 - dist / maxLineDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(214, 227, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      parent.removeEventListener('mousemove', handleMouseMove as any);
      parent.removeEventListener('mouseleave', handleMouseLeave as any);
      parent.removeEventListener('touchmove', handleTouchMove as any);
      parent.removeEventListener('touchend', handleTouchEnd as any);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
