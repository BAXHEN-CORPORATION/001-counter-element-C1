import React from "react";
import { Root, CounterWrapper, Title, Counter, Prefix, Suffix } from "./styles";

import { TSlideAnimations, getSlideAnimations } from "../../animations";

export interface CounterElementProps {
  prefix?: string;
  suffix?: string;
  counterTo: number;
  title: string;
  animation?: TSlideAnimations;
}

const CounterElement: React.FC<CounterElementProps> = ({
  suffix,
  prefix,
  title,
  counterTo,
  animation,
}) => {
  const [counter, setCounter] = React.useState(0);
  const INTERVAL = 1000;
  const DURATION = Math.floor(INTERVAL / counterTo);

  React.useEffect(() => {
    if (counter === counterTo) {
      return;
    }
    const timer = setTimeout(() => {
      setCounter(counter + 1);
    }, DURATION);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [counter, counterTo, DURATION]);

  return (
    <Root animation={getSlideAnimations(animation)}>
      <CounterWrapper>
        <Prefix>{prefix}</Prefix>
        <Counter>{counter}</Counter>
        <Suffix>{suffix}</Suffix>
      </CounterWrapper>
      <Title>{title}</Title>
    </Root>
  );
};

export default CounterElement;
