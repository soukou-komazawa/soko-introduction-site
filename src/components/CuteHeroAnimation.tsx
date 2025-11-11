'use client';

import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions, Container } from "@tsparticles/engine"; 
import { loadFull } from "tsparticles"; 

const cuteParticlesOptions: ISourceOptions = {
  background: {
    color: { value: "#2F3D37" }, // ヒーローの背景色
  },
  fpsLimit: 60,
  particles: {
    number: { value: 15 },
    color: { value: ["#F2B705", "#FDFCF7"] }, // 金色とクリーム色
    shape: {
      type: "polygon", // 多角形
      options: {
        polygon: {
          sides: 6, // 6角形（花びらのよう）
        },
      },
    },
    opacity: {
      value: { min: 0.3, max: 0.8 },
    },
    size: {
      value: { min: 10, max: 20 },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "bottom", // 下にゆっくり落ちる
      drift: {
        min: -2,
        max: 2,
      }, // 左右に揺れながら
      straight: false,
      outModes: {
        default: "out",
      },
    },
  },
  detectRetina: true,
};


const CuteHeroAnimation = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  
  if (init) {
    return (
      <Particles
        id="cute-hero-particles"
        options={cuteParticlesOptions}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />
    );
  }
  return null;
};
export default CuteHeroAnimation;