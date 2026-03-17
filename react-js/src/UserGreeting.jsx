import PropTypes from './prop-types';

function UserGreeting(props){
   /* if(props.isLoggedIn){
        return <h1>Welcome back {props.username}</h1>
    }
    return <h1>Please log in</h1>*/

    const welcomeMessage= <h1 className="welcome-message">Welcome back {props.username}</h1> 
    const loginPrompt= <h1 className="login-prompt">Please log in</h1>

    return (props.isLoggedIn ? welcomeMessage : loginPrompt);
    // return(props.isLoggedIn ? <h1 className="welcome-message">Welcome back {props.username}</h1> : <h1 className="login-prompt">Please log in</h1>)
}
UserGreeting.PropTypes={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.defaultProps={
    username: 'Guest',
    isLoggedIn: false
}
export default UserGreeting