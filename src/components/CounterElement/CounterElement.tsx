import React from "react";
import {
  Root,
  CounterWrapper,
  CounterTitle,
  Counter,
  Prefix,
  Suffix,
} from "./styles";
import { TSlideAnimations, getSlideAnimations } from "../../animations";

export interface CounterElementProps {
  prefix?: string;
  suffix?: string;
  counterTo: number;
  title: string;
  animation?: TSlideAnimations;
  timeToCounterTo?: number;
}

const CounterElement: React.FC<CounterElementProps> = ({
  suffix,
  prefix,
  title,
  counterTo,

  animation,
  timeToCounterTo = 1000,
}) => {
  const [counter, setCounter] = React.useState(0);

  const duration = Math.floor(timeToCounterTo / counterTo);

  React.useEffect(() => {
    if (counter === counterTo) {
      return;
    }
    const timer = setTimeout(() => {
      setCounter(counter + 1);
    }, duration);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [counter, counterTo, duration]);

  return (
    <Root animation={getSlideAnimations(animation)}>
      <CounterWrapper>
        <Prefix>{prefix}</Prefix>
        <Counter>{counter}</Counter>
        <Suffix>{suffix}</Suffix>
      </CounterWrapper>
      <CounterTitle>{title}</CounterTitle>
    </Root>
  );
};

export default CounterElement;
