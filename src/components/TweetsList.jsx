import Tweet from './Tweet';

const TweetsList = ({tweets, onDelete, onLike}) => {
    if(!tweets || tweets.length === 0) {
        return "Aucun tweet";
    }
    return(
        <div className="tweet-container">
        {
          tweets.map((tweet) => 
            {
              return(
                <Tweet 
                  key={tweet.id} 
                  id={tweet.id}
                  userName={tweet.userName} 
                  content={tweet.content}
                  like={tweet.like}
                  onDelete={onDelete}
                  onLike={onLike}
                />
              )
            }
          )
        }
             
      </div>
    )
}


export default TweetsList;