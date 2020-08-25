import React, { useState, useEffect } from "react";
import { localStorageGetFavouriteList } from "utils/localStorage";
import map from "lodash/map";

export default ({ favouriteList }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(localStorageGetFavouriteList("favouriteList"));
  }, [favouriteList]);
  return (
    <div className="favouritelist">
      <div className="favouritelist__header">
        <h4>Favourite List</h4>
      </div>
      <div className="favouritelist__content content">
        {map(list, (people) => {
          return (
            <div
              className="content__item"
              key={people.md5}
              style={{ backgroundImage: `url(${people.picture})` }}
            >
              <p>{`${people.name.first || ""} ${people.name.last || ""}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
