import React from 'react';
import Tweet from './Tweet'

const TweetList = ({auteur,tweets,setTweets}) => {




    return(
    <div className="TweetList">
        {tweets.map((tweet) => (
        <Tweet setTweets={setTweets} tweet={tweet} auteur={auteur} tweets={tweets} key={tweet.id}/>
        ))}


    </div>
    )

}


export default TweetList;