import {Component} from 'react'

import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: {
      id: v4(),
      name: 'ram',
      comment: 'good',
      isLike: false,
      date: new Date(),
      backgroundClassName: '',
    },
    name: '',
    comment: '',
    count: 0,
  }

  toggleIsLike = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.map(eachComment => {
      if (id === eachComment.id) {
        return {...eachComment, isLike: !eachComment.isLike}
      }
      return eachComment
    })

    this.setState({
      commentsList: filteredList,
    })
  }

  toDelete = id => {
    const {commentsList} = this.state
    const deleteItem = commentsList.filter(eachComment => eachComment.id !== id)
    this.setState(prevState => ({
      commentsList: deleteItem,

      count: prevState.count - 1,
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const initialContainerBackgroundClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(Math.random().initialContainerBackgroundClassNames.length - 1)
      ]
    const newComment = {
      id: v4(),
      name,
      comment,
      isLike: false,
      date: new Date(),
      backgroundClassName: initialContainerBackgroundClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {commentsList, name, comment, count} = this.state
    console.log(commentsList)
    return (
      <div className="comment-container">
        <h1 className="heading">Comments</h1>
        <div className="formAndImage">
          <div>
            <p className="paragraph1">Say something about 4.0 Technologies</p>
            <form
              className="comment-form-container"
              onSubmit={this.onAddComment}
            >
              <input
                value={name}
                onChange={this.onChangeName}
                className="input1"
                placeholder="Your Name"
              />
              <input
                className="input2"
                value={comment}
                onChange={this.onChangeComment}
                placeholder="Your Comment"
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>

          <div>
            <img
              className="commentImage"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="Comments"
            />
          </div>
        </div>
        <hr />
        <div className="countSection">
          <p className="paragraph2">{count}</p>
          <p className="paragraph3">Comment</p>
        </div>

        <ul className="comments-table">
          <CommentItem
            commentDetails={commentsList}
            toggleIsLike={this.toggleIsLike}
            deleteButton={this.toDelete}
          />
        </ul>
      </div>
    )
  }
}

export default Comments
