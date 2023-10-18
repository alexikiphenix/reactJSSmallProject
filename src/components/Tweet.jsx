const Tweet = ({id, userName, content, like, onDelete, onLike}) => {
   
    
    return(
        <div className="tweet">
          <button onClick={() => onDelete(id)} 
            className="btnDelete" required>X
          </button>
          <h3>{userName}</h3>
          <p>{content}</p>
          <button onClick={() => {onLike(id)}}>{like}❤️</button>
        </div>
    )
}


export default Tweet;