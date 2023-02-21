// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, topic, author, avatarUrl, imageUrl} = blogDetails
  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="blog-cont">
        <img className="topic-img" alt="topic" src={imageUrl} />
        <div>
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="auth-cont">
            <img className="auth-img" src={avatarUrl} alt="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
