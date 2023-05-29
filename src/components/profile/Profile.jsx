import PropTypes from 'prop-types';
const profile= {
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    paddingTop: '30px',
    borderRadius: '10px',
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30
}
const description = {
    textAlign: 'center',
}
const name = {
    margin: 30,
}

const locationStyle = {
    color: 'gray',
    fontSize: '30px',
    
}

const label = {
    color: 'gray',
    fontSize: '20px',
}
const quantity = {
    fontSize: '30px',
    fontWeight: 'bold',
}


const avatarStyle = {
    width: '30%',
    
    borderRadius: '50%',
    
}
const stats = {
    backgroundColor: '#d8d6d6',
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: "0px",
    paddingLeft: 0,
    height: 100,
}
const liStats={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
}
    
    export const Profile = ({username, tag, location, avatar, followers, views, likes})=>{
        return (
        <div style={profile}>
        <div style={description}>
            <img 
                src={avatar}
                alt="User avatar"
                style={avatarStyle}
            />
            <h4 style={name}>{username}</h4>
            <p style={locationStyle}>@{tag}</p>
            <p style={locationStyle}>{location}</p>
        </div>
        <ul style={stats}>
        <li style={liStats}>
            <span style={label}>Followers</span>
            <span style={quantity}>{followers}</span>
        </li>
        <li style={liStats}>
            <span style={label}>Views</span>
            <span style={quantity}>{views}</span>
        </li>
        <li style={liStats}>
            <span style={label}>Likes</span>
            <span style={quantity}>{likes}</span>
        </li>
        </ul>
</div>)
    }

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}