import { useParams } from "react-router-dom";

import Letter from './letter';

type SpellingParams = {
  name: string
}

function Spelling() {
  let { name } = useParams<SpellingParams>();
  if (!name) return null;

  const letters: [string, number][] = name.split('').map((letter, i) => [letter.toUpperCase(), i]);
  return (
    <ul className="spelling">
      {letters.map(lttr => <Letter contents={lttr[0]} key={lttr[1]} />)}
    </ul>
  )
}

export default Spelling;
