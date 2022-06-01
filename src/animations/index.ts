import { keyframes } from "styled-components";

export type TSlideAnimations = "up" | "left" | "right" | "down";

export const slideLeft = keyframes`
  0% {
    transform: translateX(3rem);
    opacity: 0;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideRight = keyframes`
  0% {
    transform: translateX(-3rem);
    opacity: 0;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideUp = keyframes`
  0% {
    transform: translateY(3rem);
    opacity: 0;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const slideDown = keyframes`
  0% {
    transform: translateY(-3rem);
    opacity: 0;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const getSlideAnimations = (key?: TSlideAnimations) => {
  if (!key) {
    return;
  }
  const slideAnimations = {
    up: slideUp,
    right: slideRight,
    left: slideLeft,
    down: slideDown,
  };

  return slideAnimations[key];
};
