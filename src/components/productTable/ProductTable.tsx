import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';

export const ProductTable = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [error, setError] = useState('');

  const getPhonesFromServer = async () => {
    try {
      const phonesFromServer: Phone[] = await getPhones();

      setPhones(phonesFromServer);
    } catch {
      setError('Get phones error!');
    }
  };

  useEffect(() => {
    getPhonesFromServer();
  }, []);

  return (
    <div className="productTable__wraper">
      <div className="productTable">
        <div className="productTable__path">
          <NavLink to="/">
            <img
              src="icons/Home.svg"
              alt="icons/Home"
              className="icons productTable__path__homeIcon"
            />
          </NavLink>

          <img
            alt="Vector(Stroke)"
            src="icons/Vector(Stroke).svg"
            className="icons productTable__path__arrow"
          />

          <span className="productTable__path__text">Phones</span>
        </div>

        <h2 className="productTable__heading">Mobile phones</h2>

        <div className="productTable__modelsCount">95 models</div>

        <div className="productTable__selects">
          <label htmlFor="sortBy">
            <div>
              <div className="productTable__selects__text">Sort by</div>

              <select
                name="sortBy"
                id="sortBy"
                className="select productTable__selects__sortby"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </label>

          <label htmlFor="itemsOnPage">
            <div>
              <div className="productTable__selects__text">Items on page</div>

              <select
                name="itemsOnPage"
                id="itemsOnPage"
                className="select productTable__selects__itemsOnPage"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="16">16</option>
              </select>
            </div>
          </label>
        </div>

        <div className="productTable__productList">
          {phones.map(phone => (
            <div key={phone.id} className="productCard">
              <span className="productCard__content">{phone.name}</span>
            </div>
          ))}
        </div>

        <div className="pagination_container">
          <nav
            className="pagination is-rounded is-centered is-small"
            role="navigation"
            aria-label="pagination"
          >
            <a className="pagination-previous" href="/">
              <img
                alt="Vector(Stroke)"
                src="icons/Vector(Stroke).svg"
                className="pagination-prev-icon"
              />
            </a>
            <ul className="pagination-list">
              <li>
                <a
                  className="pagination-link"
                  aria-label="Goto page 1"
                  href="/"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  className="pagination-link"
                  aria-label="Goto page 45"
                  href="/"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  className="pagination-link is-current"
                  aria-label="Page 46"
                  aria-current="page"
                  href="/"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  className="pagination-link"
                  aria-label="Goto page 47"
                  href="/"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  className="pagination-link"
                  aria-label="Goto page 86"
                  href="/"
                >
                  5
                </a>
              </li>
            </ul>
            <a className="pagination-next" href="/">
              <img
                alt="Vector(Stroke)"
                src="icons/Vector(Stroke).svg"
                className="pagination-next-icon"
              />
            </a>
          </nav>
        </div>

        { error && (
          <div className="productTable__error">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};
