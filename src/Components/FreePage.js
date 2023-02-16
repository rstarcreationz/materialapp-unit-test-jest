import { useState, useRef, useEffect } from "react";

export const FreePage = () => {
  const ref = useRef();
  const List = [
    { value: "1", label: "lorem" },
    { value: "2", label: "ipsum" },
    { value: "3", label: "olive" },
    { value: "4", label: "mark" },
    { value: "5", label: "harry" },
    { value: "6", label: "joseph" },
    { value: "7", label: "henry" },
    { value: "8", label: "andrew" },
    { value: "9", label: "mickey" },
    { value: "10", label: "peter" },
  ];

  const [listState, setListState] = useState(List || []);
  const [searchValue, setSearchValue] = useState("");
  const [showList, setShowList] = useState(false);

  const [selectedItem, setSelectemItem] = useState([]);

  const searchHandler = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    if (value) {
      let array = List.filter((item) =>
        Object.values(item).join("").toLowerCase().includes(value.toLowerCase())
      );
      setListState(array);
    } else {
      setListState(List);
    }
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showList && ref.current && !ref.current.contains(e.target)) {
        setShowList(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showList]);

  // console.log("listState ...", listState);

  const selectHandler = (object) => {
    let array = [...selectedItem];
    array.push(object);
    setSelectemItem(array);
  };

  const removeHandler = (id) => {
    let array = [...selectedItem];
    array.splice(id, 1);
    setSelectemItem(array);
  };

  const createList = () => {
    let value = { value: searchValue, label: searchValue };
    let array = [...selectedItem];
    let array1 = [...listState];
    array.push(value);
    array1.push(value);
    setSelectemItem(array);
    setListState(array1);
    setSearchValue("");
  };

  console.log("item....", selectedItem);

  return (
    <div>
      <div class="signupFrm">
        <form action="" class="form" ref={ref}>
          <h1 class="title">Sign up</h1>

          <div class="inputContainer">
            <div
              className={showList ? "item-picker activeborder" : "item-picker"}
            >
              {selectedItem &&
                selectedItem.length > 0 &&
                selectedItem.map((element, key) => {
                  return (
                    <div
                      key={key}
                      className="MuiAutocomplete-tag css-5vxoam"
                      tabindex="-1"
                      role="button"
                      data-tag-index="0"
                    >
                      <span class="">{element.label}</span>
                      <svg
                        onClick={() => removeHandler(key)}
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="CancelIcon"
                      >
                        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                      </svg>
                    </div>
                  );
                })}

              <input
                type="text"
                class="input"
                placeholder="a"
                onChange={(e) => searchHandler(e)}
                onClick={() => setShowList(true)}
                value={searchValue}
              />
              <label for="" class="label">
                tags
              </label>
            </div>
          </div>
          {showList && (
            <div className="listing-wrapper">
              <ul className="listing-ul">
                {listState &&
                  listState.length > 0 &&
                  listState.map((item, key) => {
                    return (
                      <li key={key} onClick={() => selectHandler(item)}>
                        {item.label}
                      </li>
                    );
                  })}
                {searchValue && listState.length <= 0 && (
                  <li className="noavailable">
                    <strong>No result found for "{searchValue}"</strong>{" "}
                    <button
                      className="create-button"
                      onClick={() => createList()}
                    >
                      Create
                    </button>{" "}
                  </li>
                )}
              </ul>
            </div>
          )}
          {/* {searchValue && listState.length <= 0 && (
            <div className="listing-wrapper">
              <ul>
                <li className="noavailable">
                  <strong>NO result found for "{searchValue}"</strong>{" "}
                  <button className="create-button">Create</button>{" "}
                </li>
              </ul>
            </div>
          )} */}

          {/* <input type="submit" class="submitBtn" value="Sign up" /> */}
        </form>
      </div>

      {/* <div className="autocomplete-div">
        <div className="form-control-div">
          <label
            class=""
            data-shrink="true"
            for="tags-outlined"
            id="tags-outlined-label"
          >
            filterSelectedOptions
          </label>
          <div className="autocomplete-wrapper">
            <div
              className="MuiAutocomplete-tag css-5vxoam"
              tabindex="-1"
              role="button"
              data-tag-index="0"
            >
              <span class="">The Shawshank Redemption</span>
              <svg
                class=""
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CancelIcon"
              >
                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
              </svg>
            </div>

            <input
              aria-invalid="false"
              autocomplete="off"
              id="tags-outlined"
              placeholder="Favorites"
              type="text"
              class=""
              aria-autocomplete="list"
              aria-expanded="false"
              autocapitalize="none"
              spellcheck="false"
              role="combobox"
              value=""
            />
            <div className="right-div">
              <button
                class=""
                tabindex="-1"
                type="button"
                aria-label="Clear"
                title="Clear"
              >
                <svg
                  class=""
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CloseIcon"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
                <span class=""></span>
              </button>
              <button
                class=""
                tabindex="-1"
                type="button"
                aria-label="Open"
                title="Open"
              >
                <svg
                  class=""
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ArrowDropDownIcon"
                >
                  <path d="M7 10l5 5 5-5z"></path>
                </svg>
                <span class=""></span>
              </button>
            </div>
            <fieldset aria-hidden="true">
              <legend>
                <span>filterSelectedOptions</span>
              </legend>
            </fieldset>
          </div>
        </div>
      </div> */}
    </div>
  );
};
