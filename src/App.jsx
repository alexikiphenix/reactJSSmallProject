import { useState } from 'react';
import Tweet from './components/Tweet';

const DEFAULT_TWEETS = [
  {
    id: 1,
    userName: "Doe",
    content: "Je suis inconnu",
    like: 10
  },
  {
    id: 2,
    userName: "Cormier",
    content: "Craint par tout le monde",
    like: 2500
  },
  {
    id: 3,
    userName: "Jones",
    content: "Une exécution technique parfaite",
    like: 2500
  },
  {
    id: 4,
    userName: "McGregor",
    content: "star talentueuse",
    like: 2900
  },
]




function App() {
  let [tweets, setTweets] = useState(DEFAULT_TWEETS);
  let [userName, setUserName] = useState("");

  // const tweetsList = tweets.map(tweet => <Tweet key={tweet.id} 
  //   userName={tweet.userName} 
  //   content={tweet.content}
  //   like={tweet.like}
  // />)

  return (
    <div>
      <h1>Hello world</h1>        
      <div className="tweet-container">
        {
          tweets.map((tweet) => {return(<Tweet key={tweet.id} 
              userName={tweet.userName} 
              content={tweet.content}
              like={tweet.like}
              onDelete={ ()=>{
                  console.log("DELETE", tweet.id);  
                }
              }
            />
            )}
          )
        }
             
      </div>
    </div>
  )
}


export default App