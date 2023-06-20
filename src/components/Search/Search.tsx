/* eslint-disable jsx-a11y/no-autofocus */
import {
  ChangeEventHandler,
  // useEffect,
  useRef,
  // useState,
} from 'react';

type Props = {
  query: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClear: () => void;
};

export const Search: React.FC<Props> = ({ query, onChange, onClear }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // const [shouldAutofocus, setShouldAutofocus] = useState(false);

  // useEffect(() => {
  //   if (shouldAutofocus && inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, [shouldAutofocus]);

  // const handleClick = () => {
  //   setShouldAutofocus(true);
  // };

  return (
    <div>
      <div className="search-container">
        <div className="demo-flex-spacer" />
        <div className="search-style-input">
          <img
            src="icons/Search/Search.svg"
            alt="search icon"
            className="search"
          />
          <input
            type="text"
            placeholder="Find your iPhone"
            className="input__text"
            value={query}
            onChange={onChange}
            ref={inputRef}
          />
          {query && (
            <button className="clear" type="button" onClick={onClear}>
              x
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
