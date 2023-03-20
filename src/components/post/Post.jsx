import "./post.css";
import {MoreVert} from "@mui/icons-material"
import { Users } from "../../dummyData";
import { useState } from "react";

function Post({post}) {
    
    const [like,setlike] = useState(post.like)  //in the state we are going to give initial state that is number
    const [isLiked,setIsLiked] = useState(false) //because we did not like any post thats why its false   
    
    const likeHandler = ()=> {
        setlike(isLiked ? like-1 : like+1)   //inside this, setlike= (becasue we are going to change this like, and new like going to change according to our logic,** if this isLike which means we already like this post, ? im going to say like-1, : if you didnot like before, like+1. but now the counter is increasing so we need to make isLike state to false
        setIsLiked(!isLiked);
    }

    return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" />
                    <span className="postUserName">{Users.filter(u => u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assests/heart.png" onClick={likeHandler} alt="" />
                    <img className="likeIcon" src="assests/like.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people like it</span>   {/*before here was{post.like} {/* */}
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment}</span>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Post
