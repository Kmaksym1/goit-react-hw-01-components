import PropTypes from 'prop-types';
import css from './friends.module.css';
export function FriendListItem({ avatar, name, isOnline }) {

  return (
    <li className={css.item}>
      <span className={css.spanStyles}
      style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img src={avatar} alt={name} className={css.avatar} />
      <p className={css.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
