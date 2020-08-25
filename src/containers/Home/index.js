import React, { useEffect } from "react";
import { Card, FavouriteList } from "components/Home";
import {
  SwipeableList,
  SwipeableListItem,
} from "@sandstreamdev/react-swipeable-list";
import {
  localStorageGetFavouriteList,
  localStorageSetItem,
} from "utils/localStorage";
import uniq from "lodash/uniq";
import { ProfileActions } from "store/actions";
import { connect } from "react-redux";

function Home({ profile, favouriteList, updateProfile, favouriteFriend }) {
  useEffect(() => {
    updateProfile();
  }, [updateProfile]);

  const onFavourite = () => {
    const list = localStorageGetFavouriteList("favouriteList");
    localStorageSetItem("favouriteList", uniq([...list, profile]));
    favouriteFriend(uniq([...list, profile]));
    updateProfile();
  };
  return (
    <div>
      <FavouriteList favouriteList={favouriteList} />
      <div className="swipe">
        <div className="swipe__content">
          <SwipeableList>
            <SwipeableListItem
              swipeLeft={{
                content: (
                  <div className="swipe__lable lable swipe__lable--red">
                    next person
                  </div>
                ),
                action: () => updateProfile(),
              }}
              swipeRight={{
                content: (
                  <div className="swipe__lable lable swipe__lable--gray">
                    favourite
                  </div>
                ),
                action: () => onFavourite(),
              }}
            >
              <Card profile={profile} />
            </SwipeableListItem>
          </SwipeableList>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    favouriteList: state.profileReducer.favouriteList,
  };
};

const mapDispatchToProps = {
  updateProfile: ProfileActions.updateProfile,
  favouriteFriend: ProfileActions.favouriteFriend,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
