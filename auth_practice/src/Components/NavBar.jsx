import { Link } from "react-router-dom";

const NavBar = ({user}) =>
{
    return (
        <div className="navbar">
            <span className="logo">
                <Link className="link" to="/">Ping Pong</Link>
                </span>{
                user ? (
            <ul className="list">
                <li className="listItem">
                <img src="/user.png" alt="" className="avatar" />
                </li>
                <li className="listItem">Abderazzak Ouamd</li>
                <li className="listItem">Logout</li>
            </ul>
            ) : (<Link className="link" to="login">Login</Link>)
        }
        </div>
    )
}

export default  NavBar;