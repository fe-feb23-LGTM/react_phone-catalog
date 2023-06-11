export const ProductTable = () => {
  const productKeys = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 20; i++) {
    productKeys.push(i);
  }

  return (
    <div className="productTable">
      <div className="productTable__path">
        <div className="icons productTable__path__homeIcon" />

        <div className="icons productTable__path__arrow" />

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
        {productKeys.map((productKey) => (
          <div key={productKey} className="productCard">
            <span className="productCard__content">{productKey}</span>
          </div>
        ))}
      </div>

      <div className="pagination_container">
        <nav
          className="pagination is-rounded is-centered is-small"
          role="navigation"
          aria-label="pagination"
        >
          <a className="pagination-previous" href="/">prev</a>
          <ul className="pagination-list">
            <li>
              <a className="pagination-link" aria-label="Goto page 1" href="/">
                1
              </a>
            </li>
            <li>
              <a className="pagination-link" aria-label="Goto page 45" href="/">
                45
              </a>
            </li>
            <li>
              <a
                className="pagination-link is-current"
                aria-label="Page 46"
                aria-current="page"
                href="/"
              >
                46
              </a>
            </li>
            <li>
              <a className="pagination-link" aria-label="Goto page 47" href="/">
                47
              </a>
            </li>
            <li>
              <a className="pagination-link" aria-label="Goto page 86" href="/">
                86
              </a>
            </li>
          </ul>
          <a className="pagination-next" href="/">next</a>
        </nav>
      </div>
    </div>
  );
};
