import abc from '../data/abc_beta';

type LetterProps = {
  contents: string;
}

const get_random = function (list: string[]): string {
  return list[Math.floor((Math.random() * list.length))];
}

const Letter = ({ contents }: LetterProps) => {
  // NOTE: Can TS warn about the possible 'undefined' in such a case?
  const wordOpts = abc[contents];
  if (typeof wordOpts === 'undefined') return null;

  const word = typeof wordOpts === 'string' ? wordOpts : get_random(wordOpts);
  // const imageBg = {
  //   backgroundImage: `url(${process.env.PUBLIC_URL}/img/${contents}.jpg)`,
  //   backgroundSize: 'cover'
  // }

  return (
    <li className="letter">
      <div className="letter__initial">
        <img src={`${process.env.PUBLIC_URL}/img/${contents}.jpg`} alt={word} />
        {/* <div className="letter__initial-text">{contents}</div> */}
      </div>
      <div className="letter__line">
        <div className="letter__line-contents">
          for <span className="letter__line-word">{word}</span>
        </div>
      </div>
    </li>
  );
}

export default Letter;
