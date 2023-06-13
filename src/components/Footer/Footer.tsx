import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export const Footer = () => {
  return (
    <div className="wrapper">
      <NavLink to="/" className="logo">
        <img
          src="icons/logo/Logo.svg"
          alt="logo"
        />
      </NavLink>
      <div className="navigation">
        <a
          href="https://github.com/fe-feb23-LGTM"
          className="navigation__link"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <NavLink to="contacts" className="navigation__link">Contacts</NavLink>
        <NavLink to="rights" className="navigation__link">Rights</NavLink>
      </div>
      <div className="button-back">
        <Link
          to="#header"
          className="button-back__anchor"
        >
          Back to top
        </Link>
        <Link
          to="#header"
          className="button-back__anchor"
        >
          <div className="button-back__wrapper">
            <img
              alt="backToTopImg"
              src="icons/Vector(Stroke).svg"
              className="button-back__img"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
