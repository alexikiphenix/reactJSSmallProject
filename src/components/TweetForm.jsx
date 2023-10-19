const TweetForm = ({onSubmit}) =>
{
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const userName = event.target.name.value;
    const content = event.target.content.value;

    const newTweet = {     
      //id: (tweets[tweets.length-1]?.id+1) ?? 0,
      userName,
      content,
      like: 0
    }
    onSubmit(newTweet)  
    
  }

  return(
    <form onSubmit={handleSubmit} className="form-tweet" action="">
      <fieldset>
        <legend>Ajouter un tweet</legend>
        <input placeholder="nom" type="text" name="name" />  
        <textarea placeholder="message" name="content" />
        <button type="submit">Envoyer</button>
      </fieldset>
    </form>
  )
}

export default TweetForm;