"use client";

import { useEffect, useRef } from "react";

const NODE_COUNT = 75;
const CONNECT_DISTANCE = 130;
const SPEED = 0.25;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function NeuralNetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let points = [];

    const createPoints = () => {
      points = Array.from({ length: NODE_COUNT }, () => ({
        x: randomBetween(0, width),
        y: randomBetween(0, height),
        vx: randomBetween(-SPEED, SPEED),
        vy: randomBetween(-SPEED, SPEED),
      }));
    };

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      createPoints();
    };

    const animate = () => {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i += 1) {
        const point = points[i];

        point.x += point.vx;
        point.y += point.vy;

        if (point.x <= 0 || point.x >= width) point.vx *= -1;
        if (point.y <= 0 || point.y >= height) point.vy *= -1;

        point.x = Math.max(0, Math.min(width, point.x));
        point.y = Math.max(0, Math.min(height, point.y));

        for (let j = i + 1; j < points.length; j += 1) {
          const target = points[j];
          const dx = point.x - target.x;
          const dy = point.y - target.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECT_DISTANCE) {
            const alpha = (1 - distance / CONNECT_DISTANCE) * 0.25;
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(target.x, target.y);
            context.strokeStyle = `rgba(99, 102, 241, ${alpha.toFixed(3)})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }

        context.beginPath();
        context.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
        context.fillStyle = "rgba(59, 130, 246, 0.65)";
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(animate);
    };

    setCanvasSize();
    animate();

    window.addEventListener("resize", setCanvasSize);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-network-bg" aria-hidden="true" />;
}
