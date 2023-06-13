/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import {
  getPhones,
  getAllPhones,
} from '../../api/phones';
import { Phone } from '../../types/Phone';

export const ProductTable = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [error, setError] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [itemsOnPage, setItemsOnPage] = useState('8');
  const [currentPage, setCurrentPage] = useState('1');
  const [allPageCount, setAllPageCount] = useState<string[]>([]);

  const getPhonesFromServer = async () => {
    try {
      const phonesFromServer: Phone[] = await getPhones(
        sortBy,
        itemsOnPage,
        currentPage,
      );

      setPhones(phonesFromServer);
    } catch {
      setError('can not phones error!');
    }
  };

  const setPagination = async () => {
    const allPhones = await getAllPhones();
    const pageCount = allPhones.length / Number(itemsOnPage);
    const pageCountArr = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= pageCount; i++) {
      pageCountArr.push(i.toString());
    }

    setAllPageCount(pageCountArr);
  };

  // eslint-disable-next-line no-console
  console.log(currentPage);

  useEffect(() => {
    getPhonesFromServer();
    setPagination();
  }, []);

  useEffect(() => {
    getPhonesFromServer();
  }, [sortBy, itemsOnPage, currentPage]);

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
                onChange={(event) => {
                  setSortBy(event.target.value);
                }}
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="low">Low Price</option>
                <option value="high">High Price</option>
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
                onChange={(event) => {
                  setItemsOnPage(event.target.value);
                }}
              >
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="32">32</option>
                <option value="64">64</option>
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
            className="pagination is-rounded is-small"
            role="navigation"
            aria-label="pagination"
          >
            <ul className="pagination-list">
              <li className="pagination-previous">
                <img
                  alt="Vector(Stroke)"
                  src="icons/Vector(Stroke).svg"
                  className="pagination-prev-icon"
                  onClick={() => {
                    if (currentPage === '1') {
                      return;
                    }

                    setCurrentPage((prev) => (Number(prev) - 1).toString());
                  }}
                />
              </li>

              {allPageCount.map(page => (
                <li
                  key={page}
                  className={cn('pagination-link', {
                    'is-current': currentPage === page,
                  })}
                  aria-label="Goto page 1"
                  onClick={() => {
                    setCurrentPage(page);
                  }}
                >
                  {page}
                </li>
              ))}

              <li className="pagination-next">
                <img
                  alt="Vector(Stroke)"
                  src="icons/Vector(Stroke).svg"
                  className="pagination-next-icon"
                  onClick={() => {
                    if (currentPage === '8') {
                      return;
                    }

                    setCurrentPage((prev) => (Number(prev) + 1).toString());
                  }}
                />
              </li>
            </ul>
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
