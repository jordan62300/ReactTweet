import React , {useState , useEffect} from 'react';
import CreateTweet from './components/CreateTweet'
import TweetList from './components/TweetList'



function App() {

  

  const [textInput, setTextInput] = useState('');
  const [tweets,setTweets] = useState([]);

  const nom = "jordan"


  useEffect(() => {
    console.log('funct running')
  },[])

  return (
    <div className="App">
      <h1>Hello React</h1>
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} />
      <TweetList setTweets={setTweets} tweets={tweets}  auteur={nom} />
    </div>
  );
}

export default App;
