import { Link } from "react-router-dom";
import { posts } from "../data";

const Card = ({posts}) =>
{
    return (
        <div className="card">
            <Link className="link" to='/post/${post.id}'>
                <span className="Card_Title">{posts.title}</span>
                <img src={posts.img} alt="" className="img"></img>
                <p className="desc">{posts.desc}</p>
                <button className="cardButton">Read More</button>
                </Link>
        </div>
    );
}

export default Card;