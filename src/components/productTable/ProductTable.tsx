export const ProductTable = () => {
  const array = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 20; i++) {
    array.push(i);
  }

  return (
    <div className="productTable">
      <div className="productTable__path">
        <div className="productTable__path__homeIcon" />

        <div className="productTable__path__arrow" />

        <span className="productTable__path__text">
          Phones
        </span>
      </div>

      <h2 className="productTable__heading">
        Mobile phones
      </h2>

      <span className="productTable__modelsCount">
        95 models
      </span>

      <div>
        <label htmlFor="sortBy" className="productTable__sortby">
          <select name="sortBy" id="sortBy">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </label>

        <label htmlFor="itemsOnPage" className="productTable__itemsOnPage">
          <select name="itemsOnPage" id="itemsOnPage">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="16">16</option>
          </select>
        </label>
      </div>

      <div className="productTable__productList">
        {
          array.map(num => (
            <div className="productCard">
              <span className="productCard__content">
                {num}
              </span>
            </div>
          ))
        }
      </div>

    </div>
  );
};
