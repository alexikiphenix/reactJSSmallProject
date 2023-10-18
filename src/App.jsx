import { useState } from 'react';
import Tweet from './components/Tweet';

function App() {
  let [tweets, setTweets] = useState(0);
  let [userName, setUserName] = useState('marcus');

  const addHyphen = () => 
  {
    setUserName('-'+userName+'-');
  }

  return (
    <div>
      <h1>Hello world</h1>
        <button onClick={addHyphen}>Ajouter - </button>
      <div className="tweet-container">
        <Tweet name={userName} content="Je suis inconnu" like={0} />
        <Tweet name={userName} content="un méchant qui essaye d'être gentil" like={0} />
        <Tweet name={userName} content="craint par tout le monde" like={0} />
        <Tweet name={userName} content="une star charismatique" like={0} />
     
      </div>
    </div>
  )
}


export default App