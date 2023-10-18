import Tweet from './components/Tweet';

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <div className="tweet-container">
        <Tweet name="Doe" content="Je suis inconnu"/>
        <Tweet name="Jones" content="un méchant qui essaye d'être gentil" />
        <Tweet name="Cormier" content="craint par tout le monde"/>
        <Tweet name="McGregor" content="une star charismatique" />
     
      </div>
    </div>
  )
}


export default App