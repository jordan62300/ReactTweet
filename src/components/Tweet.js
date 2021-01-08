import React from 'react';
import '../styles/Tweet.scss'


const Tweet = ({auteur,tweet,tweets,setTweets}) => {

    const removeTweet = () => {
        setTweets(tweets.filter((state) => state.id !== tweet.id))
    }


    return(
    <div className="tweet">
        <h2 >Nom : {auteur}</h2>
        <h3> message : {tweet.message}</h3>
        <button onClick={ () => removeTweet()}>Supprimer</button>
        <button>Like</button>
    </div>
    )

}


export default Tweet;