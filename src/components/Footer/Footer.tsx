export const Footer = () => {
  return (
    <div className="container">
      <div className="logo">Nice Gadgets</div>
      <div className="navigation">
        <a href="github" className="navigation__link">github</a>
        <a href="contacts" className="navigation__link">contacts</a>
        <a href="rights" className="navigation__link">rights</a>
      </div>
      <div className="button-back">
        <a href="backToTop" className="button-back__anchor">Back to top</a>
      </div>
    </div>
  );
};
