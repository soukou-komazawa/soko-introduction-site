// src/lib/particles-config.ts

import type { ISourceOptions } from "@tsparticles/engine";

export const options: ISourceOptions = {
  background: {
    color: {
      value: "#FDFCF7", // 背景色
    },
  },
  fpsLimit: 60,
  particles: {
    // ▼▼▼ ここから下が、テーマを反映させるための主要な変更点です ▼▼▼
    color: {
      value: ["#6A8E7F", "#F2B705"], // 草（緑）と光の粒（金）
    },
    // 【変更点】図形同士を繋ぐ線をなくし、より自然な印象に
    links: {
      enable: false,
    },
    // 【変更点】下から上へ、ゆっくりと昇る動きに変更
    move: {
      direction: "top",
      enable: true,
      outModes: {
        default: "out",
      },
      random: true,
      speed: 0.3, // 速度をさらに落とし、優雅に
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80, // 少し数を増やす
    },
    opacity: {
      value: { min: 0.2, max: 0.6 },
    },
    // 【変更点】図形を「線」と「円」の組み合わせに変更
    shape: {
      type: ["line", "circle"],
      options: {
        line: {
          length: { min: 10, max: 50}, // 長さをランダムに
        },
      }
    },
    // 【追加】線を少し回転させ、草が揺れているように見せる
    rotate: {
      value: { min: -15, max: 15 },
      random: true,
      direction: "random",
      animation: {
        enable: true,
        speed: 0.5,
      }
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};