// Write your code here
import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, toggleIsLike, deleteButton} = props
  const {name, comment, isLike, id, backgroundClassName, date} = commentDetails

  const isLikeBackground = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const isLikeButton = isLike ? 'isLikeButton' : 'likeButton'
  const onClickLikeIcon = () => {
    toggleIsLike(id)
  }
  const onDelete = () => {
    deleteButton(id)
  }

  return (
    <li className="list">
      <div className="totalCommentSection">
        <p className={`paragraphName ${backgroundClassName}`}>{name[0]}</p>

        <div className="nameAndCommentSection">
          <div className="nameSection">
            <p className="name">{name}</p>
            <p>{formatDistanceToNow(date)}</p>
          </div>

          <div className="commentSection">
            <p className="comment">{comment}</p>
          </div>
        </div>
      </div>

      <div className="likeImageSection">
        <div className="likeSection">
          <img className="likeImage" src={isLikeBackground} alt="likeImage" />
          <button
            type="button"
            className={isLikeButton}
            onClick={onClickLikeIcon}
          >
            Like
          </button>
        </div>
         <button type="button" className="deleteButton" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
            onClick={onDelete}
            className="deleteIcon"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
