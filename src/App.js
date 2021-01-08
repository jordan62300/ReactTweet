import React from 'react';
import CreateTweet from './components/CreateTweet'
import TweetList from './components/TweetList'



function App() {

  const nom = "jordan"
  const message = "Voici un tweet original"

  return (
    <div className="App">
      <h1>Hello React</h1>
      <CreateTweet  />
      <TweetList  auteur={nom} message={message}/>
    </div>
  );
}

export default App;
