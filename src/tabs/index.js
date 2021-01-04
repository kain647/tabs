import React, { Component } from "react";
import { Container, TitleContent } from "./styles";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 0 };
  }
  changeTab(index) {
    this.setState({
      active: index
    });
  }

  render() {
    const { active } = this.state;
    const { items } = this.props;
    return (
      <Container>
        <div className="tabs">
          {items.map((item, index) => (
            <div
              key={item.label}
              onClick={() => {
                this.changeTab(index);
              }}
              className={`tab ${active === index ? "active" : ""}`}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="content">{items[active].content}</div>
      </Container>
    );
  }
}
const Content = () => {
  return (
    <Tabs
      items={[
        {
          label: "Tesla",
          content: (
            <p>
              <TitleContent>Nikola Tesla</TitleContent> Serbian-American
              inventor, electrical engineer, mechanical engineer, physicist, and
              futurist best known for his contributions to the design of the
              modern alternating current (AC) electrical supply system. Tesla
              started working in the telephony and electrical fields before
              emigrating to the United States in 1884 to work for Thomas Edison.
              He soon struck out on his own with financial backers, setting up
              laboratories/companies to develop a range of electrical devices.
              His patented AC induction motor and transformer were licensed by
              George Westinghouse, who also hired Tesla as a consultant to help
              develop an alternating current system. Tesla is also known for his
              high-voltage, high-frequency power experiments in New York and
              Colorado Springs which included patented devices and theoretical
              work used in the invention of radio communication, for his X-ray
              experiments, and for his ill-fated attempt at intercontinental
              wireless transmission in his unfinished Wardenclyffe Tower
              project.
              <p className="textRight">
                <em>
                  Find out more about Nikola Tesla from{" "}
                  <a
                    href="http://en.wikipedia.org/wiki/Nikola_Tesla"
                    target="_blank"
                  >
                    Wikipedia
                  </a>
                  .
                </em>
              </p>
            </p>
          )
        },
        {
          label: "da Vinci",
          content: (
            <p>
              <TitleContent>Leonardo da Vinci</TitleContent> Italian Renaissance
              polymath: painter, sculptor, architect, musician, mathematician,
              engineer, inventor, anatomist, geologist, cartographer, botanist,
              and writer. His genius, perhaps more than that of any other
              figure, epitomized the Renaissance humanist ideal. Leonardo has
              often been described as the archetype of the Renaissance Man, a
              man of "unquenchable curiosity" and "feverishly inventive
              imagination". He is widely considered to be one of the greatest
              painters of all time and perhaps the most diversely talented
              person ever to have lived. According to art historian Helen
              Gardner, the scope and depth of his interests were without
              precedent and "his mind and personality seem to us superhuman, the
              man himself mysterious and remote". Marco Rosci states that while
              there is much speculation about Leonardo, his vision of the world
              is essentially logical rather than mysterious, and that the
              empirical methods he employed were unusual for his time.
              <p className="textRight">
                <em>
                  Find out more about Leonardo da Vinci from{" "}
                  <a
                    href="http://en.wikipedia.org/wiki/Leonardo_da_Vinci"
                    target="_blank"
                  >
                    Wikipedia
                  </a>
                  .
                </em>
              </p>
            </p>
          )
        },
        {
          label: "Einstein",
          content: (
            <p>
              <TitleContent>Albert Einstein</TitleContent> German-born
              theoretical physicist who developed the general theory of
              relativity, one of the two pillars of modern physics (alongside
              quantum mechanics). While best known for his mass–energy
              equivalence formula E = mc2 (which has been dubbed "the world's
              most famous equation"), he received the 1921 Nobel Prize in
              Physics "for his services to theoretical physics, and especially
              for his discovery of the law of the photoelectric effect". The
              latter was pivotal in establishing quantum theory. Near the
              beginning of his career, Einstein thought that Newtonian mechanics
              was no longer enough to reconcile the laws of classical mechanics
              with the laws of the electromagnetic field. This led to the
              development of his special theory of relativity. He realized,
              however, that the principle of relativity could also be extended
              to gravitational fields, and with his subsequent theory of
              gravitation in 1916, he published a paper on the general theory of
              relativity.
              <p className="textRight">
                <em>
                  Find out more about Albert Einstein from{" "}
                  <a
                    href="http://en.wikipedia.org/wiki/Albert_Einstein"
                    target="_blank"
                  >
                    Wikipedia
                  </a>
                  .
                </em>
              </p>
            </p>
          )
        },
        {
          label: "Newton",
          content: (
            <p>
              <TitleContent>Isaac Newton</TitleContent> English physicist and
              mathematician who is widely regarded as one of the most
              influential scientists of all time and as a key figure in the
              scientific revolution. His book Philosophiæ Naturalis Principia
              Mathematica ("Mathematical Principles of Natural Philosophy"),
              first published in 1687, laid the foundations for most of
              classical mechanics. Newton also made seminal contributions to
              optics and shares credit with Gottfried Leibniz for the invention
              of the infinitesimal calculus. Newton's Principia formulated the
              laws of motion and universal gravitation that dominated
              scientists' view of the physical universe for the next three
              centuries. It also demonstrated that the motion of objects on the
              Earth and that of celestial bodies could be described by the same
              principles. By deriving Kepler's laws of planetary motion from his
              mathematical description of gravity, Newton removed the last
              doubts about the validity of the heliocentric model of the cosmos.
              <p className="textRight">
                <em>
                  Find out more about Isaac Newton from{" "}
                  <a
                    href="http://en.wikipedia.org/wiki/Isaac_Newton"
                    target="_blank"
                  >
                    Wikipedia
                  </a>
                  .
                </em>
              </p>
            </p>
          )
        }
      ]}
    />
  );
};

export default Content;