import { useLocation } from "react-router";
import { posts } from "../data.js";

const Post = () => {
  const location = useLocation();
    // this react router hook returns an object that comtains info of URL location
  // `location` has properties like `pathname` which provide details about htev URL
  const path = location.pathname.split("/")[2];

  const post = posts.find((p) => p.id.toString() === path);

  console.log(location);
  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
  );
};

export default Post;