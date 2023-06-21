/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ChangeEventHandler, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
// import debounce from 'lodash/debounce';
import { getPhones, getAllPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';
import { Loader } from '../Loader';
import { Card } from '../Card/Card';
import { Search } from '../Search';
import { NoSearchResults } from '../NoSearchResult';

const debounceTimer = 1000;

export const ProductTable = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [error, setError] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [itemsOnPage, setItemsOnPage] = useState('8');
  const [currentPage, setCurrentPage] = useState('1');
  const [allPageCount, setAllPageCount] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [phonesTotalCount, setPhonesTotalCount] = useState('');
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');
  // eslint-disable-next-line max-len
  const [debouncedQuery, setDebouncedQuery] = useState<NodeJS.Timeout | null>(null);

  const getPhonesFromServer = async () => {
    try {
      setIsLoading(true);
      const phonesFromServer: Phone[] = await getPhones(
        sortBy,
        itemsOnPage,
        currentPage,
        appliedQuery,
      );

      setPhones(phonesFromServer);
      setIsLoading(false);
    } catch (err) {
      setError('can not load phones error!');
    }
  };

  const setPagination = async () => {
    const allPhones = await getAllPhones();
    const newQuery = appliedQuery
      .trim()
      .toLocaleLowerCase()
      .split(' ')
      .join('-');
    const filteredPhones = allPhones
      .filter(phone => phone.phoneId?.includes(newQuery));
    let pageCount = filteredPhones.length / Number(itemsOnPage);

    pageCount = pageCount > 8 ? pageCount + 1 : pageCount;
    const pageCountArr = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= pageCount; i++) {
      pageCountArr.push(i.toString());
    }

    setPhonesTotalCount(filteredPhones.length.toString());
    setAllPageCount(pageCountArr);
  };

  useEffect(() => {
    setPagination();
    getPhonesFromServer();
  }, [itemsOnPage, currentPage, sortBy, appliedQuery]);

  // useEffect(() => {
  //   if (query) {
  //     const debounceTimer = setTimeout(() => {
  //       getPhonesFromServer();
  //     }, 1000);

  //     setTimeout(() => {
  //       clearTimeout(debounceTimer);
  //     }, 1000);

  //     return () => {
  //       clearTimeout(debounceTimer);
  //     };
  //   }

  //   return () => {};
  // }, [query]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentQuery = event.target.value;

    setQuery(currentQuery);

    if (debouncedQuery !== null) {
      clearTimeout(debouncedQuery as never);
    }

    const newDebouncedQuery = setTimeout(() => {
      setAppliedQuery(currentQuery);
      if (currentPage !== '1') {
        setCurrentPage('1');
      }
    }, debounceTimer);

    setDebouncedQuery(newDebouncedQuery);
  };

  const handleClear = () => {
    setQuery('');
    setAppliedQuery('');
  };

  return (
    <div className="productTable__wraper">
      <div className="productTable width_when_loading">
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

        {isLoading ? (
          <Loader />
        ) : phones.length === 0 ? (
          <NoSearchResults />
        ) : (
          <>
            <div className="productTable__modelsCount">
              {`${phonesTotalCount} models`}
            </div>

            <div className="productTable__selects">
              <label htmlFor="sortBy">
                <div>
                  <div className="productTable__selects__text">Sort by</div>

                  <select
                    name="sortBy"
                    id="sortBy"
                    className="select productTable__selects__sortby"
                    value={sortBy}
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
                  <div className="productTable__selects__text">
                    Items on page
                  </div>

                  <select
                    name="itemsOnPage"
                    id="itemsOnPage"
                    className="select productTable__selects__itemsOnPage"
                    value={itemsOnPage}
                    onChange={(event) => {
                      setPagination();
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

              <Search
                query={query}
                onChange={handleInputChange}
                onClear={handleClear}
              />
            </div>

            <div className="productTable__productList">
              {phones.map((phone) => (
                <Card phone={phone} key={phone.id} />
              ))}
            </div>

            <div className="pagination_container">
              <nav
                className="pagination is-rounded is-small is-centered"
                role="navigation"
                aria-label="pagination"
              >
                <ul className="pagination-list">
                  <li
                    className="pagination-link"
                    onClick={() => {
                      if (currentPage === '1') {
                        return;
                      }

                      setCurrentPage((prev) => (Number(prev) - 1).toString());
                    }}
                  >
                    <img
                      alt="Vector(Stroke)"
                      src="icons/Vector(Stroke).svg"
                      className="pagination-icon"
                    />
                  </li>

                  {allPageCount.map((page) => (
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

                  <li
                    className="pagination-next"
                    onClick={() => {
                      if (currentPage === allPageCount.length.toString()) {
                        return;
                      }

                      setCurrentPage((prev) => (Number(prev) + 1).toString());
                    }}
                  >
                    <img
                      alt="Vector(Stroke)"
                      src="icons/Vector(Stroke).svg"
                      className="pagination-next-icon"
                    />
                  </li>
                </ul>
              </nav>
            </div>
          </>
        )}
        {phones.length === 0 && !isLoading && (
          <Search
            query={query}
            onChange={handleInputChange}
            onClear={handleClear}
          />
        )}
        {error && <div className="productTable__error">{error}</div>}
      </div>
    </div>
  );
};
