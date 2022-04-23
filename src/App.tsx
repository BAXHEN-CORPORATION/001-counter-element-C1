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
          sulfix="M"
          counterTo={4}
          title="4 million daily active users"
          animation="right"
        />
        <CounterElement
          sulfix="k"
          counterTo={12}
          title="Over 12k open job positions"
          animation="up"
        />
        <CounterElement
          sulfix="M"
          counterTo={20}
          title="Over 20 million stories shared"
          animation="left"
        />
      </Section>
    </Container>
  );
}
