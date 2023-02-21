// Write your JS code here
import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItem: {}}

  componentDidMount() {
    this.getBlogItem()
  }

  getBlogItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      topic: data.topic,
      author: data.author,
      content: data.content,
      id: data.id,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
    }

    this.setState({blogItem: updatedData})
  }

  render() {
    const {blogItem} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogItem
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
