import abc from '../data/abc';

type LetterProps = {
  contents: string;
}

const get_random = function (list: string[]): string {
  return list[Math.floor((Math.random()*list.length))];
}

const Letter = ({ contents }: LetterProps) => {
  const wordOpts = abc[contents];
  const word = typeof wordOpts === 'string' ? wordOpts : get_random(wordOpts)
  return (
    <li className="spelling__letter">
      <div className="letter__initial">
        <div className="letter__initial-text">{contents}</div>
      </div>
      <span className="letter__line">for <span className="letter__line-word">{word}</span></span>
    </li>
  );
}

export default Letter;
