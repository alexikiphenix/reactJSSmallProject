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

// const value = {"year": 2023};
// const value2 = value;
// const value3 =  {"year": 2024};

// console.log("value =>", value);
// console.log("value2 =>", value2);
// console.log("value3 =>", value3);

// console.log("------------------ ");
// value3.year = 2024;
// console.log("value =>", value);
// console.log("value2 =>", value2);
// console.log("value3 =>", value3);



function App() {
  let [tweets, setTweets] = useState(DEFAULT_TWEETS);
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const userName = event.target.name.value;
    const content = event.target.content.value;

    const newTweet = {
      id: (tweets[tweets.length-1]?.id+1) ?? 0,
      userName,
      content,
      like: 0
    }

    addTweet(newTweet);
    console.log({newTweet});
  }

  const addTweet = (tweet) => {
    setTweets([...tweets, tweet]);
  }

  const onLike = (idTweet) => {
      const tweetsUpdated = tweets.map(
        (tweet) => 
        {
          if(tweet.id === idTweet)
          {
            tweet.like++
          }
          return tweet;
        }   
      )
      console.log(tweetsUpdated);      
      setTweets([...tweetsUpdated]);
  }
  // const tweetsList = tweets.map(tweet => <Tweet key={tweet.id} 
  //   userName={tweet.userName} 
  //   content={tweet.content}
  //   like={tweet.like}
  // />)
  const onDelete = (tweetId) =>
  {
    console.log(tweetId);
    setTweets((current) => current.filter(tweet => tweet.id !== tweetId));
  }
  return (
    <div>
      <h1>Hello world</h1>      
      <form onSubmit={handleSubmit} className="form-tweet" action="">
        <fieldset>
          <legend>Ajouter un tweet</legend>
          <input placeholder="nom" type="text" name="name" />  
          <textarea placeholder="message" name="content" />
          <button type="submit">Envoyer</button>
        </fieldset>
      </form>
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
                  onDelete={ (id)=>{
                      onDelete(id);
                    }
                  }
                  onLike={(id) =>{
                    onLike(id)
                  }}
                />
              )
            }
          )
        }
             
      </div>
    </div>
  )
}


export default App