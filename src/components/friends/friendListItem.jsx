import css from './friends.module.css';
export function FriendListItem ({avatar, name, isOnline, id}){

    const spanStyles = {
        boxShadow: "rgba(31, 31, 31, 0.5) 0px 2px 10px",
    width: '20px',
    height: "20px",
    borderRadius:"50%",
    backgroundColor: isOnline ? 'green' : 'red',
      };
return ( 
    <li className={css.item} key={id}>
  <span style={spanStyles}></span>
  <img src={avatar} alt={name} className={css.avatar}/>
  <p className={css.name}>{name}</p>
</li>
)
}
