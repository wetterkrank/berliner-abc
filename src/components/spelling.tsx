import { Component } from "react";
import Letter from './letter';

type SpellingProps = {
  name: string | null
}

class Spelling extends Component<SpellingProps, {}> {
  render() {
    const { name } = this.props;
    if (name === null) return null;

    const letters: [string, number][] = name.split('').map((letter, i) => [letter.toUpperCase(), i]);
    return (
      <ul className="spelling">
        {letters.map(lttr => <Letter contents={lttr[0]} key={lttr[1]} />)}
      </ul>
    )
  }
}

export default Spelling;