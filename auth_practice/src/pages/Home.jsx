import { posts } from "../data"
import Card from "../Components/Card"

const Home = () =>
{
    return (
        <div className="home">
            {posts.map(posts=>(
                <Card posts={posts}/>
            ))}
        </div>
    )
}

export default Home