/* eslint-disable max-len */
export const NoSearchResults = () => {
  return (
    <div className="no-search-results">
      <h3 className="no-search-results__title">No results found</h3>
      <img src="icons/Search/searchNotFound.svg" alt="notFound" />
      <p className="no-search-results__text">
        Sorry, there are no products matching your search query. Do you want to try again?
      </p>
    </div>
  );
};
