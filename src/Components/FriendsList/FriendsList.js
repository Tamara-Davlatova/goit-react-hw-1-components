import React from 'react';
import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

import s from './FriendsList.module.css';

export default function FriendList({ friends }) {
  if (friends.langth === 0) return null;
  return <ul className={s.friends}>{friends.map(FriendListItem)}</ul>;
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
