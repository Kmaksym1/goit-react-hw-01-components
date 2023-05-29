import PropTypes from 'prop-types';
import css from './friends.module.css';
import { FriendListItem } from './friendListItem';

export function FriendList({friends}){
    return (
        <ul className={css.friendList}>
            {friends.map(({avatar, name, isOnline, id})=>{
                return (
                <FriendListItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                id={id}
            />)})
            }
        </ul>   
    )}

    FriendList.propTypes = {
        friends: PropTypes.arrayOf(
          PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
          })
        )
      }
      