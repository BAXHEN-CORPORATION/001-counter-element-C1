import "./styles.css";
import "./fonts.css";

import Container from "./components/Container";
import CounterElement from "./components/CounterElement";
import Section from "./components/Section";

export default function App(): JSX.Element {
  return (
    <Container>
      <Section>
        <CounterElement
          prefix="+"
          suffix="M"
          counterTo={4}
          title="4 plus million daily active users"
          animation="right"
        />
        <CounterElement
          suffix="k"
          counterTo={12}
          title="Over 12k open job positions"
          animation="up"
        />
        <CounterElement
          suffix="M"
          counterTo={20}
          title="Over 20 million stories shared"
          animation="left"
        />
      </Section>
    </Container>
  );
}
