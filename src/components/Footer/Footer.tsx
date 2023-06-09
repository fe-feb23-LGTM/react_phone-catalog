import { HashLink as Link } from 'react-router-hash-link';

export const Footer = () => {
  return (
    <div className="container">
      <div className="logo">Nice Gadgets</div>
      <div className="navigation">
        <a
          href="https://github.com/fe-feb23-LGTM"
          className="navigation__link"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <a
          href="contacts"
          className="navigation__link"
        >
          contacts
        </a>
        <a
          href="rights"
          className="navigation__link"
        >
          rights
        </a>
      </div>
      <div className="button-back">
        <Link to="#header" className="button-back__anchor">Back to top</Link>
      </div>
    </div>
  );
};
