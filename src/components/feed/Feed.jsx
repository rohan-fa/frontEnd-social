import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import {Posts} from '../../dummyData'

function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {Posts.map(p => (
          <Post key={p.id} post={p} /> //and for each post im going to retuen something, what is that? just a post.and inside this post we will send this single post. we should indicate key because we are appling map. bacuse all the data has id.
        ))}        
      </div>
    </div>
  )
}

export default Feed
