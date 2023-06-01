import PropTypes from 'prop-types';
import css from './friends.module.css';
import { FriendListItem } from './friendListItem';

export function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  stats: PropTypes.exact({
    id: PropTypes.number.isRequired,
  }),
};
