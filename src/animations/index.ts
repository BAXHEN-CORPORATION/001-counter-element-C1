import { keyframes } from "styled-components";

export type TSlideAnimations = "up" | "left" | "right" | "down";

export const slideLeft = keyframes`
  0% {
    transform: translate3d(3rem, 0, 0);
    opacity: 0;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const slideRight = keyframes`
  0% {
    transform: translate3d(-3rem, 0, 0);
    opacity: 0;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const slideUp = keyframes`
  0% {
    transform: translate3d(0, 3rem, 0);
    opacity: 0;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
export const slideDown = keyframes`
  0% {
    transform: translate3d(0, -3rem, 0);
    opacity: 0;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const getSlideAnimations = (key?: TSlideAnimations) => {
  if (!key) {
    return undefined;
  }
  const slideAnimations = {
    up: slideUp,
    right: slideRight,
    left: slideLeft,
    down: slideDown
  };

  return slideAnimations[key];
};
